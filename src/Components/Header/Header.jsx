import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"


function Header () {

    const [expandedMenu, setExpandedMenu] = useState(false)
    const [showServicesList, setShowServicesList] = useState(false)

    function toggleMenu () {
        setExpandedMenu(!expandedMenu)
    }

    function showServices () {
        setShowServicesList(!showServicesList)
    }

    return (
        <header>
            <nav className={styles.header_nav_container}>

                <NavLink className={styles.a_logo} to="/">
                    <section 
                        className={styles.header_logo_container}
                        onClick={toggleMenu}
                    ></section>
                </NavLink>

                <ul className={styles.header_nav_ul}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/nosotros"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/servicios"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}
                            onMouseEnter={showServices}
                            onMouseLeave={showServices}
                            >
                                Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/proyectos"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                Proyectos
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.contact_header_button_container}>
                    <li>
                        <NavLink
                            to="/contacto"
                            id={styles.cotiza_header_button}>
                                Contáctanos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className={ expandedMenu ? styles.responsive_menu_container : styles.menu_hided}>
                <ul className={styles.responsive_menu_list}>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Inicio
                        </NavLink>
                    </li>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/nosotros"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Nosotros
                        </NavLink>
                    </li>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/servicios"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Servicios
                        </NavLink>
                    </li>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/proyectos"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Proyectos
                        </NavLink>
                    </li>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/contacto"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Contáctanos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className={ showServicesList ? styles.show_services_container : styles.show_services_hided}>
                <ul className={styles.show_services}
                    onMouseLeave={showServices}>
                    <li>
                        <NavLink to="/servicios/pruebas">
                                Pruebas eléctricas de aceptación a equipos eléctricos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios/control">
                                Control y protecciones eléctricas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios/mantenimiento">
                                Mantenimiento y puesta en servicio de equipos eléctricos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios/asesoría">
                                Asesoría técnica
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios/arriendo">
                                Arriendo de equipos de pruebas eléctricas
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header