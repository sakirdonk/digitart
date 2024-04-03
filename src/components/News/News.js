import News_Card from "../News_Card/News_Card";
import styles from "./News.module.css";
import arrow_right from "./../../assets/right_arrow.png";
import arrow_left from "./../../assets/left_arrow.png";

function News(){
    return(
        <div className={styles.news}>
            <div className={styles.news__title}>
                <h1>Berita Populer</h1>
                <div className={styles.arrow__button}>
                    <img className={styles.arrow__left} src={arrow_left} alt="arrow left" />
                    <img className={styles.arrow__right} src={arrow_right} alt="arrow right" />
                </div>
            </div>
            <div className={styles.news__main}>
                <div className={styles.news__pict}>
                    <div className={styles.news__info}>Kasus</div>
                    <div>
                        <h3 className={styles.title}>Anak salah satu artis melakukan bullying kepada teman mahasiswanya.</h3>
                        <p>Video Viral Geng Tai Bully-Cekik Siswa Binus School, Diduga Ada Anak Jenderal dan Vincent Rompies</p>
                    </div>
                </div>
            </div>
            <div className={styles.news__list}>
                <News_Card link="news1" source="UMS" date="04 Jun 2022" title="Webinar Pencegahan Bullying oleh Kemahasiswaan UMS"/>
                <News_Card link="news2" source="UB" date="20 Nov 2021" title="Webinar Pencegahan Seksual & Perundungan dilingkungan Kampus oleh UB"/>
                <News_Card link="news3" source="Gunadarma" date="27 Dec 2020" title="Dugaan Pelecehan Berujung Bullying di Gunadarma Depok"/>
            </div>
        </div>
    )
}

export default News;