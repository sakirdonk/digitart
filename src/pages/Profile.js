import Navbar from "../components/Navbar/Navbar";
import Data from "../components/Data/Data";
import NavbarLogin from "../components/Navbar_Login/Navbar_Login";

function Profile(){
    return(
        <div>
            <NavbarLogin />
            <Data />
        </div>
    )
}

export default Profile;