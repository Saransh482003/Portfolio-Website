import React from 'react'
import styler from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styler.footer}>
            <div className={styler.profile}>
                <Image src="/logo.jpg" alt="Logo" width={233} height={233} className={styler.logo}></Image>
                <span className={styler.namer}>Data Ki Science</span>
            </div>
            <span className={styler.footerDivider}></span>
            <p className={styler.copyright}>Copyright © 2023 DataKiScience.com</p>
        </footer>
    )
}

export default Footer