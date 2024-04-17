import styles from "./Testimony_Card.module.css";
import arrow from "../../assets/arrow_service.png";
import pict1 from "../../assets/user_pict.png";

function Testimony_Card(props){
    return(
        <div className={styles.card}>
            <h3 className={styles.comment}>"{props.comment}"</h3>
            <div className={styles.card__user}>
                <img src={pict1} className={styles.pict} alt="logo"/>
                <h3 className={styles.card__link}>{props.username}</h3>
            </div>
        </div>
    )
}

export default Testimony_Card;