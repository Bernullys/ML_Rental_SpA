import { TbEyeStar } from "react-icons/tb";
import { LiaBullseyeSolid } from "react-icons/lia"
import Footer from "../Footer/Footer"

import CardUsValues from "../CardUsValues/CardUsValues"
import styles from "./UsPage.module.css"

import mlrentalLogo from "../../../public/assets/logo-mlrental-footer.png"

const valuesInfo = [
    {
        id: 1,
        valueIcon: <LiaBullseyeSolid />,
        value: "Misión",
        description: "Somos una empresa especializada en el arriendo de instrumentos dirigidos al área eléctrica, contamos con las mejores marcas disponibles en el mercado, certificaciones al día y con excelentes condiciones de funcionamiento, para así cumplir con todos los requerimientos de nuestros clientes.",
    },
    {
        id: 2,
        valueIcon: <TbEyeStar />,
        value: "Visión",
        description: "Ser la empresa líder en el arriendo de instrumentos para pruebas eléctricas, con el objetivo constante de ofrecer la mayor y mejor gama de equipos eléctricos adecuados para la labor especifica, para así posicionarnos como el proveedor eficiente, confiable y flexible, cumpliendo así con las necesidades y exigencias de nuestros clientes.",
    }
]

function Us () {
    return (
        <section className={styles.us_top_section_main_container} >
            <section className={styles.us_top_section_image_container}>
                <img className={styles.mlrentalLogo} src={mlrentalLogo} alt="ML Rental Logo" />
                <section className={styles.us_lower_section_main_container}>
                    <section className={styles.us_lower_section_container}>
                        <p className={styles.us_paragraph}>Nuestra prioridad es generar lazos de confianza, colaboración e innovación con nuestros
                        clientes, para cumplir todas sus requerimientos y expectativas.</p>
                    </section>
                </section>
            </section>
            <section className={styles.us_lower_section_characteristics_main_container}>
                <section className={styles.card_values_container}>
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
            <Footer />
        </section>
    )
}

export default Us;