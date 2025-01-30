import { NavLink } from "react-router-dom"
import styles from "./CardHomeServices.module.css"

function CardHomeSercives ({ serviceFirstLine, serviceSecondLine, serviceThirdLine, backgroundImage, goTo, isSelected }) {

    const lineStyles = {
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return (
        <section className={styles.card_home_service_container} style={lineStyles}>
            <section className={styles.card_home_service_container_blind}>
                <section className={styles.card_home_service_title_container}>
                    <h2 className={styles.card_home_service_title}>{serviceFirstLine}</h2>
                    <h2 className={styles.card_home_service_title}>{serviceSecondLine}</h2>
                    <h2 className={styles.card_home_service_title}>{serviceThirdLine}</h2>
                </section>
                <NavLink to={goTo}>
                    <button className={styles.white_button_sm}>Ver Servicio</button>
                </NavLink>
            </section>
        </section>
    )
}

export default CardHomeSercives