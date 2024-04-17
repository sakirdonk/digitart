import styles from "./Hot_Card.module.css";
import Dots from "../../assets/dots3.png"

function Hot_Card(props){
    return(
        <div className={styles.hot}>
            <div className={styles.hot__left}>
                <h3>{props.title}</h3>
                <p className={styles.community}>{props.community}</p>
                <h4>{props.genre}</h4>
                <p className={styles.post}>{props.post} posts</p>
            </div>
            <div className={styles.hot__right}>
                <a href="#" className={styles.link}>
                    <img className={styles.dots__pict} src={Dots} alt="some pict"/>
                </a>
            </div>
        </div>
    )
}

export default Hot_Card;