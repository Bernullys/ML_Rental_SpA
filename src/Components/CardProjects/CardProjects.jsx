import { NavLink } from "react-router-dom"
import styles from "./CardProjects.module.css"

function CardProjects ( { project, description, backgroundImage}) {

    const inlineContainerStyles = {
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "1"
    }
    
    return (
        <section className={styles.card_project_container}>
            <section className={styles.card_project_image_container}>
                <img src={backgroundImage} alt="Project-Image" className={styles.card_project_image}/>
            </section>
            <section className={styles.card_project_info}>
                <h2 className={styles.card_project_title}>{project}</h2>
                <p className={styles.card_project_description}>{description}</p>
            </section>
        </section>
    )
}

export default CardProjects

