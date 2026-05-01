import React, { useEffect, useState } from 'react'
import styler from '../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

const projects = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const typeConfig = {
    'AI&DL': '#990000',
    'LLM': 'rgb(248, 132, 0)',
    'Full Stack': 'green'
  }

  useEffect(() => {
    fetch('/api/projectsFetcher').then((a) => {
      return a.json()
    }).then((res) => {
      setProjects(res)
    })
  }, [])

  const filteredProjects = projects.filter(proj => filter === 'All' || proj.type === filter);

  return (
    <>
      <section className={styler.banner} style={{paddingTop: '8rem'}}>
        <p className={styler.pageHead}>MY PROJECTS</p>
        <p className={styler.quote}>\In my projects, complete and ongoing, I orchestrate a symphony of passion and relentless effort, crafting a masterpiece that defines me.\</p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          {['All', 'AI&DL', 'LLM', 'Full Stack'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '2rem',
              border: filter === f ? '2px solid var(--primary-color)' : '2px solid transparent',
              backgroundColor: filter === f ? 'transparent' : 'var(--primary-color)',
              color: filter === f ? 'var(--primary-color)' : 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: '0.3s'
            }}>
              {f} Projects
            </button>
          ))}
        </div>
      </section>
      
      <section className={styler.projectSpace}>
        {
          filteredProjects.map((proj, index) => {
            const color = typeConfig[proj.type] || 'black';
            return <div key={index} className={styler.project}>
              <div className={styler.projectStatus} style={{ backgroundColor: color }}>{proj.type}</div>
              <div className={styler.projectValue} style={{ borderColor: color }}>
                <div className={styler.projectInfo}>
                  <div className={styler.ImgContainer}>
                    <Image src={proj.projImg} width={1000} height={1000} className={styler.Img} alt={proj.title}></Image>
                  </div>
                  <div className={styler.info}>
                    <h1 className={styler.h1}>{proj.title}</h1>
                    <p className={styler.date}>{proj.date}</p>
                    <div className={styler.type} style={{ backgroundColor: color }}>{proj.type}</div>
                  </div>
                </div>
                <hr></hr>
                <div className={styler.content}>
                  <div className={styler.descTray}>
                    <p className={styler.descHead}>DESCRIPTION</p>
                    <div className={styler.desc}>{proj.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}</div>
                  </div>
                  <p className={styler.descHead}>SKILLS USED</p>
                  <div className={styler.skillTray}>
                    {
                      proj.skills.map((skill, i) => {
                        return <Image key={i} src={skill.img} width={200} height={200} className={styler.skill} title={skill.name} alt={skill.name}></Image>
                      })
                    }
                  </div>
                  <div className={styler.links}>
                    <Link href={proj.link} target={proj.link === '/projects' ? '_self' : '_blank'} className={styler.link} style={{
                      backgroundColor: hoveredIndex === index ? color : '', borderColor: color, color: hoveredIndex === index ? 'white' : color
                    }} onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}>Go to Project</Link>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      <div style={{textAlign: 'center', width: '100%', margin: '2rem 0', color: 'white'}}>You have reached the end!!</div>
      </section>
    </>
  )
}

export default projects
