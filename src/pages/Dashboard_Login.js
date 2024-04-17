import Coop from "../components/Coop/Coop";
import Info from "../components/Info/Info";
import News from "../components/News/News";
import Welcome from "../components/Welcome/Welcome";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import NavbarLogin from "../components/Navbar_Login/Navbar_Login";

function Dashboard_Login(){
    return(
        <div>
            <NavbarLogin />
            <Hero />
            <Coop />
            <Info />
            <News />
            <Welcome />
            <Footer />
        </div>
    )
}

export default Dashboard_Login;