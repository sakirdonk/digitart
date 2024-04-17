import Coop from "../components/Coop/Coop";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NavbarLogin from "../components/Navbar_Login/Navbar_Login";
import ReportForm from "../components/Report_Form/Report_Form";

function Report(){
    return(
        <div>
            <NavbarLogin />
            <ReportForm />
            <Coop />
            <Footer />
        </div>
    )
}

export default Report;