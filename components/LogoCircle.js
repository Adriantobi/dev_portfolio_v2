import Image from 'next/image'
import styles from '../css/logocircle.module.css'

export default function LogoCircle( props ) {
  return (
    <div className={styles.circle} style={{width:props.size, height:props.size}}>
        <Image 
            src="/adrian.jpg"
            width={props.size * 1.4}
            height={props.size}
            alt="adrian.td Logo"
        />
    </div>
  )
}
