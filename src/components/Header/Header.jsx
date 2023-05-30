import css from './Header.module.css'
import {clsx} from 'clsx';
import {useState} from "react";

export const Header = () => {
    const [modal, setModal] = useState(false);

    const handleModalWindow = () => {
        modal === false ? setModal(true) : setModal(false);
    }
    return (
        <header className={css.bar}>

            <div>
                <h2>travel-app</h2>
            </div>
            <div className={css.mobilePanel}>
                <div>
                    <button>Log in</button>
                    <button>Register</button>
                </div>
                <div>
                    <button onClick={handleModalWindow}>|||</button>
                </div>
            </div>
            <div className={clsx(modal ? css.modalVisible : css.modalHidden)}>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Discover</li>
                        <li>Services</li>
                        <li>News</li>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <button onClick={handleModalWindow}>
                    X
                </button>
            </div>
        </header>
    )
}