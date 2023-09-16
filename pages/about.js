import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styler from "../styles/About.module.css"
import Link from 'next/link'

const about = (props) => {
  const [education, setEducation] = useState(props.eduFetchData)
  const [extra, setExtra] = useState(props.extraFetchData)
  const [skills, setSkills] = useState(props.skillFetchData)
  const [additional, setAdditional] = useState(props.addFetchData)

  // useEffect(() => {
  //   fetch("/api/education").then((a) => {
  //     return a.json()
  //   }).then((res) => {
  //     setEducation(res)
  //   })
  // }, [])
  // useEffect(() => {
  //   fetch("/api/extra").then((a) => {
  //     return a.json()
  //   }).then((res) => {
  //     setExtra(res)

  //   })
  // }, [])
  // useEffect(() => {
  //   fetch("/api/aboutSkill").then((a) => {
  //     return a.json()
  //   }).then((res) => {
  //     setSkills(res)
  //   })
  // }, [])
  // useEffect(() => {
  //   fetch("/api/aboutAdd").then((a) => {
  //     return a.json()
  //   }).then((res) => {
  //     setAdditional(res)
  //   })
  // }, [])
  return (
    <>
      <section className={styler.about}>
        <p className={styler.head}>ABOUT ME</p>
        <p className={styler.quote}>"Like a quill poised above an open page, my 'About Me' is a journey of discovery, where each word penned and every experience lived adds to the ever-growing narrative of who I am and who I aim to be."</p>
      </section>
      <section className={styler.edu}>
        <h1 className={styler.eduHead}>Educational Background</h1>
        {
          education.map((edu, ind) => {
            return <div className={styler.eduCard}>
              <div className={styler.eduInfo}>
                <h1 className={styler.eduCardHead}>{edu.program}</h1>
                <p className={styler.eduCardName}>{edu.name}</p>
                <p className={styler.eduCardName}>{edu.duration} • {edu.years}</p>
                <p className={styler.eduCardDesc}>{edu.description}</p>
              </div>
              <div className={styler.eduImg}>
                <Image src={edu.img} height={500} width={500} alt={edu.name} className={styler.eduLogo}></Image>
              </div>
            </div>
          })
        }
      </section>
      <section className={styler.extra} id="extraSuper">
        <h1 className={styler.eduHead}>Extra Curricular Activities</h1>
        <div className={styler.extraContainer} id="extraCon">
          {extra.map((ex, ind) => {
            return <Link href={ex.link} target='_blank' className={styler.extraCard}>
              <div className={styler.extraImg}>
                <Image src={ex.img} width={920} height={404} alt={ex.head} className={styler.extraImger}></Image>
              </div>
              <div className={styler.extraInfo}>
                <h1 className={styler.extraHead}>{ex.head}</h1>
                <p className={styler.extraDesc}>{ex.description}</p>
              </div>
            </Link>
          })
          }
        </div>
      </section>
      <section className={styler.skills}>
        <h1 className={styler.eduHead}>My Skills</h1>
        <div className={styler.skillContainer}>
          {Object.keys(skills).filter(key => !key.endsWith(" Col")).map(cat => (
            <div className={styler.skillBasket} key={cat}>
              <div className={styler.skillCategory} style={{ backgroundColor: skills[cat.concat(" Col")] }}>
                {cat}
              </div>
              <div className={styler.skillSet} style={{ borderColor: skills[cat.concat(" Col")] }}>
                {skills[cat].map((skill, index) => (
                  <div className={styler.skillCard} key={index} style={{ borderColor: skills[cat.concat(" Col")] }}>
                    <div className={styler.skillImg} style={{ backgroundColor: skills[cat.concat(" Col")] }}>
                      <Image src={skill.img} width={200} height={200} className={styler.skillImager} alt={skill.name}></Image>
                    </div>
                    <div className={styler.skillInfo}>
                      <p className={styler.skillName}>{skill.name}</p>
                      <div className={styler.skillLevel} style={{ backgroundColor: skills[cat.concat(" Col")] }}>
                        {skill.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styler.add}>
        <h1 className={styler.eduHead}>Additional Information</h1>
        <div className={styler.addContainer}>
          {
            Object.keys(additional).filter(k => !k.endsWith(" Col")).map((addition) => {
              return <div className={styler.addSubContainer}>
                <div className={styler.addHead} style={{ backgroundColor: additional[addition.concat(" Col")] }}>{addition}</div>
                <div className={styler.addContent}>
                  {
                    additional[addition].map((items) => {
                      return <div className={styler.addCard}>
                        <div className={styler.addImg} style={{ backgroundColor: additional[addition.concat(" Col")] }}>
                          <Image src={items.img} width={200} height={200} className={styler.addImager} alt={items.name}></Image>
                        </div>
                        <div className={styler.addInfo}>
                          <p className={styler.addName}>{items.name}</p>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context){
  const protocol = context.req.headers['x-forwarded-proto'] || 'http';
  const host = context.req.headers.host;

  let eduData = await fetch(`${protocol}://${host}/api/education`)
  let eduFetchData = await eduData.json()
  
  let extraData = await fetch(`${protocol}://${host}/api/extra`)
  let extraFetchData = await extraData.json()
  
  let skillData = await fetch(`${protocol}://${host}/api/aboutSkill`)
  let skillFetchData = await skillData.json()
  
  let addData = await fetch(`${protocol}://${host}/api/aboutAdd`)
  let addFetchData = await addData.json()
  
  return {
    props : {eduFetchData,extraFetchData,skillFetchData,addFetchData}
  }
}

export default about