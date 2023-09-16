import React, { useEffect, useState } from 'react'
import styler from "../styles/Learn.module.css"
import Image from 'next/image'
import Link from 'next/link'

const learn = () => {
  const [courses, setCourses] = useState([])
  const [lecture, setLecture] = useState([])
  useEffect(() => {
    fetch("/api/learnCourses").then((a) => {
      return a.json()
    }).then((res) => {
      setCourses(res)
    })
  }, [])
  useEffect(() => {
    fetch("/api/learnLectures").then((a) => {
      return a.json()
    }).then((res) => {
      setLecture(res)
    })
  }, [])
  return (
    <>
      <section className={styler.channel}>
        <p className={styler.pageHead}>LEARN</p>
        <p className={styler.quote}>"Teaching, the sublime voyage of wisdom, unfolds as the most profound form of learning, while the art of bestowing knowledge becomes our noble offering to a world thirsting for intellectual nourishment."</p>
      </section>
      <section className={styler.coursesSection}>
        <h1 className={styler.coursesHead}>Courses</h1>
        <div className={styler.coursesExpo}>
          {
            courses.map(cour => {
              return <div className={styler.card}>
                <div className={styler.imgContainer}>
                  <Image src={cour.img} width={500} height={281.25} className={styler.img}></Image>
                </div>
                <div className={styler.info}>
                  <div className={styler.content}>
                    <h1 className={styler.title}>{cour.head}</h1>
                    <p className={styler.description}>{cour.description}</p>
                  </div>

                  <div className={styler.skillSet}>
                    <p className={styler.skillHead}>Skills to learn:</p>
                    <div className={styler.skillsBox}>
                      {
                        cour.skills.map(skill => {
                          return <Image src={skill.skillImg} width={200} height={200} className={styler.skill} title={skill.name}></Image>
                        })
                      }
                    </div>
                  </div>
                  <div className={styler.btn}>
                    <Link href={cour.link} target="_blank" className={styler.goBtn}>Start Watching</Link>
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </section>
      <section className={styler.coursesSection}>
        <h1 className={styler.coursesHead}>Lectures</h1>
        <div className={styler.coursesExpo}>
          {
            lecture.map(lec => {
              return <div className={styler.card}>
                <div className={styler.imgContainer}>
                  <Image src={lec.img} width={500} height={281.25} className={styler.img}></Image>
                </div>
                <div className={styler.info}>
                  <div className={styler.content}>
                    <h1 className={styler.title}>{lec.head}</h1>
                    <p className={styler.description}>{lec.description}</p>
                  </div>
                
                <div className={styler.skillSet}>
                  <div className={styler.skillHead}>Skills to learn:</div>
                  <div className={styler.skillsBox}>
                    {
                      lec.skills.map(skill => {
                        return <Image src={skill.skillImg} width={200} height={200} className={styler.skill} title={skill.name}></Image>
                      })
                    }
                  </div>
                </div>
                <div className={styler.btn}>
                  <Link href={lec.link} target="_blank" className={styler.goBtn}>Start Watching</Link>
                </div>
              </div>
              </div>
            })
          }

        </div>
      </section>
    </>
  )
}

// export async function getServerSideProps(context){
//   const protocol = context.req.headers['x-forwarded-proto'] || 'http';
//   const host = context.req.headers.host;

//   let coursesData = await fetch(`${protocol}://${host}/api/learnCourses`)
//   let coursesFetchData = await coursesData.json()
  
//   let lecturesData = await fetch(`${protocol}://${host}/api/learnLectures`)
//   let lecturesFetchData = await lecturesData.json()
  
//   return {
//     props : {coursesFetchData,lecturesFetchData}
//   }
// }
export default learn