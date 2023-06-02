import css from './Explore.module.css';

export const Explore = () => {

    return (
        <section className={css.explore}>
            <div className={css.mainText}>
                <h2>Explore the world with a smile</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                    venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                    leo
                </p>
            </div>
            <form className={css.form}>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button type={"submit"}>FIND TRIP NOW</button>
            </form>
        </section>
    )
}