import css from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <div>
                <h2>travel-app</h2>
            </div>
            <div>|||</div>
            <div className={css.header__modal}>
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
            </div>
        </header>
    )
}