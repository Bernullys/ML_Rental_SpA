import { BsLinkedin, BsWhatsapp} from "react-icons/bs"
import styles from "./SocialLogos.module.css"


function SocialLogos () {
    return (
        <section className={styles.logos_main_container}>
            <a href="https://www.linkedin.com/company/ml-rental-equipment-electrical-tests/" target="_blank" rel="noopener noreferrer"><BsLinkedin className={styles.linke_logo}/></a>
            <a href="https://wa.me/56973452744?text= Hola, quiero hacer consulta(s) a HvTest!" target="_blank" rel="noopener noreferrer"><BsWhatsapp className={styles.whatsapp_logo}/></a>
        </section>
    )
}

export default SocialLogos