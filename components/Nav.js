'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../css/nav.module.css'
import LogoCircle from './LogoCircle'
import NavLink from './NavLink'

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false)
    const [size, setSize] = useState(35)
    const year = new Date().getFullYear()

    useEffect(() => {
        const resize = () => {
            if(window.innerWidth < 768) {
                setSize(35)
            }
    
            else {
                setSize(60)
            }
        }

        window.onload = resize()
        window.addEventListener('resize', resize)
    },[])

    return (
        <>
            <div className={styles.Nav}>
                <Link href='/'><LogoCircle size={size} /></Link>
                <div className={styles.menuIcon} onClick={() => setNavOpen(!navOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
            </div>

            { navOpen ? 
                <div className={styles.menu}>
                    <div className={styles.menuHeader}>
                        <span className={styles.header}>MENU</span>
                        <span className={styles.closeMenu} onClick={() => setNavOpen(!navOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </span>
                    </div>
                    <div className={styles.menuContent}>
                        <ul>
                            <li onClick={() => setNavOpen(!navOpen)}><NavLink link='/' name='HOME' /></li>
                            <li onClick={() => setNavOpen(!navOpen)}><NavLink link='#about-me' name='ABOUT' /></li>
                            <li onClick={() => setNavOpen(!navOpen)}><NavLink link='#projects' name='PROJECTS' /></li>
                            <li onClick={() => setNavOpen(!navOpen)}><NavLink link='#experience' name='EXPERIENCE' /></li>
                        </ul>
                    </div>
                    <div className={styles.menuFooter}>
                        <div className={styles.contact}>
                            <Link href="https://www.instagram.com/adrian.td/" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/instagram-new.png" width={25} height={25} alt="Instagram Icon" /></Link>
                            <Link href="https://twitter.com/adriantdoav" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/twitter-circled.png" width={25} height={25} alt="Twitter Icon" /></Link>
                            <Link href="https://github.com/Adriantobi" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/github.png" width={25} height={25} alt="Github Icon" /></Link>
                            <Link href="https://www.linkedin.com/in/adriantd/" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/linkedin.png" width={25} height={25} alt="Linkedin Icon" /></Link>
                            <Link href="mailto:talktotobi.a@gmail.com?subject=I have a challenge for you!" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/mail.png" width={25} height={25} alt="Mail Icon" /></Link>
                        </div>
                        <footer>© {year} Adrian Tobi</footer>
                    </div>
                </div>
            : null }
        </>
    )
}
