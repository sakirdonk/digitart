import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Report_Form.module.css";
import upload from "../../assets/upload_icon.png";

function Report_Form(){
    return(
        <Background>
            <Container>
                <div className={styles.report}>
                    <div className={styles.report__left}>
                        <div className={styles.title__left}><h3>Sampaikan Pengaduan Anda!</h3></div>
                        <p className={styles.guide}>Perhatikan Cara Menyampaikan Pengaduan Yang Baik dan Benar</p>
                        <input className={styles.form} placeholder="Ketik Judul Pengaduan Anda* (Wajib)" />
                        <textarea className={styles.form__area} rows="10" placeholder="Ketik Isi Pengaduan Anda* (Wajib)"></textarea>
                        <input className={styles.form} placeholder="Ketik Tanggal Kejadian* (Wajib)" type="date" />
                        <input className={styles.form} placeholder="Ketik Lokasi Kejadian* (Wajib)" />
                        <input className={styles.form} placeholder="Ketik Kategori Pengaduan Anda" />
                        <div className={styles.form__upload}>
                            <div className={styles.upload__left}>
                                <a href="#" className={styles.upload}>
                                    <img src={upload} className={styles.logo__image} alt="logo"/>
                                    <p className={styles.upload__text}>Upload Lampiran</p>
                                </a>
                            </div>
                            <div className={styles.upload__right}>
                                <input type="radio"/><p className={styles.anonim}>Anonim</p>
                                <button>Kirim</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.report__right}>
                        <div className={styles.title__left}><h3>Petunjuk Pengisian Pengaduan</h3></div>
                        <h4 className={styles.guide__step}>1. Tulis Laporan</h4>
                        <p className={styles.guide__text}>Laporan keluhan atau aspirasi anda dengan jelas dan lengkap.</p>
                        <h4 className={styles.guide__step}>2. Proses Verifikasi</h4>
                        <p className={styles.guide__text}>Dalam 3 hari, laporan Anda akan diverifikasi dan diteruskan kepada instansi berwenang.</p>
                        <h4 className={styles.guide__step}>3. Proses Tindak Lanjut</h4>
                        <p className={styles.guide__text}>Dalam 5 hari, instansi akan menindaklanjuti dan membalas laporan Anda.</p>
                        <h4 className={styles.guide__step}>4. Beri Tanggapan</h4>
                        <p className={styles.guide__text}>Anda dapat menanggapi kembali balasan yang diberikan oleh instansi dalam waktu 10 hari.</p>
                        <h4 className={styles.guide__step}>5. Selesai</h4>
                        <p className={styles.guide__text}>Laporan Anda akan terus ditindaklanjuti hingga terselesaikan.</p>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Report_Form;