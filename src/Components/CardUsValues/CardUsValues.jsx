import styles from "./CarsUsValues.module.css"

function CardUsValues ({ valueIcon, value, description }) {
    return (
        <article className={styles.card_us_values_main_container}>
            <section className={styles.card_us_values_container}>
                <div>
                    {valueIcon}
                </div>
                <h2 className={styles.card_us_value}>{value}</h2>
                <p className={styles.card_us_vaulue_description}>{description}</p>
            </section>
        </article>
    )
}

export default CardUsValues