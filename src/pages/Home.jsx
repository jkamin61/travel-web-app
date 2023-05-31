import {Header} from "../components/Header/Header";
import {Explore} from "../components/Explore/Explore";
import {Travelers} from "../components/Travelers/Travelers";
import {Destination} from "../components/Destination/Destination";
import {Testimonial} from "../components/Testimonial/Testimonial";
import {Footer} from "../components/Footer/Footer";
import {Container} from "@mui/material";

const Home = () => {
    return (
        <>
            <Container>
                <Header></Header>
            </Container>
            <main>
                <Container>
                    <Explore></Explore>
                    <Travelers></Travelers>
                    <Destination></Destination>
                    <Testimonial></Testimonial>
                </Container>
            </main>
            <Container>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Home;