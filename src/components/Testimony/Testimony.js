import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Testimony.module.css";
import TestimonyCard from "../Testimony_Card/Testimony_Card";

function Testimony(){
    return(
        <Background>
            <Container>
                <div className={styles.testimony}>
                    <h2>Apa kata orang lain tentang SIGMA?</h2>
                    <div className={styles.testimony__card}>
                        <TestimonyCard comment="Sigma sangat membantu kami dalam melakukan pengaduan." username="@Angela"/>
                        <TestimonyCard comment="Sigma sangat membantu kami dalam melakukan pengaduan." username="@Angela"/>
                        <TestimonyCard comment="Sigma sangat membantu kami dalam melakukan pengaduan." username="@Angela"/>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Testimony;