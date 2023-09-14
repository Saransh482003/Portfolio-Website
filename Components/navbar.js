import React from 'react'
import Image from 'next/image'
import styler from "../styles/Navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <>

      <div className={styler.container}>
        <Link href="/" className={styler.profile}>
            <Image src="/logo.jpg" alt="Logo" width={233} height={233} className={styler.logo}></Image>
            <span className={styler.name}>Data Ki Science</span>
        </Link>
        <div className={styler.restCase}>
          <div className={styler.link_box}>
          <Link href="/" className={styler.link}>Home</Link>
          <Link href="/about" className={styler.link}>About Me</Link>
          <Link href="/learn" className={styler.link}>Learn</Link>
          <Link href="/blogs" className={styler.link}>Blogs</Link>
          <Link href="/projects" className={styler.link}>My Projects</Link>
          <Link href="/contact" className={styler.link}>Contact Me</Link>
        </div>
        </div>
      </div>
      <hr className={styler.hr}></hr>
    </>
  )
}

export default Navbar