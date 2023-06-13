import styles from '../css/footerlink.module.css'

import Link from "next/link"

export default function FooterLink( props ) {
  return (
    <Link href={props.link}>
        <div className={styles.FooterLink}>
            <div className={styles.innerWrapper}>
                <span className={styles.link}>{props.name} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                <span className={styles.linkHover}>{props.name} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
            </div>
        </div>
    </Link>
  )
}
