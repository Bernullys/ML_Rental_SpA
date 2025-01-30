
import styles from "./CardGearsDescription.module.css"

function CardGearsDescription ( { name, description }) {
    return (
        <article className={styles.card_gear_des_main_container}>
            <h4 className={styles.card_gear_des_title}>{name}</h4>
            <p className={styles.card_gear_des_paragraph}>{description}</p>
        </article>
    )
}

export default CardGearsDescription