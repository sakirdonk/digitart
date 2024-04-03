import styles from "./Email.module.css";
import logo2 from "../../assets/logo2.png";

function Email(){
    return(
        <div className={styles.Email}>
            <img className={styles.email__logo2} src={logo2} alt="sigma" />
            <div className={styles.email__form}>
                <input className={styles.email_input} placeholder="Masuki Email Kamu"></input>
                <button>Kirim</button>
            </div>
        </div>
    )
}

export default Email;