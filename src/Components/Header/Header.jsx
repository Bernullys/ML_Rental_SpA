import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { IoBriefcaseSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";


import styles from "./Header.module.css"

function Header () {

    const [expandedMenu, setExpandedMenu] = useState(false)

    function toggleMenu () {
        setExpandedMenu(!expandedMenu)
    }


    return (
        <header className={styles.header_header}>
            <nav className={styles.burger_menu_container}>
                <NavLink className={styles.navlink_menu} onClick={toggleMenu}>
                    <GiHamburgerMenu className={styles.burger_menu}/>
                    ML Rental
                </NavLink>
            </nav>
            <nav className={styles.header_nav_container}>
                <ul className={styles.header_nav_ul}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                <IoIosContact className={ (isActive) => isActive ? styles.header_icons_selected : undefined}/>
                                Inicio         
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/empresa"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                <IoBriefcaseSharp  className={ (isActive) => isActive ? styles.header_icons_selected : undefined}/> 
                                Empresa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/equipos-en-arriendo"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}
                            >
                                <SiSpeedtest  className={ (isActive) => isActive ? styles.header_icons_selected : undefined}/>
                                Instrumentos y Accesorios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacto"
                            className={({ isActive }) => isActive ? styles.active_page : undefined}>
                                <IoMailSharp  className={ (isActive) => isActive ? styles.header_icons_selected : undefined}/>
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
                        <NavLink to="/empresa"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Empresa
                        </NavLink>
                    </li>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/equipos-en-arriendo"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Instrumentos y Accesorios
                        </NavLink>
                    </li>
                    <li className={styles.responsive_menu_list_item}>
                        <NavLink to="/contacto"
                            className={styles.responsive_menu_list_item_anchor}
                            onClick={toggleMenu}>
                                Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header