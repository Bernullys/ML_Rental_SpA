import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import Accordion from "../Accordion/Accordion"
import styles from "./HomePage.module.css"
import Footer from "../Footer/Footer"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoSlider from "../../../public/assets/logo-mlrental-footer.png"
import backg1 from "../../../public/assets/base6.png"
import extrapay from "../../../public/assets/pago.jpg"




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
    prevArrow: <SamplePrevArrow />,
    };

    const settingsSecond = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
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
                            <h3 className={styles.card_body_h3}>Arriendo Fácil y Rápido</h3>
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
                                <h1 className={styles.home_title}>No pagues días extra en tus arriendos</h1>
                                <p className={styles.home_top_paragraph}>Con nosotros puedes entregar los instrumentos los días sábado y domingo.</p>
                                <NavLink to="/contacto">
                                    <button className={styles.white_button_buble}>Cotizar</button>
                                </NavLink>
                            </section>
                        </section>
                        <section className={styles.carousel_main_container}>
                            <section className={styles.carousel_title_container}>
                                <h2  className={styles.carousel_title}>Nuestros Equipos</h2>
                                <p className={styles.carousel_paragraph}>Explora nuestros equipos de medición eléctrica y encuentra la opción ideal para tus necesidades. Contamos con una selección de instrumentos precisos y confiables, disponibles para arriendo de forma rápida y sencilla.</p>
                                <NavLink to="/equipos-en-arriendo">
                                    <button className={styles.white_button_buble}>Equipos</button>
                                </NavLink>
                            </section>
                            <Slider {...settingsSecond}>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background1}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Medidor de Resistencia de Devanados</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background2}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Microohmímetro 200 A</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background3}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Pinza medición Puesta a Tierra</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background4}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Medidor de Calidad de Baterías</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background5}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Medidor de Relación de Transformación</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background6}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Puntas para Pruebas VLF</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background7}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Máquina Confección de Mufas</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background8}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Medidor de Aislamiento 10 kV</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background9}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Telurómetro</h3>
                                    </div>
                                </div>
                                <div className={styles.second_card}>
                                    <div className={styles.second_slider_background10}></div>
                                    <div className={styles.second_card_body}>
                                        <h3 className={styles.second_card_body_h3}>Microohmímetro 10 A</h3>
                                    </div>
                                </div>
                            </Slider>       
                        </section>
                        <section className={styles.backg2_container}>
                            <section className={styles.howtorent_container}>
                                <section className={styles.back2_title_container}>
                                    <h3 className={styles.howtorent_title}>¿Cómo arrendar nuestros equipos de pruebas eléctricos?</h3>
                                    <p className={styles.home_middle_paragraph}>Arrendar nuestros equipos es un proceso sencillo y rápido. Sigue los pasos a
                                        continuación y obtén el equipo que necesitas de manera eficiente y segura.
                                    </p>
                                </section>
                                <section className={styles.back2_steps_container}>
                                    <Accordion />
                                </section>
                            </section>
                            <Footer />
                        </section>
                    </section>      
                </section>
            </div>
        
    )
}

export default HomePage