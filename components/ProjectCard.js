import styles from '../css/projectcard.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard( props ) {
  return (
    <Link href={props.link} target="_blank">
        <div className={styles.ProjectCard}>
            <div className={styles.projectMedia}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={props.image}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt={`${props.name} Image`}
                    />
                </div>

                <div className={styles.linkIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
            </div>
            <div className={styles.projectInfo}>
                <div className={styles.infoWrapper}>
                    <span className={styles.projectName}>{props.name} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                    <span className={styles.projectDesc}>{props.desc} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                </div>
            </div>
        </div>
    </Link>
  )
}
