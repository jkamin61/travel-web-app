import css from './Header.module.css'
import {clsx} from 'clsx';
import {useState} from "react";
import {Button, Link} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export const Header = () => {
    const [modal, setModal] = useState(false);

    const handleModalWindow = () => {
        modal === false ? setModal(true) : setModal(false);
    }
    return (
        <header className={css.bar}>

            <div>
                <h2>JourneyHive</h2>
            </div>
            <div className={css.mobilePanel}>
                <div className={css.authButtons}>
                    <Button variant="contained">Log in</Button>
                    <Button variant="contained">Register</Button>
                </div>
                <div>
                    <MenuIcon fontSize={"large"} cursor={"pointer"} onClick={handleModalWindow}></MenuIcon>
                </div>
            </div>
            <div className={clsx(modal ? css.modalVisible : css.modalHidden)}>
                <Breadcrumbs>
                    <Link underline="hover" color="inherit" href="#">
                        <HomeIcon></HomeIcon>Home
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Discover
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Services
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        About us
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Contact
                    </Link>
                </Breadcrumbs>
                <button onClick={handleModalWindow}>
                    X
                </button>
            </div>
        </header>
    )
}