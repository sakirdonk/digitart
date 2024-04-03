import Coop from "../components/Coop/Coop";
import Info from "../components/Info/Info";
import Hero from "./../components/Hero/Hero";

function Dashboard(){
    return(
        <div>
            <Hero />
            <Coop />
            <Info />
        </div>
    )
}

export default Dashboard;