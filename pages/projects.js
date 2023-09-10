import React from 'react'
import styler from "../styles/Projects.module.css"
import Image from 'next/image'
import Link from 'next/link'


const projects = () => {
  return (
    <>
      <section className={styler.banner}>
        <p className={styler.pageHead}>MY PROJECTS</p>
        <p className={styler.quote}>"In my projects, complete and ongoing, I orchestrate a symphony of passion and relentless effort, crafting a masterpiece that defines me."</p>
      </section>
      <section className={styler.projectSpace}>
        <div className={styler.project}>
          <div className={styler.projectStatus}>Completed</div>
          <div className={styler.projectValue}>
            <div className={styler.projectInfo}>
              <div className={styler.ImgContainer}>
                <Image src="/Projects/the-fitting-of-6-models.png" width={200} height={200} className={styler.Img}></Image>
              </div>
              <div className={styler.info}>
                <h1 className={styler.h1}>The Fitting of 6 Models</h1>
                <p className={styler.date}>4 August 2023</p>
                <div className={styler.type}>Indivisual</div>
              </div>
            </div>
            <hr></hr>
            <div className={styler.content}>
              <div className={styler.descTray}>
                <p className={styler.descHead}>DESCRIPTION</p>
                <p className={styler.desc}>I worked on a Machine Learning project, which I like to call "The Fitting of 6 Models", (a bit poetic). The project deals with the classification of mobile phones in 4 price ranges based on their hardware features.
                  The 6 Models used are:
                  1) Logistic Regression
                  2) KNN Classifier
                  3) KNN Regressor
                  4) Support Vector Machines (SVM)
                  5) Decision Trees
                  6) Random Forest.

                  The best accuracy of 96% was achieved by SVM model, followed by 95% of Logistic Regression. Also, hyperparameter tuning was done using Cross Validation technique to achieve the best possible accuracy in every case.</p>
              </div>
              <p className={styler.descHead}>SKILLS USED</p>
              <div className={styler.skillTray}>
                <Image src="/Learn/skills/python.png" width={200} height={200} alt='Python' className={styler.skill}></Image>
                <Image src="/Learn/skills/ml.png" width={200} height={200} alt='Python' className={styler.skill}></Image>
                <Image src="/Learn/skills/data_preprocessing.png" width={200} height={200} alt='Python' className={styler.skill}></Image>
              </div>
              <div className={styler.links}>
                <Link href="https://www.linkedin.com/posts/saranshsaini48_the-fitting-of-6-models-by-saransh-saini-activity-6990623528651755520-oprv?utm_source=share&utm_medium=member_desktop" target="_blank" className={styler.link}>Go to Project</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default projects