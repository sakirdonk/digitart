import Navbar from "../components/Navbar/Navbar";
import ReportHero from "../components/Report_Hero/Report_Hero";
import MyReport from "../components/MyReport/MyReport";
import NavbarLogin from "../components/Navbar_Login/Navbar_Login";

function My_Report(){
    return(
        <div>
            <NavbarLogin />
            <ReportHero />
            <MyReport />
        </div>
    )
}

export default My_Report;