import CardServicesDetails from "../CardServicesDetails/CardServicesDetails"
import ImageSlider from "../ImageSlider/ImageSlider"
import styles from "../ServiceFirstPage/ServiceFirstPage.module.css"

import imageThirdService1 from "../../../public/assets/man1-service-image.jpeg"
import imageThirdService2 from "../../../public/assets/man2-service-image.jpeg"
import imageThirdService3 from "../../../public/assets/man3-service-image.jpeg"
import imageThirdService4 from "../../../public/assets/man4-service-image.jpeg"
import imageThirdService6 from "../../../public/assets/man6-service-image.jpeg"
import imageThirdService7 from "../../../public/assets/man7-service-image.jpeg"
import imageThirdService8 from "../../../public/assets/man8-service-image.jpeg"


function ServiceThirdPage () {

    const mantainServiceImages = [
        imageThirdService1,
        imageThirdService2,
        imageThirdService3,
        imageThirdService4,
        imageThirdService6,
        imageThirdService7,
        imageThirdService8,
    ]

    const mantainServiceDescription = [
        {
            subtitle: "Entre los equipos que intervenimos tenemos:",
            items: [
                "Transformadores de potencia.",
                "Interruptores de baja, media y alta tensión.",
                "Desconectadores.",
                "Trampas de onda.",
                "Resistencias de puesta a tierra.",
                "Transformadores de potencial.",
                "Transformadores de corriente.",
                "Banco de Condensadores.",
                "Cables o conductores eléctricos.",
                "Descargadores de sobretensiones.",
                "Protecciones y Controles eléctricos.",
                "Celdas de media y baja tensión.",
                "Variadores de Frecuencia.",
            ]
        }
    ]

    return (
        <section className={styles.serviceone_main_container}>
            <h1 className={styles.serviceone_title}>
                Mantenimiento y Puesta en Servicio de Equipos Eléctricos
            </h1>
            <p className={styles.serviceone_paragraph}>
                Con el fin de garantizar la integridad de tus sistemas eléctricos, parte importante de nuestro servicio es la mantención y puesta en
                marcha de los equipos eléctricos instalados en cada subsistema eléctrico (Generación, transmision y distribución eléctrica), abarcando
                la mayoría del equipamento eléctrico instalado en cualquiera de estos subsistemas.
            </p>
            <section className={styles.serviceone_article_container}>
                {
                    mantainServiceDescription.map( (ing, index )=> (
                        <CardServicesDetails
                            key={index} 
                            subtitle={ing.subtitle}
                            charactericticsList={ing.items}/>
                    ))
                }
                <ImageSlider 
                    imagesList={mantainServiceImages}/>
            </section>

        </section>
    )
}

export default ServiceThirdPage