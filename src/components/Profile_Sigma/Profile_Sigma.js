import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Profile_Sigma.module.css";
import profile from "../../assets/about_pict.png";

function Profile_Sigma(){
    return(
        <Background>
            <Container>
                <div className={styles.profile}>
                    <div className={styles.profile__left}>
                        <h1>Profile SIGMA</h1>
                        <h3 className={styles.profile__desc}>Sigma adalah sebuah platform terpercaya yang menyediakan layanan pengaduan untuk mahasiswa yang terkena berbagai masalah dikampus seperti menjadi korban kekerasan, pembulian atau semacamnya.</h3>
                        <br />
                        <br />
                        <h1>#Suarakan Keadilanmu</h1>
                        <h3 className={styles.profile__desc}>Dengan suara yang teguh dan hati yang penuh keyakinan, kita mendengar panggilan untuk menegakkan keadilan. Di mana pun ketidakadilan bersembunyi, di situlah kita berdiri, bersatu dalam tekad untuk mengubahnya. Setiap kata yang terucap, setiap tindakan yang dilakukan, adalah langkah menuju dunia yang lebih adil bagi semua. Bersama-sama, mari kita Suarakan Keadilanmu, karena hanya dengan bersatu, kita dapat mengubah dunia.</h3>
                    </div>
                    <div className={styles.profile__right}>
                        <img src={profile} className={styles.logo__image} alt="logo"/>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Profile_Sigma;