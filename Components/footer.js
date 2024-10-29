import React from 'react'
import styler from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styler.footer}>
            <div className={styler.profile}>
                <Image src="/Saransh_Saini_Logo.png" alt="Logo" width={233} height={233} className={styler.logo}></Image>
                {/* <span className={styler.namer}>Saransh Saini</span> */}
            </div>
            <span className={styler.footerDivider}></span>
            <p className={styler.copyright}>Copyright © 2023 TheSaranshSaini.com</p>
        </footer>
    )
}

export default Footer