import React,{ useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import SocialLogos from "../SocialLogos/SocialLogos"
import CardHomeSercives from "../CardHomeServices/CardHomeServices"
import CardHomeProjects from "../CardHomeProjects/CardHomeProjects"
import CardHomeClients from "../CardHomeClients/CardHomeClients"
import CardSlider from "../CardSlider/CardSlider"
import { TbPointFilled } from "react-icons/tb"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import styles from "./HomePage.module.css"

import imageService1 from "../../../public/assets/image-home-pruebas.jpeg"
import imageService2 from "../../../public/assets/image-home-protecciones.jpeg"
import imageService3 from "../../../public/assets/image-home-mantenimiento.jpg"
import imageService4 from "../../../public/assets/image-home-arriendo.jpeg"
import imageService5 from "../../../public/assets/image-home-ascesoria.jpeg"

import imageProjectHome1 from "../../../public/assets/project8-image22.jpg"
import imageProjectHome2 from "../../../public/assets/image-home-project-ministrales.jpeg"
import imageProjectHome3 from "../../../public/assets/image-home-project-nueva-pandeazucar.jpeg"

import imageClientLogo1 from "../../../public/assets/logo-enel-green-power.jpg"
import imageClientLogo2 from "../../../public/assets/logo-fluxsolar.png"
import imageClientLogo3 from "../../../public/assets/logo-ingeprover.jpeg"
import imageClientLogo4 from "../../../public/assets/logo-ionit.jpeg"
import imageClientLogo5 from "../../../public/assets/logo-mlrental.jpeg"




function HomePage () {

    const cardHomeServicesProps = [
        {
            id: 1,
            serviceFirstLine: "PRUEBAS ELÉCTRICAS",
            serviceSecondLine: " DE ACEPTACIÓN",
            serviceThirdLine: "A EQUIPOS ELÉCTRICOS",
            backgroundImage: imageService1,
            goTo: "/servicios/pruebas"
        },
        {
            id: 2,
            serviceFirstLine: "CONTROL Y PROTECCIÓNES",
            serviceSecondLine: "ELÉCTRICAS",
            backgroundImage: imageService2,
            goTo: "/servicios/control"
        },
        {
            id: 3,
            serviceFirstLine: "MANTENIMIENTO",
            serviceSecondLine: " Y PUESTA EN SERVICIO",
            serviceThirdLine: "DE EQUIPOS ELÉCTRICOS",
            backgroundImage: imageService3,
            goTo: "/servicios/mantenimiento"
        },
        {
            id: 4,
            serviceFirstLine: "ARRIENDO EQUIPOS",
            serviceSecondLine: "DE PRUEBAS ELÉCTRICAS",
            backgroundImage: imageService4,
            goTo: "/servicios/arriendo"
        },
        {
            id: 5,
            serviceFirstLine: "ASESORÍA TÉCNICA",
            backgroundImage: imageService5,
            goTo: "/servicios/asesoría"
        },
    ]

    const cardHomeProjectsProps = [
        {
            id: 6,
            project: "Codelco Andina - División El Teniente",
            description: "Proyecto Diamante - Ejecución de pruebas eléctricas a equipos de media tensión y protecciones eléctricas switchgear (SEU-002 - SEU-156).",
            backgroundImage: imageProjectHome1
        },
        {
            id: 7,
            project: "División Ministro Hales, Codelco - Ingelcop",
            description: "Ejecución de pruebas eléctricas a transformadores de poder 1 y 2, Subestación Eléctrica 220/23 kV.",
            backgroundImage: imageProjectHome2
        },
        {
            id: 8,
            project: "Subestación Nueva Pan de Azúcar, Isa Interchile - Siemens",
            description: "Pruebas SAT, equipo primario de alta tensión.",
            backgroundImage: imageProjectHome3
        }
    ]

    const cardHomeClientProps = [
        {
            id: 9,
            backgroundImage: imageClientLogo1
        },
        {
            id: 10,
            backgroundImage: imageClientLogo2
        },
        {
            id: 11,
            backgroundImage: imageClientLogo3
        },
        {
            id: 12,
            backgroundImage: imageClientLogo4
        },
        {
            id: 13,
            backgroundImage: imageClientLogo5
        }
    ]

    return (
        <section className={styles.home_page_main_container}>
            <section className={styles.home_top_container}>
                <section className={styles.home_top_container}>
                    <section className={styles.home_sociallogos_container}>
                        <SocialLogos />
                    </section>
                    <section className={styles.home_title_container}>
                        <h1 className={styles.home_title}>Servicios Eléctricos <b className={styles.title_stylist_words}>de Alto Estándar</b> <br></br>para la Industria</h1>
                        <section className={styles.home_buttons_title_container}>
                            <NavLink to="/contacto">
                                <button className={styles.blue_button}>Contáctanos</button>
                            </NavLink>
                            <NavLink to="/proyectos">
                                <button className={styles.transparent_button}>Ver Proyectos</button>
                            </NavLink>
                        </section>
                    </section>
                </section>
                <section className={styles.home_middle_container}>
                    <h2 className={styles.home_middle_title}>Bienvenidos a Hv Test</h2>
                    <p className={styles.home_middle_paragraph}>Somos una empresa de servicios eléctricos conformada por profesionales en el área de ingeniería, especialistas en baja, media y alta tensión, 
                        orientados a satisfacer las necesidades y exigencias de nuestros clientes, de acuerdo a las normas y estándares actuales que rigen al sistema 
                        eléctrico nacional e internacional.</p>
                    <NavLink to="/nosotros">
                        <button className={styles.white_button}>Saber más</button>
                    </NavLink>
                </section>
                <section className={styles.home_services_container}>
                    <h2 className={styles.home_services_title}>Nuestros Servicios</h2>
                    <section className={styles.home_services_arrows_cards_container}>
                        <section className={styles.home_services_cards_container}>

                            {
                                cardHomeServicesProps.map(card => (
                                    <CardHomeSercives
                                    key={card.id}
                                    serviceFirstLine={card.serviceFirstLine}
                                    serviceSecondLine={card.serviceSecondLine}
                                    serviceThirdLine={card.serviceThirdLine}
                                    backgroundImage={card.backgroundImage}
                                    goTo={card.goTo}
                                    />
                                ))
                            }


                        </section>
                    </section>
                </section>

                <section>
                    <h2 className={styles.home_projects_title}>Proyectos</h2>
                    <section className={styles.home_projects_grid_container}>
                        {
                            cardHomeProjectsProps.map(card => (
                                <CardHomeProjects 
                                    key={card.id}
                                    project={card.project}
                                    description={card.description}
                                    backgroundImage={card.backgroundImage}/>
                            ))
                        }
                    </section>
                </section>
                <section>
                    <h2 className={styles.home_clients_title}>Clientes</h2>
                    <section className={styles.home_clients_container}>
                        {
                            cardHomeClientProps.map(card => (
                                <CardHomeClients 
                                    key={card.id}
                                    backgroundImage={card.backgroundImage}/>
                            ))
                        }
                    </section>
                </section>
            </section>

        </section>
    )
}

export default HomePage