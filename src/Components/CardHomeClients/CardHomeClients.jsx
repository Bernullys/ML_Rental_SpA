import styles from "./CardHomeClients.module.css"

function CardHomeClients ({ backgroundImage }) {

    return (
        <section className={styles.card_home_clients_card_container}>
            <img src={backgroundImage} alt="Client-Company-Logo" />   
        </section>
    )
}

export default CardHomeClients