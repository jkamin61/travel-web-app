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
            <Container sx={{
                paddingLeft: 0,
                paddingRight: 0,
                '@media (min-width: 600px)': {
                    paddingLeft: 0,
                    paddingRight: 0,
                },
            }}
            >
                <Header></Header>
            </Container>
            <main>
                <Container sx={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    '@media (min-width: 600px)': {
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                }}>
                    <Explore></Explore>
                    <Travelers></Travelers>
                    <Destination></Destination>
                    <Testimonial></Testimonial>
                </Container>
            </main>
            <Container sx={{
                paddingLeft: 0,
                paddingRight: 0,
                '@media (min-width: 600px)': {
                    paddingLeft: 0,
                    paddingRight: 0,
                },
            }}>
                <Footer></Footer>
            </Container>
        </>
    )
}

export default Home;