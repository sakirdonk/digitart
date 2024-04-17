import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Service.module.css";
import ServiceCard from "../Service_Card/Service_Card";

function Service(){
    return(
        <Background bg="service">
            <Container>
                <div className={styles.service}>
                    <div className={styles.title}>
                        <h2 className={styles.tittle}>Layanan Kami Untuk Kamu</h2>
                    </div>
                    <div className={styles.service__card}>
                        <ServiceCard pict="pict1" title="Pengaduan" desc="Tulis aduan atau keluhan anda dengan jelas" learn="Proses Pengaduan"/>
                        <ServiceCard pict="pict2" title="Proses Verifikasi" desc="Tunggu sampai laporan anda di verifikasi" learn="Proses Verifikasi"/>
                        <ServiceCard pict="pict3" title="Tindak Lanjut" desc="Laporan Pengaduan anda sedang dalam tindak lanjut" learn="Tindak Lanjut"/>
                        <ServiceCard pict="pict4" title="Selesai" desc="Laporan Pengaduan telah selesai ditindak" learn="Selesai"/>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Service;