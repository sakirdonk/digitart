import logo_Tut from "./../../assets/logo_Tut.png";
import logo_Kemkes from "./../../assets/logo_Kemkes.png";
import styles from "./Coop.module.css";

function Coop(){
    return(
        <div className={styles.Coop}>
            <p>Bekerja sama dengan</p>
            <div className={styles.logo}>
                <img className={styles.logo_Tut} src={logo_Tut} alt="Logo Tut Wuri" />
                <img className={styles.logo_Kemkes} src={logo_Kemkes} alt="Logo Kemkes" />
            </div>
        </div>
    )
}

export default Coop;