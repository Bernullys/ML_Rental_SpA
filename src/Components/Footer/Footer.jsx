import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import styles from "./Footer.module.css"

import footerLogoImage from "../../../public/assets/logo-mlrental-footer.png"

function Footer () {
    return (
        <footer className={styles.footer_main_container}>
            <section className={styles.footer_nav_container}>
                <section className={styles.footer_logo_container}>
                    <NavLink to="/">
                        <img className={styles.logo_hvt_footer} src={footerLogoImage} alt="HVTest-company-logo" />
                    </NavLink>
                </section>
                <section className={styles.footer_central_container}>
                    <SocialLogos />
                    <ul>
                        <h3>Contáctenos</h3>
                        <li>l.nunez@mlrental.cl</li>
                        <li>(+56) 973452744</li>
                        <li>Exequiel Fernandez N°2302, Macul, Región Metrololitana.</li>
                    </ul>
                    <ul>
                        <h3>ML Rental</h3>
                        <li>Inicio</li>
                        <li>Empresa</li>
                        <li>Equipos en arriendo</li>
                        <li>Contacto</li>
                    </ul>
                    <ul>
                        <h3>Redes Sociales</h3>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Whatsapp</li>
                    </ul>
                </section>
            </section>
            <section className={styles.botton_rights}>
                <ul>
                    <li>Copyright 2025 B&D Brands</li>
                    <li>Contenido corporativo intern. Prohibida su reproducción.</li>
                </ul>
                <ul>
                    <li>Politicas de Privacidad y Términos de uso</li>
                </ul>
                <ul>
                    <li>Politicas Corporativas</li>
                </ul>
                <ul>
                    <li>Trabajamos en todo Chile</li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer