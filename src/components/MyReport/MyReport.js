import Container from "../Container";
import HotCard from "../Hot_Card/Hot_Card";
import ReportCard from "../Report_Card/Report_Card";
import Background from "../ui/Background";
import styles from "./MyReport.module.css";

function MyReport(){
    return(
        <Background>
            <Container>
                <div className={styles.report}>
                    <div className={styles.left}>
                        <div className={styles.title}>
                            <div className={styles.left__title}>
                                <a href="#"><h3>Semua</h3></a>
                                <a href="#"><h3>Proses</h3></a>
                                <a href="#"><h3>Tindak Lanjuti</h3></a>
                                <a href="#"><h3>Selesai</h3></a>
                            </div>
                            <div className={styles.right__title}>
                                <a href="#" className={styles.readed}>Sudah dibaca</a>
                            </div>
                        </div>
                    <ReportCard title="Pengaduan Anda sedang dalam Tindak Lanjut" time="3 April 2024 12:03"/>
                    <ReportCard title="Pengaduan Anda sedang dalam Proses" time="3 April 2024 12:03"/>
                    <ReportCard title="Pengaduan Anda sudah terselesaikan terimakasih sudah mengadu di SIGMA." time="3 April 2024 12:03"/>
                    </div>
                    <div className={styles.right}>
                        <h3>Sedang Hangat di SIGMA</h3>
                        <HotCard title="Berita Hangat untuk Anda" community="Sedang hangat dalam komunitas" genre="PERUNDUNGAN" post="4,555"/>
                        <HotCard title="Berita Hangat untuk Anda" community="Sedang hangat dalam komunitas" genre="PERUNDUNGAN" post="4,555"/>
                        <HotCard title="Berita Hangat untuk Anda" community="Sedang hangat dalam komunitas" genre="PERUNDUNGAN" post="4,555"/>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default MyReport;