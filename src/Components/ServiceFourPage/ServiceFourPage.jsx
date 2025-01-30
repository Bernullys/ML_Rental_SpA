import CardServicesDetails from "../CardServicesDetails/CardServicesDetails"
import ImageSlider from "../ImageSlider/ImageSlider"
import styles from "../ServiceFirstPage/ServiceFirstPage.module.css"

import imageFourService1 from "../../../public/assets/asis1-service-image.jpeg"
import imageFourService2 from "../../../public/assets/asis2-service-image.jpeg"
import imageFourService3 from "../../../public/assets/asis3-service-image.jpeg"


function ServiceFourPage () {

    const supportServiceImages = [
        imageFourService1,
        imageFourService2,
        imageFourService3,
    ]

    const supportServiceDescription = [
        {
            subtitle: "Entre las asesorías contamos con:",
            items: [
                "Inspección técnica de obra a sistemas eléctricos.",
                "Auditoría a equipamiento de fuerza, control y medida.",
                "Inspección de pruebas en fabrica (FAT).",
                "Ejecución de pruebas en terreno (SAT).",
            ]
        }
    ]

    return (
        <section className={styles.serviceone_main_container}>
            <h1 className={styles.serviceone_title}>
                Asesoría Técnica
            </h1>
            <p className={styles.serviceone_paragraph}>
                Contamos con personal de ingeniería especializado para brindar servicios de asesoría profesional, ofreciendo
                inspección técnica especializada, proporcionando documentos, procedimientos, y/o protocolos necesarios a nuestros
                clientes para garantizar la operación y mantenimiento de sus equipos eléctricos, apegados siempre a las normas
                vigentes que rigen a cada equipamiento (IEEEStd–ANSI/NETA–IEC, entre otras).
            </p>
            <section className={styles.serviceone_article_container}>
                {
                    supportServiceDescription.map( (ing, index )=> (
                        <CardServicesDetails
                            key={index} 
                            subtitle={ing.subtitle}
                            charactericticsList={ing.items}/>
                    ))
                }
                <ImageSlider 
                    imagesList={supportServiceImages}/>
            </section>

        </section>
    )
}

export default ServiceFourPage