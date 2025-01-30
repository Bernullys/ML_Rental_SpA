import styles from "./CardServicesDetails.module.css"

function CardServicesDetails ( { subtitle, charactericticsList }) {
    return (
        <section className={styles.service_article_container}>
            <section className={styles.service_subtitle_and_characteristics_container}>
                <h2 className={styles.service_subtitle}>{subtitle}</h2>
                <ul className={styles.service_characteristics}>
                    {
                        charactericticsList.map((c, index) => (
                            <li key={index}
                                className={styles.service_characteristics_item} >
                                {c}
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    )
}

export default CardServicesDetails