import styles from "./Hero.module.css";
import Pict from "./../../assets/hero_pic.png";


function Hero(){
    return(
        <div className={styles.hero}>
            <div className={styles.left}>
                <h1>Adukan Suara Keadilanmu!</h1>
                <h1>Keadilan Tidak Akan Pernah Beristirahat</h1>
                <p className={styles.paragraph}>Membantu Mahasiswa di Indonesia dalam melakukan pengaduan dengan memberikan akses yang cepat dan segera ditindaklanjuti. Selain itu membantu mahasiswa dalam mencari informasi mengenai cara mengatasi problematic dalam hidupnya serta melakukan konseling terhadap para ahli mengenai problematic tersebut.</p>
                <button className={styles.button}>Pengaduan</button>
                <button className={styles.button2}>Selengkapnya</button>
            </div>
            <div className={styles.right}>
                <img src={Pict} alt="some pict"/>
            </div>
        </div>
    )
}

export default Hero;