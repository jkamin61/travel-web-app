import css from './Travelers.module.css'

export const Travelers = () => {
    return (
        <section className={css.travelers}>
            <div>
                <h3>Travelers Point</h3>
                <h2>We help to find your dream place</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                    leo, vel fringilla est ullamcorper eget nulla facilisi
                </p>
            </div>
            <ul className={css.boxes}>
                <li>
                    <h2>100+</h2>
                    <p>Holiday package</p>
                </li>
                <li>
                    <h2>172</h2>
                    <p>Hotels</p>
                </li>
                <li>
                    <h2>68</h2>
                    <p>Elite Transportation</p>
                </li>
                <li>
                    <h2>32M+</h2>
                    <p>we help to find your dream place</p>
                </li>
            </ul>
            <div>
                <img alt={"mountains"}/>
                <img alt={"riviera"}/>
                <img alt={"bridge"}/>
            </div>
        </section>
    )
}