import React from 'react'
import Image from 'next/image'
import styler from "../styles/Navbar.module.css"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const toggleMenu = () => {
    setVisible(!visible)
  }
  return (
    <div className={styler.allNav}>
      <div className={styler.container}>
        <Link href="/" className={styler.profile}>
            <Image src="/logo.jpg" alt="Logo" width={233} height={233} className={styler.logo}></Image>
            {/* <span className={styler.name}>Data Ki Science</span> */}
        </Link>
        <div className={styler.restCase}>
          <div className={styler.link_box}>
          <Link href="/" className={styler.link}>Home</Link>
          <Link href="/about" className={styler.link}>About Me</Link>
          <Link href="/learn" className={styler.link}>Learn</Link>
          <Link href="/blogs" className={styler.link}>Blogs</Link>
          <Link href="/projects" className={styler.link}>My Projects</Link>
          <Link href="/contact" className={styler.link}>Contact Me</Link>
          <Image src= "/Home_Cards/menu.png" height={50} width={50} alt="" className={styler.mobileMenu} onClick={toggleMenu}></Image>
        </div>
        </div>
      </div>
      <hr className={styler.hr}></hr>
      <div className={styler.menu} style={{display: visible ? "flex" : "none"}}>
        <div className={styler.menuList}>
          <Link href="/" className={styler.menuLink} onClick={toggleMenu}>Home</Link>
          <Link href="/about" className={styler.menuLink} onClick={toggleMenu}>About Me</Link>
          <Link href="/learn" className={styler.menuLink} onClick={toggleMenu}>Learn</Link>
          <Link href="/blogs" className={styler.menuLink} onClick={toggleMenu}>Blogs</Link>
          <Link href="/projects" className={styler.menuLink} onClick={toggleMenu}>My Projects</Link>
          <Link href="/contact" className={styler.menuLink} onClick={toggleMenu}>Contact Me</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar