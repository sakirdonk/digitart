import AboutUs from "../components/About_Us/About_Us";
import Navbar from "../components/Navbar/Navbar";
import ProfileSigma from "../components/Profile_Sigma/Profile_Sigma";
import Service from "../components/Service/Service";
import Coop from "../components/Coop/Coop";
import Footer from "../components/Footer/Footer";
import Testimony from "../components/Testimony/Testimony";
import NavbarLogin from "../components/Navbar_Login/Navbar_Login";

function About_Login(){
    return(
        <div>
            <NavbarLogin />
            <AboutUs />
            <ProfileSigma />
            <Service />
            <Testimony />
            <Coop />
            <Footer />
        </div>
    )
}

export default About_Login;