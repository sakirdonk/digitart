import Container from "../Container";
import Background from "../ui/Background";
import SideNews from "../Side_News/Side_News";
import styles from "./Content.module.css";
import fb_icon from "../../assets/fb_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import yt_icon from "../../assets/yt_icon.png";
import news from "../../assets/news_content.png";
import NewsForm from "../News_Form/News_Form";

function Content(){
    return(
        <Background>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left_content}>
                        <h1>Anak salah satu artis melakukan bullying kepada teman mahasiswanya.</h1>
                        <p className={styles.resource}>Oleh fikri Nur R, ITB News</p>
                        <p className={styles.date}>Diunggah 8:51 PM, WIB, Senin, 10 Januari 2024</p>
                        <img className={styles.img__icon} src={fb_icon} alt="facebook" />
                        <img className={styles.img__icon} src={twitter_icon} alt="twitter" />
                        <img className={styles.img__icon} src={yt_icon} alt="youtube" />
                        <img className={styles.img__content} src={news} alt="content" />
                        <h3><i>Video Viral Geng Tai Bully-Cekik Siswa Binus School, Diduga Ada Anak Jenderal dan Vincent Rompies</i></h3>
                        <p className={styles.content__text}><i>The latest celebrity venture in the mental health field comes from rapper Megan Thee Stallion with Bad B*tches Have Bad Days Too, a free resource hub of lifelines, text lines and therapist directories. Colombian singer J Balvin’s Oye is a creative wellness app available in English and Spanish. (Monthlong free trials are available before October 31; afterward it’s $4.99 per month.) There’s also Selena Gomez’s Wondermind, a free mental health platform focusing on educational resources and ending the stigma around mental illnesses.</i></p>
                        <NewsForm />
                    </div>
                    <div className={styles.right_content}>
                        <h1 className={styles.title2}><i>Lainnya Yang Baru</i></h1>
                        <SideNews link="news1" source="UMS" date="04 Jun 2022" title="Webinar Pencegahan Bullying oleh Kemahasiswaan UMS"/>
                        <SideNews link="news1" source="UB" date="20 Nov 2021" title="Webinar Pencegahan Seksual & Perundungan dilingkungan Kampus oleh UB"/>
                        <SideNews link="news1" source="Gunadarma" date="27 Dec 2020" title="Dugaan Pelecehan Berujung Bullying di Gunadarma Depok"/>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Content;