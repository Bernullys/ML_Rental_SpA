import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import styles from "./Footer.module.css"

import footerLogoImage from "../../../public/assets/logo-footer.png"

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
                        <h3>Email</h3>
                        <li>l.nunez@hvtest.cl</li>
                    </ul>
                    <ul>
                        <h3>Teléfono</h3>
                        <li>(+56) 973452744</li>
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