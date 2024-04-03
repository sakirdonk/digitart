import Card from "../Card/Card";
import styles from "./Welcome.module.css";

function Welcome(){
    return(
        <div className={styles.welcome}>
            <h1>Selamat Datang di SIGMA</h1>
            <p>Menyediakan Platform Terpercaya</p>
            <div className={styles.welcome__card}>
                <Card title="Dukungan" value="Siap Mendukung dan Menangani Mahasiswa"/>
                <Card title="Bantuan" value="Siap Membantu dan Menangani Masalah Mahasiswa"/>
            </div>
            <button>Pelajari Lebih Lanjut</button>
        </div>
    )
}

export default Welcome;