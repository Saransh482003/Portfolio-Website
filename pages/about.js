import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styler from "../styles/About.module.css"

const about = () => {
  const [education, setEducation] = useState([])
  const [extra, setExtra] = useState([])
  const [skills, setSkills] = useState({})
  // const [programming, setProgramming] = useState([])
  // const [programmingCol, setProgrammingCol] = useState("green")
  // const [data, setData] = useState([])
  // const [dataCol, setDataCol] = useState("green")
  // const [machineAi, setMachineAi] = useState([])
  // const [machineAiCol, setMachineAiCol] = useState("rgb(248, 132, 0)")
  // const [webApp, setWebApp] = useState([])
  // const [webAppCol, setWebAppCol] = useState("green")
  useEffect(() => {
    fetch("http://localhost:3000/api/education").then((a) => {
      return a.json()
    }).then((res) => {
      setEducation(JSON.parse(res))
    })
  }, [])
  useEffect(() => {
    fetch("http://localhost:3000/api/extra").then((a) => {
      return a.json()
    }).then((res) => {
      setExtra(JSON.parse(res))
    })
  }, [])
  useEffect(() => {
    fetch("http://localhost:3000/api/aboutSkill").then((a) => {
      return a.json()
    }).then((res) => {
      setSkills(JSON.parse(res))
      // setProgramming(JSON.parse(res)["Programming_Languages"])
      // setProgramming(JSON.parse(res)["Programming_Languages"])
      // setProgramming(JSON.parse(res)["Programming_Languages"])
      // setProgramming(JSON.parse(res)["Programming_Languages"])
    })
  }, [])
  useEffect(() => {
    let a = document.getElementById("sec")
    a.style.height = ((230 + 20) * education.length + 100) + "px"
  })
  return (
    <>
      <section className={styler.about}>
        <p className={styler.head}>ABOUT ME</p>
        <p className={styler.quote}>"Like a quill poised above an open page, my 'About Me' is a journey of discovery, where each word penned and every experience lived adds to the ever-growing narrative of who I am and who I aim to be."</p>
      </section>
      <section className={styler.edu} id="sec">
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
            return <div className={styler.extraCard}>
              <div className={styler.extraImg}>
                <Image src={ex.img} width={920} height={404} alt={ex.head} className={styler.extraImger}></Image>
              </div>
              <div className={styler.extraInfo}>
                <h1 className={styler.extraHead}>{ex.head}</h1>
                <p className={styler.extraDesc}>{ex.description}</p>
              </div>
            </div>
          })
          }
        </div>
      </section>
      <section className={styler.skills}>
        <h1 className={styler.eduHead}>My Skills</h1>
        <div className={styler.skillContainer}>
        {Object.keys(skills).filter(key => !key.endsWith(" Col")).map(cat => (
          <div className={styler.skillBasket} key={cat}>
            <div className={styler.skillCategory} style={{ backgroundColor: skills[cat.concat(" Col")]}}>
              {cat}
            </div>
            <div className={styler.skillSet} style={{borderColor: skills[cat.concat(" Col")]}}>
              {skills[cat].map((skill, index) => (
                <div className={styler.skillCard} key={index} style={{borderColor: skills[cat.concat(" Col")]}}>
                  <div className={styler.skillImg} style={{backgroundColor: skills[cat.concat(" Col")]}}>
                    <Image src={skill.img} width={200} height={200} className={styler.skillImager} alt={skill.name}></Image>
                  </div>
                  <div className={styler.skillInfo}>
                    <p className={styler.skillName}>{skill.name}</p>
                    <div className={styler.skillLevel} style={{backgroundColor: skills[cat.concat(" Col")]}}>
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
    </>
  )
}

export default about