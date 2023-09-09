import styles from '../css/marquee.module.css'

export default function Marquee( props ) {
    var words = [];
    for (var i = 0; i < 100; i++) {
    words.push(props.content + " ");
    }

  return (
    <div className={styles.Marquee} aria-hidden={true}>
        <p>{words}</p>
    </div>
  )
}
