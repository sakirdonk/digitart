import Email from "../Email/Email";
import logo from "./../../assets/logo.png";
import styles from "./Footer.module.css";
import fb_icon from "../../assets/fb_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import yt_icon from "../../assets/yt_icon.png";

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footer__Email}>
                <Email />
            </div>
            <div className={styles.footer__menu}>
                <div>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>
                            {/* <Link className={styles.navbar__link}>Beranda</Link> */}
                            <div className={styles.footer__link}>Beranda</div>
                        </li>
                        <li className={styles.footer__item}>
                            {/* <Link className={styles.navbar__link}>Komunitas</Link> */}
                            <div className={styles.footer__link}>Komunitas</div>
                        </li>
                        <li className={styles.footer__item}>
                            {/* <Link className={styles.navbar__link}>Konsultasi</Link> */}
                            <div className={styles.footer__link}>Konsultasi</div>
                        </li>
                        <li className={styles.footer__item}>
                            {/* <Link className={styles.navbar__link}>Tentang Kami</Link> */}
                            <div className={styles.footer__link}>Tentang Kami</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.media__social}>
                    <img className={styles.img__icon} src={fb_icon} alt="facebook" />
                    <img className={styles.img__icon} src={twitter_icon} alt="twitter" />
                    <img className={styles.img__icon} src={yt_icon} alt="youtube" />
                </div>
            </div>
            <div className={styles.footer__info}>
                <div>@ 2024 SIGMA. All Right Reserved</div>
                <div>
                    <img src={logo} className={styles.logo__image} alt="logo"/>
                </div>
                <div>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__item}>Ketentuan Layanan</li>
                        <li className={styles.footer__item}>Kebijakan Privasi</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;