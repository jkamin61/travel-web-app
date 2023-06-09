import css from './Explore.module.css';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';

export const Explore = () => {
    const handleExploreButtonAnimation = (event) => {
        const exploreButton = event.target;
        exploreButton.classList.contains(`${css.exploreButtonClicked}`) ?
            exploreButton.classList.remove(`${css.exploreButtonClicked}`) :
            exploreButton.classList.add(`${css.exploreButtonClicked}`)

    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <section className={css.explore}>
            <div className={css.mainText}>
                <h2 className={css.exploreHeading}>Explore the world with a smile</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                    venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                    leo
                </p>
            </div>
            <form className={css.form}>
                <div>
                <PlaceIcon></PlaceIcon>
                </div>
                <input type={"search"} className={css.exploreInputs}></input>
                <input type={"date"} className={css.exploreInputs}></input>
                <input type={"search"} className={css.exploreInputs}></input>
                <button type={"submit"} className={css.exploreSubmitButton} onClick={handleFormSubmit}
                        onMouseDown={handleExploreButtonAnimation} onMouseUp={handleExploreButtonAnimation}>FIND TRIP
                    NOW<SearchIcon></SearchIcon></button>
            </form>
        </section>
    )
}