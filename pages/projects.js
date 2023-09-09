import React from 'react'
import styler from "../styles/Projects.module.css"


const projects = () => {
  return (
    <>
      <section className={styler.banner}>
        <p className={styler.pageHead}>MY PROJECTS</p>
        <p className={styler.quote}>"In my projects, complete and ongoing, I orchestrate a symphony of passion and relentless effort, crafting a masterpiece that defines me."</p>
      </section>
    </>
  )
}

export default projects