import React,{ useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Accordion from "../Accordion/Accordion"
import styles from "./HomePage.module.css"
import { Carousel1 } from "../Carousel1/Carousel1"

import test_gear_1 from "../../../public/assets/mlrental_3.jpg"
import test_gear_2 from "../../../public/assets/mlrental_5.jpg"
import test_gear_3 from "../../../public/assets/mlrental_8.jpg"
import test_gear_4 from "../../../public/assets/mlrental_9.jpg"
import test_gear_5 from "../../../public/assets/mlrental_11.jpg"
import test_gear_6 from "../../../public/assets/mlrental_15.jpg"
import test_gear_7 from "../../../public/assets/mlrental_16.jpg"
import test_gear_8 from "../../../public/assets/mlrental_17.jpg"
import test_gear_9 from "../../../public/assets/mlrental_19.jpg"


function HomePage () {

    const backGroungTimedImages = [test_gear_1, test_gear_2, test_gear_3, test_gear_4, test_gear_5, test_gear_6, test_gear_7, test_gear_8, test_gear_9]

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
            <section className={styles.home_image_container} style={{backgroundImage: `url(${currentBackgroundTimedImage})`}}>
            </section>
            <section className={styles.home_top_container}>
                <section className={styles.home_top_banner}>
                    <section className={styles.home_title_container}>
                        <h1 className={styles.home_title}>¿Necesitas arrendar equipos de pruebas eléctricas?</h1>
                        <p className={styles.home_top_paragraph}>Nuestra empresa cuenta con las mejores marcas internacionales en instrumentos para
                        la ejecución segura y efectiva de las pruebas eléctricas en terreno, atendiendo con alta capacidad de servicio las necesidades de todos nuestros
                        clientes.</p>
                        <NavLink to="/equipos-en-arriendo">
                            <button className={styles.white_button}>Equipos</button>
                        </NavLink>
                    </section>
                    <section className={styles.home_middle_container}>
                        <h2 className={styles.home_middle_title}>"No pagues días extra en tus arriendos"</h2>
                        <p className={styles.home_middle_paragraph}>Con nosotros puedes entregar los instrumentos los días sábado y domingo.</p>
                        <NavLink to="/contacto">
                            <button className={styles.white_button}>Cotizar</button>
                        </NavLink>
                    </section>
                    <section className={styles.howtorent_container}>
                        <h3 className={styles.howtorent_title}>¿Cómo arrendar nuestros equipos de pruebas eléctricas?</h3>
                        <Accordion/>
                    </section>
                </section>
            </section>
            <Carousel1/>         
        </section>
    )
}

export default HomePage