import { BsLinkedin } from "react-icons/bs"
import styles from "./PersonalCards.module.css"

const PersonalCards = ({ profileImage, name, position, linkTolinkedin }) => {
    return (
        <article className={styles.personal_card_container}>
            <section className={styles.image_card_container}>
                <img src={profileImage} alt="HvTest-Personal" />
            </section>
            <section className={styles.content_card_container}>
                <h3>{name}</h3>
                <h4>{position}</h4>
                <section className={styles.us_social_logos_container_personal_card}>
                    <a className={styles.footer_solcial_logo} href={linkTolinkedin} target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={styles.card_linke_logo}/>
                    </a>
                </section>
            </section>
        </article>
    )
}

export default PersonalCards