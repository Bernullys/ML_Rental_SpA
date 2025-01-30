import React, { useState } from "react"
import { IoCloseCircleSharp } from "react-icons/io5"
import CardGearsDescription from "../CardGearsDescription/CardGearsDescription"
import styles from "./CardTestGears.module.css"

function CardTestGears ( { name, brand, model, image, description, characteristics, eett }) {

    const [showDescription, setShowDescription] = useState(false)

    function showGearDescription () {
        setShowDescription(!showDescription)
        console.log("APPEARRRS")
    }


    return (
        <section className={styles.testgear_article_main_container}>
            <article className={styles.testgear_article_container}>
                <section className={styles.testgear_image_container}>
                    <img src={image} alt="Equipo-de-medida-eléctrica" className={styles.testgear_image}/>
                </section>
                <h1 className={styles.testgear_name}>{name}</h1>
                <h2 className={styles.testgear_brand}>Marca: {brand}</h2>
                <h2 className={styles.testgear_model}>Modelo: {model}</h2>
                <section className={styles.testgear_buttons_container}>
                    <button className={styles.testgear_description_button} onClick={showGearDescription}>Descripción</button>
                    <button className={styles.testgear_eett_button}>
                        <a href={`${eett}`} target="_blank" rel="noopener noreferrer">Ficha técnica</a>
                    </button>
                </section>
            </article>
            <section className={showDescription ? styles.testgear_show_description : styles.testgear_hide_description}>
                <IoCloseCircleSharp className={styles.card_gear_des_close_icon} onClick={showGearDescription}/>
                <CardGearsDescription 
                    name={name}
                    description={description}
                />
            </section>
        </section>
    )
}

export default CardTestGears