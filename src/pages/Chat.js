import ChatConsult from "../components/Chat_Consult/Chat_Consult";
import Navbar from "../components/Navbar/Navbar";
import NavbarLogin from "../components/Navbar_Login/Navbar_Login";

function Chat(){
    return(
        <div>
            <NavbarLogin />
            <ChatConsult />
        </div>
    )
}

export default Chat;