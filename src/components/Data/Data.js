import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Data.module.css";
import Pict from "../../assets/user_pict.png";

function Data(){
    return(
        <Background>
            <Container>
                <div>
                    <h1 className={styles.tittle}>Profile Saya</h1>
                    <div className={styles.profile}>
                        <div className={styles.profile__left}>
                            <img className={styles.user__pict} src={Pict} alt="some pict"/>
                            <h3 className={styles.user__name}>Angela Salsabila</h3>
                            <button className={styles.edit__button}>Ubah Foto</button>
                        </div>
                        <div className={styles.profile__right}>
                            <h2>Informasi</h2>
                            <div className={styles.informasi}>
                                <div className={styles.data__user}>
                                    <p className={styles.title__left}>Username</p>
                                    <p className={styles.title__right}>Kata Sandi</p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.data__left}>@angelasalsa</p>
                                    <p className={styles.data__right}>**************'eye icon'</p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.title__left}>Nama</p>
                                    <p className={styles.title__right}>Usia</p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.data__left}>Angela Salsabila</p>
                                    <p className={styles.data__right}>21</p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.title__left}>Nomor Telepon</p>
                                    <p className={styles.title__right}>Jenis Kelamin</p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.data__left}>085797057107</p>
                                    <p className={styles.data__right}>Perempuan</p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.title__left}>Email</p>
                                    <p className={styles.title__right}></p>
                                </div>
                                <div className={styles.data__user}>
                                    <p className={styles.data__left}>angelasalsabil@gmail.com</p>
                                    <button className={styles.edit__button2}>Edit Informasi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Data;