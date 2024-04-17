import logo from "./../../assets/logo.png";
import lang_icon from "./../../assets/lang_icon.png";
import styles from "./Navbar.module.css";
import Container from "../Container";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className={styles.body}>
            <Container>
            <nav className={styles.navbar}>
                <div className={styles.navbar__left}>
                    <div className={styles.navbar__menu}>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item__image}>
                                <Link to="/" className={styles.navbar__link}><img src={logo} className={styles.logo__image} alt="logo"/></Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/" className={styles.navbar__link}>Beranda</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/community" className={styles.navbar__link}>Komunitas</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/consult" className={styles.navbar__link}>Konsultasi</Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/about" className={styles.navbar__link}>Tentang Kami</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.navbar__right}>
                    <div className={styles.navbar__button}>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}>
                                <button className={styles.lang}>
                                    <span>Indonesia</span>
                                    <img className={styles.lang__icon} src={lang_icon} alt="globeicon" />
                                </button>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/register">
                                    <button className={styles.reg}>Daftar</button>
                                </Link>
                            </li>
                            <li className={styles.navbar__item}>
                                <Link to="/login">
                                    <button className={styles.log}>Masuk</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </Container>
        </div>
    )
}

export default Navbar;