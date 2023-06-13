import styles from '../css/loading.module.css'

import Link from 'next/link'

export default function loading() {
  return (
    <div className={styles.Loading}>
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>

        <div className={styles.sources}>
            Loader is a modified version of this <Link href='https://codepen.io/prathameshkoshti/pen/OJJRaRo' target='_blank'> codepen<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></Link>.
        </div>
    </div>
  )
}
