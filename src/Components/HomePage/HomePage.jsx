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
        }
    ]

    const backGroungTimedImages = [imageService1, imageService2, imageService3]

    const [currentBackgroundTimedImage, setCurrentBackgroundTimedImage] = useState(backGroungTimedImages[0])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBackgroundTimedImage((prevImage) => {
                const currentIndex = backGroungTimedImages.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % backGroungTimedImages.length;
                return backGroungTimedImages[nextIndex];
            });
        }, 3000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.home_page_main_container}>
            <section className={styles.home_top_container}>
                <section className={styles.home_top_container}
                        style={{backgroundImage: `url(${currentBackgroundTimedImage})`}}
                >
                    <section className={styles.home_title_container}>
                        <h1 className={styles.home_title}>¿ Necesitas arrendar equipos de pruebas eléctricas ?</h1>
                        <p className={styles.home_middle_paragraph}>Nuestra empresa cuenta con las mejores marcas internacionales en instrumentos para
                        la ejecución efectiva y segura de las pruebas eléctricas en terreno, atendiendo efectivamente las necesidades de todos nuestros
                        clientes.</p>
                        <NavLink to="/equipos-en-arriendo">
                            <button className={styles.white_button}>Ver Equipos</button>
                        </NavLink>
                    </section>
                </section>
                <section className={styles.home_middle_container}>
                    <h2 className={styles.home_middle_title}>NO PAGUES DÍAS EXTRA EN TUS ARRIENDOS</h2>
                    <p className={styles.home_middle_paragraph}>Con nosotros puedes entregar los instrumentos los días Sábado Y Domingo.</p>
                    <h3 className={styles.home_middle_title}>¿ Cómo arrendar nuestros equipos de pruebas eléctricas ?</h3>
                    <section className={styles.howtorent_container}>
                        <article className={styles.howtorent_step}>
                            <h4 className={styles.howtorent_step_title}>Titulo paso 1</h4>
                            <p className={styles.howtorent_paragraph}>Con nosotros puedes entregar los instrumentos los días Sábado Y Domingo.</p>
                        </article>
                        <article className={styles.howtorent_step}>
                            <h4 className={styles.howtorent_step_title}>Titulo paso 2</h4>
                            <p className={styles.howtorent_paragraph}>Con nosotros puedes entregar los instrumentos los días Sábado Y Domingo.</p>
                        </article>
                        <article className={styles.howtorent_step}>
                            <h4 className={styles.howtorent_step_title}>Titulo paso 3</h4>
                            <p className={styles.howtorent_paragraph}>Con nosotros puedes entregar los instrumentos los días Sábado Y Domingo.</p>
                        </article>
                        <article className={styles.howtorent_step}>
                            <h4 className={styles.howtorent_step_title}>Titulo paso 4</h4>
                            <p className={styles.howtorent_paragraph}>Con nosotros puedes entregar los instrumentos los días Sábado Y Domingo.</p>
                        </article>
                        <article className={styles.howtorent_step}>
                            <h4 className={styles.howtorent_step_title}>Titulo paso 5</h4>
                            <p className={styles.howtorent_paragraph}>Con nosotros puedes entregar los instrumentos los días Sábado Y Domingo.</p>
                        </article>
                    </section>
                </section>
                {/* <section className={styles.home_services_container}>
                    <h2 className={styles.home_services_title}>Nuestros Equipos</h2>
                    <section className={styles.home_services_arrows_cards_container}>
                        <section className={styles.home_services_cards_container}>

                            {
                                <CardHomeSercives/>
                            }


                        </section>
                    </section>
                </section> */}


            </section>

        </section>
    )
}

export default HomePage