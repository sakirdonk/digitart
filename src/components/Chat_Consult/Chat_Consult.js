import Container from "../Container";
import Background from "../ui/Background";
import styles from "./Chat_Consult.module.css";
import consult from "../../assets/consult_pict.png";
import clip from "../../assets/clip.png";
import box from "../../assets/box.png";
import sent from "../../assets/sent.png";
import mic from "../../assets/mic.png";
import chat from "../../assets/chat.png";

function Chat_Consult(){
    return(
        <Background bg="welcome">
            <Container>
                <div className={styles.chat}>
                    <img src={consult} className={styles.logo__image} alt="logo"/>
                        <h1>Dr. Daman, M. Si.  <span className={styles.degree}>( Spesialis Psikolog )</span></h1>
                        <div className={styles.exp}>
                            <p>34 Tahun</p>
                            <p>80%</p>
                        </div>
                        <div className={styles.chat__box}>
                            <div className={styles.chat__title}>
                                <h1 className={styles.title}>
                                    <img src={chat} className={styles.logo__chat} alt="logo"/>
                                    Konsultasi Saya
                                </h1>
                            </div>
                            <hr className={styles.border}/>
                            <div className={styles.chat__dialogue}>
                                <div className={styles.chat__dia__left}>Hallo, Ada yang bisa saya bantu?</div>
                                <div className={styles.chat__dia__right}>Hallo Dok, Saya ingin konsultasi mengenai diri selalu overthinking</div>
                                <div className={styles.chat__dia__left}>Apakah kamu sering merasa cemas akan hal apapun?</div>
                                <div className={styles.chat__dia__right}>Iya dok, Setiap harinya saya merasa takut akan hal belum terjadi</div>
                            </div>
                            <div className={styles.chat__input}>
                                <div className={styles.chat__left}>
                                    <img src={box} className={styles.logo__left} alt="logo"/>
                                    <img src={clip} className={styles.logo__left} alt="logo"/>
                                </div>
                                <hr className={styles.line}/>
                                <div className={styles.chat__middle}>
                                    <input type="text" className={styles.input} placeholder="Tulis Pesan"/>
                                </div>
                                <div className={styles.chat__right}>
                                    <img src={mic} className={styles.logo__right1} alt="logo"/>
                                    <img src={sent} className={styles.logo__right2} alt="logo"/>
                                </div>
                            </div>
                        </div>
                </div>
            </Container>
        </Background>
    )
}

export default Chat_Consult;