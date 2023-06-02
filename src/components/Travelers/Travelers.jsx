import css from './Travelers.module.css';
import travelersLeftImage from './travelers_left_image.png';
import travelersMiddleImage from './travelers_middle_image.png';
import travelersRightImage from './travelers_right_image.png';
export const Travelers = () => {
    return (
        <section className={css.travelers}>
            <div className={css.pointDescription}>
                <h3 className={css.mainHeading}>Travelers Point</h3>
                <h2 className={css.additionalHeading}>We help to find your dream place</h2>
                <p className={css.abouts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                    amet luctus venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                    leo, vel fringilla est ullamcorper eget nulla facilisi
                </p>
            </div>
            <ul className={css.boxes}>
                <li className={css.box}>
                    <h2 className={css.statistics}>100+</h2>
                    <p className={css.statisticsText}>Holiday package</p>
                </li>
                <li className={css.box}>
                    <h2 className={css.statistics}>172</h2>
                    <p className={css.statisticsText}>Hotels</p>
                </li>
                <li className={css.box}>
                    <h2 className={css.statistics}>68</h2>
                    <p className={css.statisticsText}>Elite Transportation</p>
                </li>
                <li className={css.box}>
                    <h2 className={css.statistics}>32M+</h2>
                    <p className={css.statisticsText}>we help to find your dream place</p>
                </li>
            </ul>
            <div className={css.images}>
                <img src={travelersLeftImage} className={css.leftImage} alt={"mountains"}/>
                <img src={travelersMiddleImage} className={css.middleImage} alt={"riviera"}/>
                <img src={travelersRightImage} className={css.rightImage} alt={"bridge"}/>
            </div>
        </section>
    )
}