import {Header} from "../components/Header/Header";
import {Explore} from "../components/Explore/Explore";
import {Travelers} from "../components/Travelers/Travelers";
import {Destination} from "../components/Destination/Destination";
import {Testimonial} from "../components/Testimonial/Testimonial";
import {Footer} from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className={"container"}>
                <Header></Header>
                <main>
                    <Explore></Explore>
                    <Travelers></Travelers>
                    <Destination></Destination>
                    <Testimonial></Testimonial>
                </main>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home;