import styles from "./News_Form.module.css";
import kecewa from "../../assets/kecewa.png";
import marah from "../../assets/marah.png";
import suka from "../../assets/suka.png";
import lucu from "../../assets/lucu.png";
import penasaran from "../../assets/penasaran.png";
import kaget from "../../assets/kaget.png";
import tweet from "../../assets/tweet.png";
import like from "../../assets/like.png";

function News_Form(props){
    return(
        <div className={styles.body__form}>
            <div className={styles.action__form}>
                <button className={styles.button_tweet}>
                    <img className={styles.tweet} src={tweet} alt="tweet_logo" />
                    <span>Tweet</span>
                </button>
                <button className={styles.button_like}>
                    <img className={styles.like} src={like} alt="like_logo" />
                    <span>Like</span>
                </button>
                <button className={styles.button}>Share</button>
            </div>
            <p className={styles.question}>What do you think of this news?</p>
            <div className={styles.reaction__form}>
                <div className={styles.reaction__emo}>
                    <img className={styles.news__pict} src={kecewa} alt="reaction emo" />
                    <p className={styles.reaction__total}>20</p>
                </div>
                <div className={styles.reaction__emo}>
                    <img className={styles.news__pict} src={marah} alt="reaction emo" />
                    <p className={styles.reaction__total}>21</p>
                </div>
                <div className={styles.reaction__emo}>
                    <img className={styles.news__pict} src={suka} alt="reaction emo" />
                    <p className={styles.reaction__total}>21</p>
                </div>
                <div className={styles.reaction__emo}>
                    <img className={styles.news__pict} src={lucu} alt="reaction emo" />
                    <p className={styles.reaction__total}>21</p>
                </div>
                <div className={styles.reaction__emo}>
                    <img className={styles.news__pict} src={penasaran} alt="reaction emo" />
                    <p className={styles.reaction__total}>21</p>
                </div>
                <div className={styles.reaction__emo}>
                    <img className={styles.news__pict} src={kaget} alt="reaction emo" />
                    <p className={styles.reaction__total}>21</p>
                </div>
            </div>
            <p className={styles.question}>Komentar</p>
                <input className={styles.comment__input}></input>
            <p className={styles.question}>Email</p>
                <input className={styles.email__input}></input>
            <button className={styles.news__button}>Kirim</button>
        </div>
    )
}


export default News_Form;