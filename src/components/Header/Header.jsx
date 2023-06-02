import css from './Header.module.css'
import {clsx} from 'clsx';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    const [modal, setModal] = useState(false);
    const handleModalWindow = () => {
        modal === false ? setModal(true) : setModal(false);
    }
    const handleAuthButtonsAnimation = (event) => {
        const authButton = event.target;
        if (authButton.classList.contains(`${css.authButtonClicked}`)) {
            authButton.classList.remove(`${css.authButtonClicked}`)
        } else {
            authButton.classList.add(`${css.authButtonClicked}`)
        }
    }
    return (
        <header className={css.bar}>
            <div>
                <h2>JourneyHive</h2>
            </div>
            <div className={css.mobilePanel}>
                <div className={css.authButtons}>
                    <button className={css.authLoginButton} onMouseDown={handleAuthButtonsAnimation}
                            onMouseUp={handleAuthButtonsAnimation}>Log in
                    </button>
                    <button className={css.authRegisterButton} onMouseDown={handleAuthButtonsAnimation}
                            onMouseUp={handleAuthButtonsAnimation}>Register
                    </button>
                </div>
                <div>
                    <MenuIcon fontSize={"large"} cursor={"pointer"} onClick={handleModalWindow}></MenuIcon>
                </div>
            </div>
            <div className={clsx(modal ? css.modalVisible : css.modalHidden)}>
                <button onClick={handleModalWindow}>
                    ->
                </button>
                <ul>
                    <li>Home</li>
                    <li>Discover</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    )
}