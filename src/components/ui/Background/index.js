import styled, { css } from 'styled-components';
import styles from "./Background.module.css";
import hero from "../../../assets/bg_hero.png";
import footer from "../../../assets/bg_footer.png";
import news from "../../../assets/bg_news2.png";
import report from "../../../assets/report_hero.png";
import welcome from "../../../assets/bg_card2.png";
import service from "../../../assets/bg_service.png";

const backgroundHero={
    backgroundImage:`url(${hero})`,
    backgroundPosition:`right`,
}

const backgroundNews={
    backgroundImage:`url(${news})`,
    backgroundPosition:`left`,
    height: 800
}

const backgroundFooter={
    backgroundImage:`url(${footer})`,
    backgroundPosition:`center`,

}

const backgroundReport={
    backgroundImage:`url(${report})`,
    backgroundPosition:`center`,

}

const backgroundWelcome={
    backgroundImage:`url(${welcome})`,
    backgroundPosition:`center`,

}

const backgroundService={
    backgroundImage:`url(${service})`,
    backgroundPosition:`center`,

}

function Background(props){
    return(
        <div style=
            {props.bg==="hero"?backgroundHero :
            props.bg==="news"?backgroundNews :
            props.bg==="footer"?backgroundFooter :
            props.bg==="report_hero"?backgroundReport :
            props.bg==="welcome"?backgroundWelcome :
            props.bg==="service"?backgroundService :
            null}
            className={styles.background}>
                {props.children}
        </div>
    )
}

export default Background;