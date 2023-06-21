import css from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <footer className={css.bar}>
            <div className={css.upperFooter}>
                <div>
                    <h3 className={css.linksHeading}>Links</h3>
                    <ul className={css.linksList}>
                        <li className={css.link}>
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
                    <h3 className={css.servicesHeading}>Services</h3>
                    <ul className={css.servicesList}>
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
                    <h3 className={css.contactHeading}>Contact</h3>
                    <ul className={css.contactList}>
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
                <div className={css.footerSocialMedia}>
                    <h3 className={css.socialMediaHeading}>Social Medias</h3>
                    <ul>
                        <li>
                            <a href={"/"}><InstagramIcon fontSize="large" className={css.socialIcons}></InstagramIcon></a>
                        </li>
                        <li>
                            <a href={"/"}><FacebookIcon fontSize="large" className={css.socialIcons}></FacebookIcon></a>
                        </li>
                        <li>
                            <a href={"/"}> <TwitterIcon fontSize="large" className={css.socialIcons}></TwitterIcon></a>
                        </li>
                        <li>
                            <a href={"/"}> <GitHubIcon fontSize="large" className={css.socialIcons}></GitHubIcon></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}