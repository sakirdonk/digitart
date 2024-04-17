import styles from "./Register.module.css";
import login from "../../assets/login_pict.png";
import arrow from "../../assets/arrow_left.png";
import logo from "../../assets/logo_login.png";
import { Link } from "react-router-dom";

function Register(){
    return(
        <div className={styles.login}>
            <div className={styles.login__left}>
                <Link t0="/login">
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
                    <h3>Nama Lengkap</h3>
                    <input className={styles.input} type="text" />
                    <h3>Email</h3>
                    <input className={styles.input} type="text" />
                    <h3>Kata Sandi</h3>
                    <input className={styles.input} type="password" />
                    <h3>Konfirmasi Sandi</h3>
                    <input className={styles.input} type="password" />
                    <Link to="/login">
                        <button className={styles.login__button}>Masuk</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;