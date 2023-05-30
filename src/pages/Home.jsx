import {Header} from "../components/Header/Header";
import {Explore} from "../components/Explore/Explore";
import {Travelers} from "../components/Travelers/Travelers";
import {Destination} from "../components/Destination/Destination";
import {Testimonial} from "../components/Testimonial/Testimonial";
import {Footer} from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Header></Header>
            <Explore></Explore>
            <Travelers></Travelers>
            <Destination></Destination>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    )
}

export default Home;