import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Report_Hero.module.css";
import Pict from "../../assets/user_pict.png";
import { Link } from "react-router-dom";

function Report_Hero(){
    return(
        <Background bg="report_hero">
            <Container>
                <div className={styles.hero}>
                    <div className={styles.hero__pict}>
                        <img className={styles.user__pict} src={Pict} alt="some pict"/>
                    </div>
                    <div className={styles.hero__name}>
                        <h3 className={styles.user__name}>Angela Salsabila</h3>
                        <Link to="/login/profile">
                            <button className={styles.edit__profile}>Profile Saya</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </Background>
    )
}

export default Report_Hero;