import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styler from "../styles/About.module.css"

const about = () => {
  const [education, setEducation] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/education").then((a) => {
      return a.json()
    }).then((res) => {
      setEducation(JSON.parse(res))
    })
  })
  useEffect(()=>{
    let a = document.getElementById("sec")
    a.style.height = ((230+20)*education.length+100)+"px"
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
                <p className={styler.eduCardHead}>{edu.program}</p>
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

        {/* <div className={styler.eduCard}>
          <div className={styler.eduInfo}>
            <p className={styler.eduCardHead}>B.Sc. in Data Analytics</p>
            <p className={styler.eduCardName}>Delhi Skill and Enterpreneurship University</p>
            <p className={styler.eduCardName}>2021 - Present • 3 Years</p>
            <p className={styler.eduCardDesc}>
              Currently, I am immersed in a transformative educational journey at the prestigious IIT Madras, pursuing a comprehensive Bachelor of Science in Programming and Data Science. This four-year program is equipping me with a profound understanding of programming intricacies, data analysis, and scientific methodologies. As I progress through its dynamic curriculum, which spans foundational, diploma, and degree levels, I am engaged in interactive online live classes, immersive projects, and credit-based courses. This experience is molding me into a skilled professional. My commitment to excellence and my passion for learning are driving me to embrace every facet of this educational odyssey with enthusiasm and dedication.</p>
          </div>
          <div className={styler.eduImg}>
            <Image src="/About/Educational Background/IITM.png" height={500} width={500} alt="IITM" className={styler.eduLogo}></Image>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default about