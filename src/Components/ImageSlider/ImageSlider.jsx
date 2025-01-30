import React, { useState } from "react"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import styles from "./ImageSlider.module.css"

function ImageSlider ({ imagesList }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    function nextImage () {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1
        )
    }

    function prevImage () {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? imagesList.length -1 : prevIndex - 1
        )   
    }

    return (
        <section className={styles.imageslider_main_container}>
            <section className={styles.imageslider}>
                {
                    imagesList.map((img, index) => (
                        <img
                            key={index}
                            src={img} 
                            alt={`Electric-test-image ${index}`}
                            className={
                                index === currentImageIndex ? styles.slide_active : styles.slide} 
                        />
                    ))
                }
            </section>
            <IoIosArrowRoundBack className={styles.card_arrow_left} onClick={prevImage}/>
            <IoIosArrowRoundForward className={styles.card_arrow_right} onClick={nextImage}/>

        </section>
    )
}

export default ImageSlider