import styles from "./Report_Card.module.css";
import Pict from "../../assets/bell_icon.png";
import Dots from "../../assets/dots_icon.png";

function Report_Card(props){
    return(
        <div className={styles.report}>
            <div className={styles.img__dots}>
                <img className={styles.dots__pict} src={Dots} alt="some pict"/>
            </div>
            <div className={styles.img}>
                <img className={styles.bell__pict} src={Pict} alt="some pict"/>
            </div>
            <div className={styles.description}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Report_Card;