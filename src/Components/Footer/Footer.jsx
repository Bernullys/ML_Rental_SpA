import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";


import styles from "./Footer.module.css"

import footerLogoImage from "../../../public/assets/logo-mlrental-removebg.png"

function Footer () {
    return (
        <footer className={styles.footer_main_container}>
            <section className={styles.footer_nav_container}>
                <section className={styles.footer_central_container}>
                    <article className={styles.footer_article_one}>
                        <h3>ML Rental</h3>
                        <ul>
                            <li>
                                <NavLink className={styles.footer_navlink} to="/">
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={styles.footer_navlink} to="/empresa">
                                    Empresa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={styles.footer_navlink} to="/equipos-en-arriendo">
                                    Equipos en arriendo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={styles.footer_navlink} to="/contacto">
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </article>
                    <article className={styles.footer_article_two}>
                        <h3>Contáctanos</h3>
                        <ul>
                            <div className={styles.footer_div_container}>
                                <CiMail className={styles.footer_mini_logo}/>
                                <li>l.nunez@mlrental.cl</li>
                            </div>
                            <div className={styles.footer_div_container}>
                                <MdOutlinePhone className={styles.footer_mini_logo}/>
                                <li>(+56) 973452744</li>
                            </div>
                            <div className={styles.footer_div_container}>
                                <FaMapLocationDot className={styles.footer_mini_logo} />
                                <li>Exequiel Fernández N°2302, Macul, RM.</li>
                            </div>
                        </ul>
                    </article>
                    <article className={styles.footer_article_three}>
                        <h3>Redes</h3>
                        <ul>
                            <SocialLogos />
                        </ul>
                    </article>
                </section>
            </section>
            <section className={styles.footer_logo_container}>
                <NavLink to="/">
                    <img className={styles.logo_hvt_footer} src={footerLogoImage} alt="HVTest-company-logo" />
                </NavLink>
            </section>
            <section className={styles.botton_rights}>
                <ul>
                    <li> Sitio desarrollado por:
                        <a className={styles.anchor_to_my_profile} href="https://bernullys.github.io/bernullys-portfolio/"  target="_blank" rel="noopener noreferrer">
                            BADR Developer
                        </a>
                    </li>
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