import styles from '../css/sectiontitle.module.css'

export default function SectionTitle( props ) {
  return (
    <div className={styles.SectionTitle}>
        <p className={styles.sectionDescription}>{props.desc}</p>
        <h2 className={styles.title}>{props.title.toUpperCase()}</h2>
    </div>
  )
}
