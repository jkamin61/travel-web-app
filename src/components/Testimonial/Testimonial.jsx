import css from './Testimonial.module.css';

export const Testimonial = () => {
    return (
        <section className={css.testimonial}>
            <h3>Testimonial</h3>
            <h2>What they say about us</h2>
            <ul>
                <li>
                    <img alt={"avatar"}/>
                    <p>Name</p>
                    <p>opinion</p>
                </li>
                <li>
                    <img alt={"avatar"}/>
                    <p>Name</p>
                    <p>opinion</p>
                </li>
                <li>
                    <img alt={"avatar"}/>
                    <p>Name</p>
                    <p>opinion</p>
                </li>
                <li>
                    <img alt={"avatar"}/>
                    <p>Name</p>
                    <p>opinion</p>
                </li>
                <li>
                    <img alt={"avatar"}/>
                    <p>Name</p>
                    <p>opinion</p>
                </li>
                <li>
                    <img alt={"avatar"}/>
                    <p>Name</p>
                    <p>opinion</p>
                </li>
            </ul>
        </section>
    )
}