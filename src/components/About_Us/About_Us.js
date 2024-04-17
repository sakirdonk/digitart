import Container from "../Container";
import Background from "../ui/Background";
import styles from "./About_Us.module.css";

function About_Us(){
    return(
        <Background bg="welcome">
            <Container>
                <div className={styles.about}>
                    <h1 className={styles.title}>Tentang SIGMA</h1>
                    <h3 className={styles.title}>Menyediakan platform pengaduan mahasiswa terpercaya</h3>
                </div>
            </Container>
        </Background>
    )
}

export default About_Us;