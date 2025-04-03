import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { IoBriefcaseSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { IoIosContact } from "react-icons/io";


import styles from "./Header.module.css"

function Header () {

    const [expandedMenu, setExpandedMenu] = useState(false)

    function toggleMenu () {
        setExpandedMenu(!expandedMenu)
    }

    return (
        <header className={styles.header_header}>
            <nav className={styles.header_nav_container}>
                <ul className={styles.header_nav_ul}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                <IoIosContact  className={styles.header_icons}/>
                                Inicio         
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/empresa"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                <IoBriefcaseSharp className={styles.header_icons}/> 
                                Empresa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/equipos-en-arriendo"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}
                            >
                                <SiSpeedtest  className={styles.header_icons} />
                                Instrumentos y Accesorios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                <IoMailSharp  className={styles.header_icons}/>
                                Contacto
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