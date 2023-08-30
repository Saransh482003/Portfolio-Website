import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styler from "../styles/About.module.css"

const about = () => {
  const [education, setEducation] = useState([])
  const [extra, setExtra] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/education").then((a) => {
      return a.json()
    }).then((res) => {
      setEducation(JSON.parse(res))
    })
  },[])
  useEffect(() => {
    fetch("http://localhost:3000/api/extra").then((a) => {
      return a.json()
    }).then((res) => {
      setExtra(JSON.parse(res))
    })
  },[])
  useEffect(() => {
    let a = document.getElementById("sec")
    a.style.height = ((230 + 20) * education.length + 100) + "px"
  })
  useEffect(() => {
    let a = document.getElementById("extraCon")
    console.log()
    a.style.height = (40*Math.ceil((education.length-1)/3)) + "rem";
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
      <section className={styler.extra}>
        <h1 className={styler.eduHead}>Extra Curricular Activities</h1>
        <div className={styler.extraContainer} id="extraCon">
          {extra.map((ex,ind)=>{
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
          
          {/* <div className={styler.extraCard}>
            <div className={styler.extraImg}>
              <Image src="/About/Extra Curricular/Stanford.jpg" width={920} height={404} alt="Data Ki Science" className={styler.extraImger}></Image>
            </div>
            <div className={styler.extraInfo}>
              <h1 className={styler.extraHead}>Code in Place Section Leader</h1>
              <p className={styler.extraDesc}>I volunteered as a Section Leader in Stanford University’s course named Code in Place. It is a course spanning 6 weeks of learning into programming. I was allotted a section of 16 students, from all over the world, to teach Python programming language.</p>
            </div>
          </div>
          <div className={styler.extraCard}>
            <div className={styler.extraImg}>
              <Image src="/About/Extra Curricular/Code Spardha Banner Edited.png" width={920} height={404} alt="Data Ki Science" className={styler.extraImger}></Image>
            </div>
            <div className={styler.extraInfo}>
              <h1 className={styler.extraHead}>Code Spardha Organiser</h1>
              <p className={styler.extraDesc}>Lead the organizing team of an Online Coding Competition named "Code Spardha" on 28th May 2022 and it’s second instalment on 7 January 2023. 300+ participants from all over Delhi participated in the competition.</p>
            </div>
          </div> */}

        </div>
      </section>
    </>
  )
}

export default about