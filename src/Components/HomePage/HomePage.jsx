import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import Accordion from "../Accordion/Accordion"
import styles from "./HomePage.module.css"
import { Carousel1 } from "../Carousel1/Carousel1"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoSlider from "../../../public/assets/logo-mlrental-footer.png"
import backg1 from "../../../public/assets/base6.png"
import extrapay from "../../../public/assets/pago.jpg"
import back2 from "../../../public/assets/base5.png"




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 10 }}
        onClick={onClick}
      />
    );
  }


function HomePage () {

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    };

    return (
            <div className={styles.home_page_main_container}>
                <Slider {...settings}>
                    <div>
                        <div className={styles.slider_background1}></div>
                        <div className={styles.card_body}>
                            <div>
                                <img className={styles.mlrentalLogo} src={logoSlider} alt="MLRental-logo" />
                            </div>
                            <p className={styles.card_mlrental}>ML Rental</p>
                            <h3 className={styles.card_body_h3}>Equipos de Medición de Alta Precisión</h3>
                            <p className={styles.card_body_par}>Contamos con una amplia gama de equipos para mediciones eléctricas, garantizando precisión y confiabilidad en cada ensayo.</p>
                            <NavLink to="/contacto">
                                <button className={styles.white_button_slider}>Cotizar</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.slider_background2}></div>
                        <div className={styles.card_body}>
                            <div>
                                <img className={styles.mlrentalLogo} src={logoSlider} alt="MLRental-logo" />
                            </div>
                            <p className={styles.card_mlrental}>ML Rental</p>
                            <h3 className={styles.card_body_h3}>Arrendamiento Fácil y Rápido</h3>
                            <p className={styles.card_body_par}>Simplificamos el proceso de arriendo
                            para que obtengas el equipo que necesitas sin demoras ni complicaciones.</p>
                            <NavLink to="/contacto">
                                <button className={styles.white_button_slider}>Cotizar</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.slider_background3}></div>
                        <div className={styles.card_body}>
                            <div>
                                <img className={styles.mlrentalLogo} src={logoSlider} alt="MLRental-logo" />
                            </div>
                            <p className={styles.card_mlrental}>ML Rental</p>
                            <h3 className={styles.card_body_h3}>Soporte Técnico Especializado</h3>
                            <p className={styles.card_body_par}>Nuestro equipo de expertos está disponible
                            para asesorarte en la selección y uso de los equipos de medición.</p>
                            <NavLink to="/contacto">
                                <button className={styles.white_button_slider}>Cotizar</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.slider_background4}></div>
                        <div className={styles.card_body}>
                            <div>
                                <img className={styles.mlrentalLogo} src={logoSlider} alt="MLRental-logo" />
                            </div>
                            <p className={styles.card_mlrental}>ML Rental</p>
                            <h3 className={styles.card_body_h3}>Equipos Certificados y Calibrados</h3>
                            <p className={styles.card_body_par}>Todos nuestros instrumentos cumplen con
                            normativas vigentes y son entregados con su respectiva certificación de calibración.</p>
                            <NavLink to="/contacto">
                                <button className={styles.white_button_slider}>Cotizar</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.slider_background5}></div>
                        <div className={styles.card_body}>
                            <div>
                                <img className={styles.mlrentalLogo} src={logoSlider} alt="MLRental-logo" />
                            </div>
                            <p className={styles.card_mlrental}>ML Rental</p>
                            <h3 className={styles.card_body_h3}>Optimiza tu Proyecto con la Mejor Tecnología</h3>
                            <p className={styles.card_body_par}>Disponemos de tecnología avanzada para que realices
                            mediciones seguras y eficientes en cualquier tipo de instalación eléctrica.</p>
                            <NavLink to="/contacto">
                                <button className={styles.white_button_slider}>Cotizar</button>
                            </NavLink>
                        </div>
                    </div>
                </Slider>
                <section className={styles.home_top_container}>
                    <section className={styles.home_top_banner}>
                        <img src={backg1} alt="background1" className={styles.backg1} />
                        <section className={styles.home_title_container}>
                            <section className={styles.insideBuble}>
                                <h1 className={styles.home_title}>¿Necesitas arrendar equipos de pruebas eléctricas?</h1>
                                <p className={styles.home_top_paragraph}>Nuestra empresa cuenta con las mejores marcas internacionales en instrumentos para
                                la ejecución segura y efectiva de las pruebas eléctricas en terreno, atendiendo con alta capacidad de servicio las necesidades de todos nuestros
                                clientes.</p>
                                <NavLink to="/equipos-en-arriendo" className={styles.white_button_container}>
                                    <button className={styles.white_button_buble}>Equipos</button>
                                </NavLink>
                            </section>
                            <section className={styles.home_middle_container}>
                                <img className={styles.extrapayImage} src={extrapay} alt="extra-pay" />
                                <h2 className={styles.home_middle_title}>No pagues días extra en tus arriendos</h2>
                                <p className={styles.home_middle_paragraph}>Con nosotros puedes entregar los instrumentos los días sábado y domingo.</p>
                                <NavLink to="/contacto">
                                    <button className={styles.white_button_buble}>Cotizar</button>
                                </NavLink>
                            </section>
                        </section>
                        <section className={styles.carousel_main_container}>
                            <section className={styles.carousel_title_container}>
                                <h2  className={styles.carousel_title}>Nuestros Equipos</h2>
                                <p className={styles.carousel_paragraph}>Explora nuestros equipos de medición eléctrica y encuentra la opción ideal para tus necesidades. Contamos con una selección de instrumentos precisos y confiables, disponibles para arriendo de forma rápida y sencilla.</p>
                            </section>
                            <Carousel1/>         
                        </section>
                        <img src={back2} alt="background2"  className={styles.backg2}/>
                        <section className={styles.howtorent_container}>
                            <section className={styles.back2_title_container}>
                                <h3 className={styles.howtorent_title}>¿Cómo arrendar nuestros equipos de pruebas eléctricas?</h3>
                                <p className={styles.home_middle_paragraph}>Arrendar nuestros equipos es un proceso sencillo y rápido. Sigue los pasos a
                                    continuación y obtén el equipo que necesitas de manera eficiente y segura.
                                </p>
                            </section>
                            <section className={styles.back2_steps_container}>
                                <Accordion />
                            </section>
                        </section>
                    </section>      
                </section>
            </div>
        
    )
}

export default HomePage