import CardServicesDetails from "../CardServicesDetails/CardServicesDetails"
import ImageSlider from "../ImageSlider/ImageSlider"
import styles from "./ServiceFirstPage.module.css"

import imageFirstService1 from "../../../public/assets/tx-service-image.jpeg"
import imageFirstService2 from "../../../public/assets/tx2-service-image.jpeg"
import imageFirstService3 from "../../../public/assets/tx3-service-image.jpeg"
import imageFirstService4 from "../../../public/assets/int-service-image.jpeg"
import imageFirstService5 from "../../../public/assets/int2-service-image.jpeg"
import imageFirstService6 from "../../../public/assets/mufa1-service-image.jpeg"
import imageFirstService7 from "../../../public/assets/mufa2-service-image.jpeg"
import imageFirstService8 from "../../../public/assets/mufa3-service-image.jpeg"
import imageFirstService9 from "../../../public/assets/mufa4-service-image.jpeg"
import imageFirstService10 from "../../../public/assets/mufa5-service-image.jpeg"
import imageFirstService11 from "../../../public/assets/mufa6-service-image.jpeg"
import imageFirstService12 from "../../../public/assets/cel1-service-image.jpeg"
import imageFirstService13 from "../../../public/assets/cel2-service-image.jpeg"
import imageFirstService14 from "../../../public/assets/cel3-service-image.jpeg"
import imageFirstService15 from "../../../public/assets/cel4-service-image.jpeg"
import imageFirstService16 from "../../../public/assets/cel5-service-image.jpeg"
import imageFirstService17 from "../../../public/assets/cel6-service-image.jpeg"
import imageFirstService18 from "../../../public/assets/cel7-service-image.jpeg"

function ServiceFirstPage () {

    const txPowerServiceImages = [
        imageFirstService1,
        imageFirstService2,
        imageFirstService3,
    ]

    const txPowerServiceDescription = [
        {
            subtitle: "Transformadores de Potencia",
            items: [
                "Resistencia de Aislamiento.",
                "Relación de transformación y polaridad.",
                "Resistencia de Devanados.",
                "Corriente de excitación.",
                "Factor de Potencia del Aislamiento.",
                "SFRA (Análisis de respuesta en frecuencia).",
                "Verificación de actuación de protecciones propias.",
            ]
        }
    ]

    const powerIntServiceImages = [
        imageFirstService4,
        imageFirstService5,
    ]
    const powerIntDescription = [
        {
            subtitle: "Interruptor de Potencia",
            items: [
                "Resistencia de Aislamiento.",
                "Resistencia de Dinámica de contacto.",
                "Resistencia de Contacto.",
                "Tiempo de apertura - cierre, simultaniedad de contactos.",
                "Factor de Potencia del Aislamiento.",
                "Medición de Misceláneos (Contactores, resistencia de calefacción, motores de accionamiento).",
            ]
        }
    ]

    const cableHTImages = [
        imageFirstService6,
        imageFirstService7,
        imageFirstService8,
        imageFirstService9,
        imageFirstService10,
        imageFirstService11,
    ]
    const cableHTDescription = [
        {
            subtitle: "Cable de Media y Alta Tensión",
            items: [
                "Resistencia de Aislamiento.",
                "VLF (Muy baja frecuencia).",
                "Descarga Parciales.",
                "Factor de Potencia de Aislamiento.",
            ]
        }
    ]

    const celImages = [
        imageFirstService12,
        imageFirstService13,
        imageFirstService14,
        imageFirstService15,
        imageFirstService16,
        imageFirstService17,
        imageFirstService18,
    ]
    const celDescription = [
        {
            subtitle: "Celdas de Media Tensión",
            items: [
                "Resistencia de Aislamiento.",
                "Resistencia de Contacto.",
                "Hi-Pot.",
            ]
        }
    ]

    return (
        <section className={styles.serviceone_main_container}>
            <h1 className={styles.serviceone_title}>
                Pruebas Eléctricas de Aceptación a Equipos Eléctricos
            </h1>
            <p className={styles.serviceone_paragraph}>
                Nuestra empresa, consciente de la importancia de la infraestructura eléctrica, 
                ofrece una amplia gama de servicios especializados en pruebas eléctricas. 
                Nos especializamos en la evaluación de diversos equipos instalados en sistemas 
                eléctricos, destacando:
            </p>
            <section className={styles.serviceone_article_container}>
                {
                    txPowerServiceDescription.map( (tx, index )=> (
                        <CardServicesDetails
                            key={index} 
                            subtitle={tx.subtitle}
                            charactericticsList={tx.items}/>
                    ))
                }
                <ImageSlider 
                    imagesList={txPowerServiceImages}/>
            </section>

            <section className={styles.serviceone_article_container}>
                {
                    powerIntDescription.map( (pow, index )=> (
                        <CardServicesDetails
                        key={index} 
                        subtitle={pow.subtitle}
                        charactericticsList={pow.items}/>
                        ))
                    }
                <ImageSlider 
                    imagesList={powerIntServiceImages}/>
            </section>

            <section className={styles.serviceone_article_container}>
                {
                    cableHTDescription.map( (cb, index )=> (
                        <CardServicesDetails
                            key={index} 
                            subtitle={cb.subtitle}
                            charactericticsList={cb.items}/>
                    ))
                }
                <ImageSlider 
                    imagesList={cableHTImages}/>
            </section>

            <section className={styles.serviceone_article_container}>
                {
                    celDescription.map( (pow, index )=> (
                        <CardServicesDetails
                        key={index} 
                        subtitle={pow.subtitle}
                        charactericticsList={pow.items}/>
                        ))
                    }
                <ImageSlider 
                    imagesList={celImages}/>
            </section>


        </section>
    )
}

export default ServiceFirstPage