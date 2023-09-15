import styles from '../css/experiencecard.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function ExperienceCard( props ) {
  return (
    <Link href={props.link} target='_blank'>
        <div className={styles.ExperienceCard}>
            <div className={styles.leftCol}>
                <div className={styles.companyWrapper}>
                    <Image
                        src={props.image}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }} // optional
                        alt={props.company + ' Logo'}
                        quality={100}
                    />
                </div>
                <div className={styles.timeLine}>{props.start} — {props.end}</div>
            </div>
            <div className={styles.jobInfo}>
                <div className={styles.role}>
                    <div className={styles.innerWrapper}>
                        <span className={styles.roleName}>{props.role} · {props.company} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                        <span className={styles.roleType}>{props.type} · {props.company} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></span>
                    </div>
                </div>
                <div className={styles.jobDesc}>{props.desc}</div>
                <div className={styles.technologies}>
                    {props.tech.map((tech) => (
                        <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    </Link>
  )
}
