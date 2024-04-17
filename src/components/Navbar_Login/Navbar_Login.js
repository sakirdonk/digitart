import logo from "./../../assets/logo.png";
import lang_icon from "./../../assets/lang_icon.png";
import styles from "./Navbar_Login.module.css";
import Container from "../Container";
import { Link } from "react-router-dom";
import bell from "./../../assets/bell.png";
import user from "./../../assets/user_pict.png";

function Navbar_Login(){
    return(
        <div className={styles.body}>
            <Container>
            <nav className={styles.navbar}>
                <div className={styles.navbar__left}>
                    <Link to="/login/dashboard" className={styles.navbar__link}><img src={logo} className={styles.logo__image} alt="logo"/></Link>
                    <Link to="/login/dashboard" className={styles.navbar__link}>Beranda</Link>
                    <Link to="/login/community" className={styles.navbar__link}>Komunitas</Link>
                    <Link to="/login/payconsult" className={styles.navbar__link}>Konsultasi</Link>
                    <Link to="/login/about" className={styles.navbar__link}>Tentang Kami</Link>
                </div>
                <div className={styles.navbar__right}>
                    <Link to="/login/report" className={styles.link2}>
                        <button className={styles.log}>Pengaduan</button>
                    </Link>
                    <Link to="/login/myreport" className={styles.link2}>
                    <img className={styles.bell} src={bell} alt="bell icon" />
                    </Link>
                    <Link to="/login/profile" className={styles.profile}>
                    <img className={styles.user_pict} src={user} alt="user pict" />
                    <p className={styles.user}>Angela</p>
                    </Link>
                    <Link to="/" className={styles.link2}>
                        <button className={styles.reg}>Logout</button>
                    </Link>
                </div>
            </nav>
            </Container>
        </div>
    )
}

export default Navbar_Login;