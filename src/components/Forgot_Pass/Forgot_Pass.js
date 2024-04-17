import styles from "./Forgot_Pass.module.css";
import login from "../../assets/login_pict.png";
import arrow from "../../assets/arrow_left.png";
import logo from "../../assets/logo_login.png";
import logo_google from "../../assets/logo_google.png";
import { Link } from "react-router-dom";

function Forgot_Pass(){
    return(
        <div className={styles.login}>
            <div className={styles.login__left}>
                <img src={arrow} className={styles.arrow} alt="logo"/>
                <img src={login} className={styles.image} alt="logo"/>
                <p className={styles.text__left}>*Syarat dan ketentuan berlaku</p>
            </div>
            <div className={styles.login__right}>
                <div className={styles.form}>
                    <div className={styles.logo__space}>
                        <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Lupa Kata Sandi?</h1>
                    <p className={styles.info}>Masukkan email Anda dibawah ini untuk memulihkan kata sandi Anda</p>
                    </div>
                    <h3>Email</h3>
                    <input className={styles.input} type="text" />
                    <div className={styles.remember}>
                        <div>
                            <p className={styles.questioning}>Ingat Kata Sandi Anda?</p>
                            <Link to="/login">
                                <p className={styles.question__password}>Kembali untuk masuk</p>
                            </Link>
                        </div>
                        <button className={styles.login__button}>Kirim</button>
                    </div>
                    <div className={styles.register}>
                        <div className={styles.optional}>
                            <div className={styles.optional__left}>
                                <hr />
                            </div>
                            <p className={styles.question}>Atau masuk dengan</p>
                            <div className={styles.optional__right}>
                                <hr />
                            </div>
                        </div>
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

export default Forgot_Pass;