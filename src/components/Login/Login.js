import styles from "./Login.module.css";
import login from "../../assets/login_pict.png";
import arrow from "../../assets/arrow_left.png";
import logo from "../../assets/logo_login.png";
import logo_google from "../../assets/logo_google.png";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className={styles.login}>
            <div className={styles.login__left}>
                <Link to="/" className={styles.login__left}>
                    <img src={arrow} className={styles.arrow} alt="logo"/>
                </Link>
                <img src={login} className={styles.image} alt="logo"/>
                <p className={styles.text__left}>*Syarat dan ketentuan berlaku</p>
            </div>
            <div className={styles.login__right}>
                <div className={styles.form}>
                    <div className={styles.logo__space}>
                        <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Selamat Datang</h1>
                    <p className={styles.info}>Masukkan data diri yang sesuai dengan akunmu</p>
                    </div>
                    <h3>Email</h3>
                    <input className={styles.input} type="text" />
                    <h3>Kata Sandi</h3>
                    <input className={styles.input} type="password" />
                    <div className={styles.remember}>
                        <div><input type="checkbox" />Ingat Saya</div>
                        <Link to="/forgot_pass"><p className={styles.question__password}>Lupa Kata Sandi?</p></Link>
                    </div>
                    <Link to="/login/dashboard">
                        <button className={styles.login__button}>Masuk</button>
                    </Link>
                    <div className={styles.register}>
                        <div>
                            <p className={styles.question}>Belum memiliki akun? <Link to="/register"><span className={styles.register__button}>Registrasi Sekarang</span></Link></p>
                        </div>
                        <h3 className={styles.or}>atau</h3>
                    </div>
                    <div className={styles.google}>
                        <img src={logo_google} className={styles.logo_google} alt="logo"/>
                        <h3>Masuk dengan Google</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;