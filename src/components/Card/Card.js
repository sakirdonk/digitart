import styles from "./Card.module.css";

function Card(props){
    return(
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <p>{props.value}</p>
        </div>
    )
}

export default Card;