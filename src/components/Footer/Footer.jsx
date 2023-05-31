import css from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={css.bar}>
            <div className={css.upperFooter}>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <a href={"/"}>Discover</a>
                        </li>
                        <li>
                            <a href={"/"}>Special Dates</a>
                        </li>
                        <li>
                            <a href={"/"}>Services</a>
                        </li>
                        <li>
                            <a href={"/"}>Community</a>
                        </li>
                        <li>
                            <a href={"/"}>About us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>
                            <a href={"/"}>About us</a>
                        </li>
                        <li>
                            <a href={"/"}>Blog & Articles</a>
                        </li>
                        <li>
                            <a href={"/"}>Terms and Condition</a>
                        </li>
                        <li>
                            <a href={"/"}>Privacy Policy</a>
                        </li>
                        <li>
                            <a href={"/"}>Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={css.lowerFooter}>
                <div>
                    <h3>Social Medias</h3>
                    <ul>
                        <li>
                            <svg>1</svg>
                        </li>
                        <li>
                            <svg>2</svg>
                        </li>
                        <li>
                            <svg>3</svg>
                        </li>
                        <li>
                            <svg>4</svg>
                        </li>
                        <li>
                            <svg>5</svg>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href={"/"}>Address: Jl.Codelaras No.205A</a>
                        </li>
                        <li>
                            <a href={"/"}>Kediri, Pare AG17</a>
                        </li>
                        <li>
                            <a href={"/"}>Phone: 123 456 7890</a>
                        </li>
                        <li>
                            <a href={"/"}>Email: myagungperdana@gmail.com</a>
                        </li>
                        <li>
                            <a href={"/"}>Maps: Kediri, East java</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}