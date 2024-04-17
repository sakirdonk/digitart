import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content";
import NewsForm from "../components/News_Form/News_Form";
import Navbar_Login from "../components/Navbar_Login/Navbar_Login";

function News(){
    return(
        <div>
            <Navbar_Login />
            {/* <Content />
            <Footer /> */}
        </div>
    )
}

export default News;