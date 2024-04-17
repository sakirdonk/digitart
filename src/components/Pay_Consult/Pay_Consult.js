import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Pay_Consult.module.css";
import consult from "../../assets/consult_pict.png";
import koper from "../../assets/koper.png";
import thumbsup from "../../assets/thumbsup.png";
import gopay from "../../assets/gopay_logo.png";
import shopee from "../../assets/shope_pay.png";
import dana from "../../assets/dana_logo.png";
import ovo from "../../assets/ovo_logo.png";
import qris from "../../assets/qris_logo.png";
import back_arrow from "../../assets/back_arrow.png";
import { Link } from "react-router-dom";

function Pay_Consult(){
    return(
        <Background>
            <Container>
                <div className={styles.consult}>
                    <div className={styles.consult__left}>
                        <div className={styles.profile}>
                            <div className={styles.pict}>
                                <img src={consult} className={styles.image} alt="logo"/>
                            </div>
                            <div className={styles.data}>
                                <h3>Dr. Daman, M.Si.</h3>
                                <p>Spesialis Psikolog</p>
                                <p><img src={koper} className={styles.image__koper} alt="logo"/>34 Tahun</p>
                                <p><img src={thumbsup} className={styles.image__thumbsup} alt="logo"/>80%</p>
                                <p>1000 orang telah berkonsultasi</p>
                            </div>
                            <div className={styles.return}>
                                <p><img src={back_arrow} className={styles.image__back} alt="logo"/></p>
                            </div>
                        </div>
                        <h3 className={styles.about__link}>Tentang</h3>
                        <div className={styles.about}>
                            <h3>Tentang Konsultan</h3>
                            <p className={styles.text}>Seorang Psikolog Klinis dengan pengalaman sekitar 2 tahun di bidang Pengembangan Sumber Daya Manusia. Telah terbiasa dalam melakukan asesmen psikologi, pembuatan laporan hasil pemeriksaan tes psikologi dan konseling.</p>
                            <h3>Riwayat Pendidikan</h3>
                            <p className={styles.text}>Master Profesi Psikologi, Universitas Islam Indonesia (2018 - 2021)</p>
                            <p className={styles.text}>Sarjana Psikologi, Universitas Islam Indonesia (2014 - 2018)</p>
                            <h3>Pengalaman Praktik</h3>
                            <p className={styles.text}>Rumah Sakit Umum Pusat Fatmawati</p>
                            <span className={styles.date__text}>2018 - 2023</span>
                            <h3>Praktik Sekarang</h3>
                            <p className={styles.text}>Rumah Sakit Asih Ciledug</p>
                        </div>
                    </div>
                    <div className={styles.consult__right}>
                        <h4>Tipe Konsultasi</h4>
                        <div className={styles.type__consult}>
                            <div className={styles.type}>Online</div>
                            <div className={styles.type}>Offline</div>
                        </div>
                        <h4>Tanggal</h4>
                        <input type="date" className={styles.date} placeholder="Rabu, 03 April 2024"/>
                        <h4>Waktu</h4>
                        <div className={styles.time1}>
                            <div className={styles.time}>08.00 - 10.00</div>
                            <div className={styles.time}>09.00 - 10.00</div>
                            <div className={styles.time}>10.00 - 11.00</div>
                        </div>
                        <div className={styles.time2}>
                            <div className={styles.time}>11.00 - 12.00</div>
                            <div className={styles.time}>12.00 - 13.00</div>
                            <div className={styles.time}>13.00 - 14.00</div>
                        </div>
                        <h4>Pembayaran</h4>
                        <div className={styles.time1}>
                            <div className={styles.logo_box}>
                                <img src={gopay} className={styles.logo} alt="logo"/>
                            </div>
                            <div className={styles.logo_box}>
                                <img src={shopee} className={styles.logo} alt="logo"/>
                            </div>
                            <div className={styles.logo_box}>
                                <img src={dana} className={styles.logo} alt="logo"/>
                            </div>
                        </div>
                        <div className={styles.time2}>
                            <div className={styles.logo_box}>
                                <img src={ovo} className={styles.logo} alt="logo"/>
                            </div>
                            <div className={styles.logo_box}>
                                <img src={qris} className={styles.logo} alt="logo"/>
                            </div>
                        </div>
                        <div className={styles.total}>
                            <p className={styles.total__text}>Total</p>
                            <p className={styles.total__text}>Rp. 150.000</p>
                        </div>
                        <div className={styles.submit}>
                            <Link to="/login/chat">
                                <button className={styles.button}>Konsultasi Sekarang</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Pay_Consult;