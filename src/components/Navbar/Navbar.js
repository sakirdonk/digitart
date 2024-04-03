import logo from "./../../assets/logo.png";
import lang_icon from "./../../assets/lang_icon.png";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
        <div className={styles.body}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__left}>
                    <div className={styles.navbar__menu}>
                        <ul className={styles.navbar__list}>
                            <li className={styles.navbar__item}>
                                {/* <Link className={styles.navbar__link}>Beranda</Link> */}
                                <img src={logo} className={styles.logo__image} alt="logo"/>
                            </li>
                            <li className={styles.navbar__item}>
                                {/* <Link className={styles.navbar__link}>Beranda</Link> */}
                                <div className={styles.navbar__link}>Beranda</div>
                            </li>
                            <li className={styles.navbar__item}>
                                {/* <Link className={styles.navbar__link}>Komunitas</Link> */}
                                <div className={styles.navbar__link}>Komunitas</div>
                            </li>
                            <li className={styles.navbar__item}>
                                {/* <Link className={styles.navbar__link}>Konsultasi</Link> */}
                                <div className={styles.navbar__link}>Konsultasi</div>
                            </li>
                            <li className={styles.navbar__item}>
                                {/* <Link className={styles.navbar__link}>Tentang Kami</Link> */}
                                <div className={styles.navbar__link}>Tentang Kami</div>
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
                            <li className={styles.navbar__item}><button className={styles.reg}>Daftar</button></li>
                            <li className={styles.navbar__item}><button className={styles.log}>Masuk</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;