import { NavLink } from "react-router-dom"
import styles from "./CardServices.module.css"

function CardServices ( {service, backgroundImage, goTo, backgroundColor, alinging, textAling }) {
    
    const sectionStyles = {
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: "0"
        
    }

    return (

        <section style={sectionStyles} className={styles.service_container} >
            <section className={styles.service_container_screen} style={{ background: backgroundColor }}></section>
            <article className={styles.service_title_button_container} style={{ alignItems: alinging }}>
                <h2 className={styles.service_title} style={{textAlign: textAling}}>{service}</h2>
                <NavLink className={styles.button_anchor_container} to={goTo}>
                    <button className={styles.service_button}>Ver más</button>
                </NavLink>
            </article>
        </section>
    )
}

export default CardServices