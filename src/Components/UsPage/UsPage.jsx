import { GrTechnology } from "react-icons/gr"
import { FaHandsHelping } from "react-icons/fa"
import { BsAwardFill } from "react-icons/bs"
import { IoIosPeople } from "react-icons/io";

import SocialLogos from "../SocialLogos/SocialLogos"
import PersonalCards from "../PersonalCards/PersonalCards"
import CardUsValues from "../CardUsValues/CardUsValues"
import styles from "./UsPage.module.css"

import joseProfileImage from "../../../public/assets/Jose-Manuel-Image.jpeg"
import leoProfileImage from "../../../public/assets/Leonardo-Image.jpeg"

const workersInfo = [
    {
        name: "Leonardo Alejandro Nuñez",
        position: "Ingeniero Eléctricista",
        profileImage: leoProfileImage,
        linkTolinkedin: "https://www.linkedin.com/in/leonardo-alejandro-nu%C3%B1ez-araujo-0a465979/"
    }
]

const valuesInfo = [
    {
        id: 1,
        valueIcon: <IoIosPeople />,
        value: "Clientes",
        description: "Generar valor agregado a través de la satisfacción de nuestros clientes en el desarrollo de sus proyectos.",
    },
    {
        id: 2,
        valueIcon: <BsAwardFill />,
        value: "Calidad",
        description: "Servicios bajo estándares y normativas nacionales e internacionales.",
    },
    {
        id: 3,
        valueIcon: <FaHandsHelping className={styles.value_icon}/>,
        value: "Confianza",
        description: "Comprometidos con cumplir todos los objetivos de nuestros clientes.",
    },

]

function Us () {
    return (
        <section className={styles.us_top_section_main_container} >
            <section className={styles.us_top_section_image_container}>
                <h1 className={styles.us_top_title}>Personalidad <b className={styles.styling_word}>Hv Test</b></h1>
                <SocialLogos />
            </section>
            <section className={styles.us_middle_section_main_container}>
                <section className={styles.us_middle_section_description_container}>
                    <h2 className={styles.us_subtitle}>Conoce nuestro equipo</h2>
                    <p className={styles.us_paragraph}>Estamos conformados por profesionales de alto grado de experiencia en el mercado eléctrico del país, presentes en faenas de importantes empresas del rubro eléctrico, especialistas en el diagnóstico, mantención, resolución de problemas y soluciones integrales en el ámbito eléctrico, industrial y de manufactura. Nuestro servicio profesional y técnico está comprometido en la entrega de un óptimo servicio con altos estándares de calidad y seguridad.</p>
                </section>
                <section className={styles.us_middle_section_cards_container}>
                    {
                        workersInfo.map(worker => (
                            <PersonalCards
                            key={worker.name}
                            name={worker.name}
                            position={worker.position}
                            profileImage={worker.profileImage}
                            linkTolinkedin={worker.linkTolinkedin}
                            />
                        ))
                    }
                </section>
            </section>
            <section className={styles.us_lower_section_main_container}>
                <section className={styles.us_lower_section_container}>
                    <h2 className={styles.us_subtitle}>¿Por que trabajar con nosotros?</h2>
                    <p className={styles.us_paragraph}>Nuestra empresa se distingue por su compromiso con los objetivos de nuestros clientes. Nos esforzamos por satisfacer sus necesidades al brindar servicios con un equipo especializado y altamente calificado. Esto nos permite garantizar la eficacia y la eficiencia en cada uno de los proyectos en los que nos involucramos.</p>
                </section>
                <section className={styles.us_lower_section_characteristics_main_container}>
                    {
                        valuesInfo.map(values => (
                            <CardUsValues 
                                key={values.id}
                                valueIcon={values.valueIcon}
                                value={values.value}
                                description={values.description}/>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default Us;