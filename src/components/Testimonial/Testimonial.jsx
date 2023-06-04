import css from './Testimonial.module.css';
import {avatars} from "./avatars";
import {nanoid} from 'nanoid';

export const Testimonial = () => {
    return (
        <section className={css.testimonial}>
            <h3 className={css.heading}>Testimonial</h3>
            <h2 className={css.subHeading}>What they say about us</h2>
            <ul className={css.commentsList}>{
                avatars.map(element => {
                    return (
                        <li key={nanoid()} className={css.commentItem}>
                            <div className={css.userAbouts}>
                            <img src={element.avatar} alt={'avatar'} className={css.avatar}/>
                            <h3 className={css.usersName}>{element.name}</h3>
                            </div>
                            <p className={css.comment}>{element.comment}</p>
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}