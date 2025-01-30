import { NavLink } from "react-router-dom"
import styles from "./CardHomeProjects.module.css"

function CardHomeProjects ( { project, description, backgroundImage }) {
    
    const inlineContainerStyles = {
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        opacity: "1"
    }
    
    return (
        <section className={styles.card_home_project_container} style={inlineContainerStyles}>
            <section className={styles.card_home_project_info}>
                <h2 className={styles.card_home_project_title}>{project}</h2>
                <p className={styles.card_home_project_description}>{description}</p>
                <NavLink to="/contacto">
                    <button className={styles.transparent_button}>Contáctanos</button>
                </NavLink>
            </section>
        </section>
    )
}

export default CardHomeProjects