import styles from "./Service_Card.module.css";
import arrow from "../../assets/arrow_service.png";
import pict1 from "../../assets/pict1.png";
import pict2 from "../../assets/pict2.png";
import pict3 from "../../assets/pict3.png";
import pict4 from "../../assets/pict4.png";

function Service_Card(props){
    return(
        <div className={styles.card}>
            <img src=
                {props.pict==="pict1"?pict1 :
                props.pict==="pict2"?pict2 :
                props.pict==="pict3"?pict3 :
                props.pict==="pict4"?pict4 :
                null}
            className={styles.pict} alt="logo"/>
            <h3>{props.title}</h3>
            <p className={styles.card__desc}>{props.desc}</p>
            <div className={styles.card__learn}>
                <p className={styles.card__link}>Pelajari lebih lanjut tentang {props.learn}</p>
                <img src={arrow} className={styles.logo__arrow} alt="logo"/>
            </div>
        </div>
    )
}

export default Service_Card;