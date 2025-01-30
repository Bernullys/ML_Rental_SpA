import CardServicesDetails from "../CardServicesDetails/CardServicesDetails"
import ImageSlider from "../ImageSlider/ImageSlider"
import styles from "../ServiceFirstPage/ServiceFirstPage.module.css"

import imageSecondService1 from "../../../public/assets/control3-service-image.jpeg"
import imageSecondService2 from "../../../public/assets/control1-service-image.jpeg"
import imageSecondService3 from "../../../public/assets/control2-service-image.jpeg"


function ServiceSecondPage () {

    const ingDevelopServiceImages = [
        imageSecondService1,
    ]

    const ingDevelopServiceDescription = [
        {
            subtitle: "Desarrollo de Ingeniería, control y protección:",
            items: [
                "Ingeniería Básica:",
                "Desarrollo de Diagramas Lógicos.",
                "Arquitectura de Comunicaciones y Protecciones Eléctricas.",
                "Ingeniería de Detalle:",
                "Revisión de detalles técnicos y diagramas elementales de corriente alterna y corriente continua.",
            ]
        }
    ]

    const controlServiceImages = [
        imageSecondService2,
        imageSecondService3,
    ]
    const controlDescription = [
        {
            subtitle: "Sistema de Protección, Control y SCADA:",
            items: [
                "Auditoría a los sistemas de control, protección y medida.",
                "Inspección técnica de obra a los sistemas secundarios de subestaciones.",
                "Actualización de los sistemas de protección y control.",
            ]
        }
    ]

    return (
        <section className={styles.serviceone_main_container}>
            <h1 className={styles.serviceone_title}>
                Control y Protecciones Eléctricas
            </h1>
            <p className={styles.serviceone_paragraph}>
                Disponemos de personal y equipamiento para proveer una amplia gama de soluciones que incluyen: Inspecciones
                técnicas de obra al sistema secundario de subestaciones, así como auditorías a los sistemas de control, protección
                y medida; asegurando la eficiencia y confiabilidad de los sistemas eléctricos.
                Adicionalmente, ofrecemos servicios de ejecución, inspección de pruebas en fábrica y en terreno (FAT - SAT),
                llevando a cabo pruebas funcionales exhaustivas, verificando todas las facetas del sistema, desde el cableado y
                los armarios hasta los servicios auxiliares, asegurando que los equipos cumplan con todos los estándares y
                especificaciones antes de su implementación.
            </p>
            <section className={styles.serviceone_article_container}>
                {
                    ingDevelopServiceDescription.map( (ing, index )=> (
                        <CardServicesDetails
                            key={index} 
                            subtitle={ing.subtitle}
                            charactericticsList={ing.items}/>
                    ))
                }
                <section>
                    <img src={imageSecondService1} alt="Scada-control-Image" className={styles.slide_active}/>
                </section>
            </section>

            <section className={styles.serviceone_article_container}>
                {
                    controlDescription.map( (pow, index )=> (
                        <CardServicesDetails
                        key={index} 
                        subtitle={pow.subtitle}
                        charactericticsList={pow.items}/>
                        ))
                }
                <ImageSlider 
                    imagesList={controlServiceImages}/>
            </section>

        </section>
    )
}

export default ServiceSecondPage