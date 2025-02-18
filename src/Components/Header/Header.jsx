import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

function Header () {

    const [expandedMenu, setExpandedMenu] = useState(false)

    function toggleMenu () {
        setExpandedMenu(!expandedMenu)
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
                                INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/empresa"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                EMPRESA
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/equipos-en-arriendo"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}
                            >
                                EQUIPOS EN ARRIENDO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                INSTRUMENTOS Y ACCESORIOS
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
        </header>
    )
}

export default Header