import css from './Explore.module.css';

export const Explore = () => {
    return (
        <section className={css.section}>
            <div>
                <h2>Explore the world with a smile</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                    venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                    leo
                </p>
            </div>
            <form className={css.form}>
                <input type={"text"}/>
                <input type={"text"}/>
                <input type={"number"}/>
                <button>Find Trip Now<img alt={"loop"}/></button>
            </form>
        </section>
    )
}