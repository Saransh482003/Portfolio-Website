import React, { useEffect, useState } from 'react'
import styler from "../styles/Projects.module.css"
import Image from 'next/image'
import Link from 'next/link'


const projects = () => {
  const [projects, setProjects] = useState([])
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const colorPalete = ["green", "rgb(248, 132, 0)", "#990000", "black"]
  const typePalete = ["Completed", "Ongoing", "On Hold", "Future Plans"]
  useEffect(() => {
    fetch("http://localhost:3000/api/projectsFetcher").then((a) => {
      return a.json()
    }).then((res) => {
      setProjects(res)
    })
  }, [])

  return (
    <>
      <section className={styler.banner}>
        <p className={styler.pageHead}>MY PROJECTS</p>
        <p className={styler.quote}>"In my projects, complete and ongoing, I orchestrate a symphony of passion and relentless effort, crafting a masterpiece that defines me."</p>
      </section>
      <section className={styler.projectSpace}>
        {
          projects.map((typer, index) => {
            return typer.map(proj => {
              return <div className={styler.project}>
                <div className={styler.projectStatus} style={{ "backgroundColor": colorPalete[index] }}>{typePalete[index]}</div>
                <div className={styler.projectValue} style={{ "borderColor": colorPalete[index] }}>
                  <div className={styler.projectInfo}>
                    <div className={styler.ImgContainer}>
                      <Image src="/Projects/the-fitting-of-6-models.png" width={200} height={200} className={styler.Img}></Image>
                    </div>
                    <div className={styler.info}>
                      <h1 className={styler.h1}>{proj.title}</h1>
                      <p className={styler.date}>{proj.date}</p>
                      <div className={styler.type} style={{ "backgroundColor": colorPalete[index] }}>{proj.type}</div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className={styler.content}>
                    <div className={styler.descTray}>
                      <p className={styler.descHead}>DESCRIPTION</p>
                      <p className={styler.desc}>{proj.description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}</p>
                    </div>
                    <p className={styler.descHead}>SKILLS USED</p>
                    <div className={styler.skillTray}>
                      {
                        proj.skills.map(skill => {
                          return <Image src={skill.img} width={200} height={200} className={styler.skill} title={skill.name}></Image>
                        })
                      }

                    </div>
                    <div className={styler.links}>
                      <Link href={proj.link} target={proj.link === "/projects" ? "_self" : "_blank"} className={styler.link} style={{
                        backgroundColor: hoveredIndex === index ? colorPalete[index] : '', borderColor: colorPalete[index], color: hoveredIndex === index ? "" : colorPalete[index]
                      }} onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}>Go to Project</Link>
                    </div>

                  </div>
                </div>
              </div>
            })

          })
        }
        
      <div>You have reached the end!!</div>
      </section>
    </>
  )
}

export default projects