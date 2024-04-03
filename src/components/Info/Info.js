import styles from "./Info.module.css";
import pict from "../../assets/dots.png";

function Info(){
    return(
        <div className={styles.info}>
                <h1>Pengembangan <span className={styles.highlight}>Teknologi & Informasi</span></h1>
                <img src={pict} alt="" />
            <div className={styles.section}>
                <p className={styles.paragraph}>Seiring berkembang dunia dalam bidang Teknologi dan Informasi kami akan terus berusaha memanfaatkan dan informasi dengan baik untuk mendengarkan kesejahteraan Mahasiswa.</p>
            </div>
        </div>
    )
}

export default Info;