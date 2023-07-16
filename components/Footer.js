import styles from '../css/footer.module.css'
import divider from '../css/divider.module.css'

import Marquee from './Marquee'

import Image from 'next/image'
import Link from 'next/link'
import FooterLink from './FooterLink'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={divider.top}></div>
      <Marquee content='FOOTER' />

      
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <h1><Link href="">Adrian <br /> Tobi</Link></h1>
          <div className={styles.linkLists}>
              <div className={styles.colElement}>
                  <ul>
                      <li><FooterLink link='' name='Home' /></li>
                      <li><FooterLink link='#about-me' name='About' /></li>
                      <li><FooterLink link='#projects' name='Projects' /></li>
                      <li><FooterLink link='#experience' name='Experience' /></li>
                      <li><FooterLink link='/pdf/Adrian_Tobi_Resume_10-07-2023-11-08-05.pdf' name='Resume' /></li>
                  </ul>
              </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
            <footer>The result of a four days of continuous development. Barely designed in Figma and written in Visual Studio Code, I love that editor. Built with Next.js and CSS Modules, deployed with Vercel.</footer>
            {/* <div className={styles.displayMode}>
                <p>Display Mode</p>
                <input type="checkbox" id="mode" /><label for="mode"></label>
            </div> */}
            <div className={styles.footerLinks}>
              <Link href="https://www.instagram.com/adrian.td/" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/instagram-new.png" width={25} height={25} alt="Instagram Icon" /></Link>
              <Link href="https://twitter.com/adriantdoav" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/twitter-circled.png" width={25} height={25} alt="Twitter Icon" /></Link>
              <Link href="https://github.com/Adriantobi" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/github.png" width={25} height={25} alt="Github Icon" /></Link>
              <Link href="https://www.linkedin.com/in/adriantd/" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/linkedin.png" width={25} height={25} alt="Linkedin Icon" /></Link>
              <Link href="mailto:talktotobi.a@gmail.com" target="_blank"><Image src="https://img.icons8.com/3d-fluency/1x/mail.png" width={25} height={25} alt="Mail Icon" /></Link>
            </div>
        </div>
      </div>
    </div>
  )
}
