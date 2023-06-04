import css from "./Destination.module.css"
import {destinationGalleryItems} from "./destinationGalleryItems";
import React, {useRef} from 'react';

export const Destination = () => {
    const photoContainerRef = useRef(null);
    let currentIndex = 0;
    const scrollPhotos = () => {
        const photoContainer = photoContainerRef.current;
        if (!photoContainer) return;

        const photoWidth = photoContainer.offsetWidth;
        const newPosition = -currentIndex * photoWidth;
        photoContainer.style.transform = `translateX(${newPosition}px)`;
    }
    const handlePreviousButton = () => {
        if (currentIndex > 0) {
            currentIndex--;
            scrollPhotos();
        }
    }
    const handleNextButton = () => {
        const photoContainer = photoContainerRef.current;
        if (!photoContainer) return;
        if (currentIndex < photoContainer.children.length - 1) {
            currentIndex++;
            scrollPhotos();
        }
    }
    return (
        <section className={css.destination}>
            <h3>Top Destination</h3>
            <h2>Discover your love</h2>
            <div className={css.photoBox}>
                <button className={`${css.arrowBtn} ${css.prevBtn}`} onClick={handlePreviousButton}>&#8249;</button>
                <div ref={photoContainerRef} className={css.photoContainer}>
                    {destinationGalleryItems.map(element => {
                        return (
                            <>
                                <img src={element.image} alt={element.description}/>
                            </>
                        )
                    })}
                </div>
                <button className={`${css.arrowBtn} ${css.nextBtn}`} onClick={handleNextButton}>&#8250;</button>
            </div>
        </section>
    )
}