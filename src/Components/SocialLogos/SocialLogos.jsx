import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import styles from "./SocialLogos.module.css"


function SocialLogos () {
    return (
        <section className={styles.logos_main_container}>
            <a href="https://www.instagram.com/hvtest.cl/" target="_blank" rel="noopener noreferrer"><BsInstagram className={styles.insta_logo}/></a>
            <a href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer"><BsLinkedin className={styles.insta_logo}/></a>
            <a href="https://wa.me/56973452744?text= Hola, quiero hacer consulta(s) a HvTest!" target="_blank" rel="noopener noreferrer"><BsWhatsapp className={styles.insta_logo}/></a>
        </section>
    )
}

export default SocialLogos