import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Components/navbar'
import styler from "../styles/Index.module.css"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { resolve } from 'styled-jsx/css'

const inter = Inter({ subsets: ['latin'] })
const skills = ['Python', 'Java', 'JavaScript', 'MS Excel', 'MySQL', 'Data Preprocessing', 'DSA', 'Machine Learning', 'Deep Learning', 'Android App Development', 'Full Stack Development']
const maxString = Math.max(...skills.map(x => x.length))
// fetch("http://localhost:3000/api/skills").then((a) => {
//   return a.json()
// }).then((res) => {
//   console.log(Object.values(JSON.parse(res)),23)
// })

export default function Home() {
  const [index, setIndex] = useState(0);
  const [skill, setSkill] = useState("Python");
  const [ind, setInd] = useState(0);
  const [char, setChar] = useState("");
  const [flag, setFlag] = useState(false)
  const [explore, setExplore] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/explorer").then((a) => {
      return a.json()
    }).then((res) => {
      setExplore(JSON.parse(res))
    })
  }, [])

  // useEffect(()=>{
  //   setSkill(skills[0])
  //   setMaxString(Math.max(...skills.map(x => x.length)))
  //   return ()=>{}
  // },[skills])
  useEffect(() => {
    const skillIter = setInterval(() => {
      setIndex((index + 1) % skills.length)
    }, 75 * (skill.length + maxString) + 5)
    return () => clearInterval(skillIter)
  }, [skill, index, skills, maxString])

  useEffect(() => {
    const charCounter = setInterval(() => {
      if (ind < skill.length) {
        setInd(ind + 1)
        setChar(char.concat(skill.charAt(ind)))
      }
    }, 50)
    return () => {
      clearInterval(charCounter)
    }
  }, [skill, ind, skills])

  useEffect(() => {
    if ((char.length == skill.length) && flag == false) {
      // console.log("hgv")
      setChar(char.concat(" ".repeat(maxString * 2)))
      setFlag(true)
    }
  })

  useEffect(() => {
    const decChar = setInterval(() => {
      if (flag) {
        setChar(char.slice(0, -1))
      }
    }, 25)
    return () => {
      clearInterval(decChar)
    }
  }, [char, skill])

  useEffect(() => {
    console.log(char)
    let a = document.getElementById("skiller")
    a.innerHTML = char
  }, [skill, char, ind])

  useEffect(() => {
    // console.log(skill,maxString)
    setSkill(skills[index])
    setInd(0)
    setChar("")
    setFlag(false)
  }, [index])


  return (
    <>
      <section className={styler.section}>
        <div className={styler.welcome}>
          <h1 className={styler.iam}>Hi! I am </h1>
          <h1 className={styler.name}>Saransh Saini</h1>
          <div className={styler.skillset}>
            <h1 className={styler.iknow}>I know : </h1>
            <h1 className={styler.skills} id='skiller'>Python</h1>
          </div>
          <p className={styler.intro}>Greetings! I'm a dedicated student passionate about Data Science, pursuing a BS in Data Science at IIT Madras and a B.Sc. in Data Analytics at DSEU. I share insights on my YouTube channel, guide learners as a Section Leader at Stanford University's "Code in Place," and organize coding events. Projects like "MaanSick" Mental Health App and "Anukaran" for auditory impairments reflect my tech-driven compassion. Currently scratch-coding a comprehensive Data Structure and Algorithm library to enhance my skills.</p>
          <p className={styler.wel}>Welcome to my journey of learning, leadership, and innovation!!!</p>
        </div>
        <div className={styler.pic}>
          <Image src="/mypic.png" width={800} height={898} alt={"mypic"} className={styler.mypic}></Image>
        </div>
      </section>
      {/* <hr></hr> */}
      <section className={styler.menu}>
        <h1 className={styler.guide}>Exploration Guide</h1>
        <div className={styler.guide_body}>

          {
            explore.map((exp, index) => {
              return <div className={styler.card}>
                <Image src={exp.img} width={1076} height={917} alt={exp.title} className={styler.cardImg}></Image>
                <div className={styler.cardInfo}>
                  <p className={styler.infoHead}>{exp.title}</p>
                  <p className={styler.infoDesc}>{exp.description}</p>
                </div>
                <Link href={exp.link} className={styler.goBtn}>
                  <p className={styler.btn}>Explore</p>
                </Link>
              </div>
            })
          }
          {/* <div className={styler.card}>
            <Image src="/Home Cards/about.jpg" width={1076} height={917} className={styler.cardImg}></Image>
            <div className={styler.cardInfo}>
              <p className={styler.infoHead}>ABOUT ME</p>
              <p className={styler.infoDesc}>Step into my world of curiosity and exploration. Discover my journey as a devoted Data Science enthusiast, and unravel the layers of my educational pursuits, leadership experiences, and innovative projects!</p>
            </div>
            <Link href="/about" className={styler.goBtn}>
              <p className={styler.btn}>Explore</p>
            </Link>
          </div>

          <div className={styler.card}>
            <Image src="/Home Cards/learn.jpg" width={1000} height={667} className={styler.cardImg}></Image>
            <div className={styler.cardInfo}>
              <p className={styler.infoHead}>LEARN</p>
              <p className={styler.infoDesc}>Curious about Data Science and Machine Learning? Tune in to "Data Ki Science" for engaging insights and tutorials. Learn Data Science concepts like Machine Learning, Python Programming, and a lot more. Let's explore together!</p>
            </div>
            <Link href="/learn" className={styler.goBtn}>
              <p className={styler.btn}>Explore</p>
            </Link>
          </div>

          <div className={styler.card}>
            <Image src="/Home Cards/blog.jpg" width={1000} height={667} className={styler.cardImg}></Image>
            <div className={styler.cardInfo}>
              <p className={styler.infoHead}>BLOGS</p>
              <p className={styler.infoDesc}>Step into a treasure trove of insights at my blog corner. Uncover articles on Data Science, Machine Learning, and more. Let's explore the fascinating world of tech and knowledge together!</p>
            </div>
            <Link href="/blogs" className={styler.goBtn}>
              <p className={styler.btn}>Explore</p>
            </Link>
          </div>

          <div className={styler.card}>
            <Image src="/Home Cards/projects.jpg" width={1920} height={1080} className={styler.cardImg}></Image>
            <div className={styler.cardInfo}>
              <p className={styler.infoHead}>MY PROJECTS</p>
              <p className={styler.infoDesc}>Discover a fusion of creativity and innovation in my project showcase. From Machine Learning marvels to captivating Web and Android developments, explore the exciting landscapes of my work. Let's journey through the realm of tech and possibilities!</p>
            </div>
            <Link href="/projects" className={styler.goBtn}>
              <p className={styler.btn}>Explore</p>
            </Link>
          </div> */}
        </div>
      </section>

    </>
  )
}
