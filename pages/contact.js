import React from 'react'
import styler from "../styles/Contact.module.css"
import Image from 'next/image'
import Link from 'next/link'

const contact = () => {
  return (
    <>
      <section className={styler.banner}>
        <p className={styler.pageHead}>CONTACT ME</p>
        <p className={styler.quote}>"Through the simple act of connecting, we unlock the potential for countless doors to swing wide, revealing new horizons and endless possibilities."</p>
      </section>
      <section className={styler.contact}>
        <div className={styler.card}>
          <div className={styler.imgContainer}>
            <Image src="/Contact/phone.png" height={400} width={400} className={styler.img}></Image>
          </div>
          <div className={styler.info}>
            <Link href={"tel:+918178703402"} target='_blank' className={styler.cont} style={{color:"rgb(248, 132, 0)"}}>+91 8178703402</Link>
          </div>
        </div>
        
        <div className={styler.card}>
          <div className={styler.imgContainer} style={{backgroundColor:"#990000"}}>
            <Image src="/Contact/mail.png" height={400} width={400} className={styler.img}></Image>
          </div>
          <div className={styler.info}>
            <Link href={"mailto:saini.saransh03@gmail.com"} target='_blank' className={styler.cont} style={{color:"#990000"}}>saini.saransh03@gmail .com</Link>
          </div>
        </div>

        <div className={styler.card}>
          <div className={styler.imgContainer} style={{backgroundColor:"green"}}>
            <Image src="/Contact/location.png" height={400} width={400} className={styler.img}></Image>
          </div>
          <div className={styler.info}>
            <Link href={"https://maps.app.goo.gl/DCp1RuU2rHe1UJu57"} target='_blank' className={styler.cont} style={{color:"green"}}>Delhi, India</Link>
          </div>
        </div>
        
        <div className={styler.card}>
          <div className={styler.imgContainer}  style={{backgroundColor:"#0077b5"}}>
            <Image src="/Contact/linkedin.png" height={400} width={400} className={styler.img}></Image>
          </div>
          <Link href="https://www.linkedin.com/in/saranshsaini48" target='_blank' className={styler.goBtn}  style={{color:"#0077b5",borderColor:"#0077b5"}}>
            Go to LinkedIn
          </Link>
        </div>
        
        <div className={styler.card}>
          <div className={styler.imgContainer} style={{backgroundColor:"black "}}>
            <Image src="/Contact/github.png" height={400} width={400} className={styler.img}></Image>
          </div>
          <Link href="https://github.com/Saransh482003" target='_blank' className={styler.goBtn}  style={{color:"black ",borderColor:"black"}}>
            Go to GitHub
          </Link>
        </div>

        <div className={styler.card}>
          <div className={styler.imgContainer} style={{backgroundColor:"#c4302b"}}>
            <Image src="/Contact/youtube.png" height={400} width={400} className={styler.img}></Image>
          </div>
          <Link href="https://www.youtube.com/channel/UC3VwXRxvSJ2YEGGZ267MVSg" target='_blank' className={styler.goBtn}  style={{color:"#c4302b",borderColor:"#c4302b"}}>
            Go to Channel
          </Link>
        </div>

        

        
      </section>
    </>
  )
}

export default contact