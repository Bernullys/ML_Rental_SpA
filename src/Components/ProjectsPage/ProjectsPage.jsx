import React, { useState, useEffect } from "react"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import SocialLogos from "../SocialLogos/SocialLogos"
import CardProjects from "../CardProjects/CardProjects"
import styles from "./ProjectsPage.module.css"

import imageProjectPage1 from "../../../public/assets/project1-image1.jpeg"
import imageProjectPage2 from "../../../public/assets/project1-image2.jpeg"
import imageProjectPage3 from "../../../public/assets/project1-image3.jpeg"
import imageProjectPage4 from "../../../public/assets/project1-image4.jpeg"
import imageProjectPage5 from "../../../public/assets/project1-image5.jpeg"
import imageProjectPage6 from "../../../public/assets/project1-image6.jpeg"
import imageProjectPage7 from "../../../public/assets/project1-image7.jpeg"
import imageProjectPage8 from "../../../public/assets/project1-image8.jpeg"
import imageProjectPage9 from "../../../public/assets/image-home-project-ministrales.jpeg"
import imageProjectPage10 from "../../../public/assets/project2-image1.jpeg"
import imageProjectPage11 from "../../../public/assets/project2-image2.jpeg"
import imageProjectPage12 from "../../../public/assets/project3-image1.jpeg"
import imageProjectPage13 from "../../../public/assets/project3-image2.jpeg"
import imageProjectPage14 from "../../../public/assets/project3-image3.jpeg"
import imageProjectPage15 from "../../../public/assets/project4-image1.jpeg"
import imageProjectPage16 from "../../../public/assets/project4-image2.jpeg"
import imageProjectPage17 from "../../../public/assets/project4-image3.jpeg"
import imageProjectPage18 from "../../../public/assets/project4-image4.jpeg"
import imageProjectPage19 from "../../../public/assets/project4-image5.jpeg"
import imageProjectPage20 from "../../../public/assets/project4-image6.jpeg"
import imageProjectPage21 from "../../../public/assets/project4-image7.jpeg"
import imageProjectPage22 from "../../../public/assets/project4-image8.jpeg"
import imageProjectPage23 from "../../../public/assets/project5-image1.jpeg"
import imageProjectPage24 from "../../../public/assets/project5-image2.jpeg"
import imageProjectPage25 from "../../../public/assets/project6-image1.jpeg"
import imageProjectPage26 from "../../../public/assets/project6-image2.jpeg"
import imageProjectPage27 from "../../../public/assets/project6-image3.jpeg"
import imageProjectPage28 from "../../../public/assets/project6-image4.jpeg"
import imageProjectPage29 from "../../../public/assets/project6-image5.jpeg"
import imageProjectPage30 from "../../../public/assets/project6-image6.jpeg"
import imageProjectPage31 from "../../../public/assets/project6-image7.jpeg"
import imageProjectPage32 from "../../../public/assets/project6-image8.jpeg"
import imageProjectPage33 from "../../../public/assets/project7-image1.jpeg"
import imageProjectPage34 from "../../../public/assets/project7-image2.jpeg"
import imageProjectPage35 from "../../../public/assets/project7-image3.jpeg"
import imageProjectPage36 from "../../../public/assets/project7-image4.jpeg"
import imageProjectPage37 from "../../../public/assets/project7-image5.jpeg"
import imageProjectPage38 from "../../../public/assets/project8-image1.jpeg"
import imageProjectPage39 from "../../../public/assets/project8-image2.jpeg"



function ProjectsPage () {

    const [projectImageIndices, setProjectImageIndices] = useState({});

    useEffect(() => {
        const initialIndices = {};
        cardProjectsProps.forEach(project => {
            initialIndices[project.id] = 0;
        });
        setProjectImageIndices(initialIndices);
    }, []);

    function nextImage(projectId) {
        setProjectImageIndices(prevState => ({
            ...prevState,
            [projectId]: (prevState[projectId] + 1) % cardProjectsProps.find(p => p.id === projectId).backgroundImage.length
        }));
    }

    function prevImage(projectId) {
        setProjectImageIndices(prevState => ({
            ...prevState,
            [projectId]: (prevState[projectId] - 1 + cardProjectsProps.find(p => p.id === projectId).backgroundImage.length) % cardProjectsProps.find(p => p.id === projectId).backgroundImage.length
        }));
    }

    const cardProjectsProps = [
        {
            id: 10,
            project: "División El Teniente, Codelco Andina.",
            description: "Proyecto Diamante - Ejecución de pruebas eléctricas a equipos de media tensión y protecciones eléctricas switchgear (SEU-002 - SEU-156).",
            backgroundImage: [
                imageProjectPage38,
                imageProjectPage39
            ],
        },
        {
            id: 11,
            project: "División Chuquicamata, Codelco - Precisión.",
            description: "Ensayos eléctricos y mantención a equipos de media y baja tensión tales como: Interruptores, CCM's, CDC's, Switchtgears y transformadores.",
            backgroundImage: [
                imageProjectPage1,
                imageProjectPage2,
                imageProjectPage3,
                imageProjectPage4,
                imageProjectPage5,
                imageProjectPage6,
                imageProjectPage7,
                imageProjectPage8,
            ],
        },
        {
            id: 12,
            project: "División Ministro Hales, Codelco - Ingelcop.",
            description: "Ejecución de pruebas eléctricas a transformadores de poder 1 y 2, Subestación Eléctrica 220/23 kV.",
            backgroundImage: [
                imageProjectPage9,
                imageProjectPage10,
                imageProjectPage11,
            ],
        },
        {
            id: 13,
            project: "Subestación Nueva Pan de Azúcar, Isa Interchile - Siemens.",
            description: "Pruebas SAT, equipo primario de alta tensión.",
            backgroundImage: [
                imageProjectPage12,
                imageProjectPage13,
                imageProjectPage14,
    
            ],
        },
        {
            id: 14,
            project: "Pruebas eléctricas en centros de transformación del Parque Fotovoltaico Finis Terrae.",
            description: "Pruebas de mantenimiento preventivo a transformador y celdas de media tensión.",
            backgroundImage: [
                imageProjectPage15,
                imageProjectPage16,
                imageProjectPage17,
                imageProjectPage18,
                imageProjectPage19,
                imageProjectPage20,
                imageProjectPage21,
                imageProjectPage22,
    
            ],
        },
        {
            id: 15,
            project: "Subestación Llamara (66/23 kV), Faena Nueva Victoria, SQM.",
            description: "Ejecución de pruebas eléctricas en equipos primarios.",
            backgroundImage: [
                imageProjectPage23,
                imageProjectPage24,
    
            ],
        },
        {
            id: 16,
            project: "Subestación Puchuncaví (110/13.8 kV), Aguas Pacífico.",
            description: "Ejecución de pruebas eléctricas en equipos primarios.",
            backgroundImage: [
                imageProjectPage25,
                imageProjectPage26,
                imageProjectPage27,
                imageProjectPage28,
                imageProjectPage29,
                imageProjectPage30,
                imageProjectPage31,
                imageProjectPage32,
    
            ],
        },
        {
            id: 17,
            project: "Subestación Gis Tres Quebradas (220 kV).",
            description: "Pruebas eléctricas a equipos primarios tipo Gis y tipo intemperie",
            backgroundImage: [
                imageProjectPage33,
                imageProjectPage34,
                imageProjectPage35,
                imageProjectPage36,
                imageProjectPage37,
    
            ],
        }
    ]


    return (
        <section className={styles.projects_page_main_container}>
            <section className={styles.projects_page_sociallogos_container}>
                <SocialLogos />
            </section>
            <section className={styles.projects_texts_container}>
                <h1 className={styles.projects_title}>Proyectos</h1>
                <p className={styles.projects_paragraph}>Nos complace compartir una selección de los proyectos que hemos ejecutado con éxito, 
                                                        destacando nuestro compromiso con la excelencia en cada etapa. 
                                                        Estos proyectos representan nuestra experiencia y dedicación en brindar soluciones 
                                                        efectivas y de calidad en diversas áreas.</p>
            </section>
            <section className={styles.projects_container}>
                {
                    cardProjectsProps.map((project, index) => (
                        <section key={index} className={styles.projects_cards_container}>
                            <CardProjects 
                                project={project.project}
                                description={project.description}
                                backgroundImage={project.backgroundImage[projectImageIndices[project.id]]}
                            />
                            <IoIosArrowRoundBack className={styles.card_arrow_left} onClick={() => prevImage(project.id)}/>
                            <IoIosArrowRoundForward className={styles.card_arrow_right} onClick={() => nextImage(project.id)}/>
                        </section>
                    ))
                }
            </section>
        </section>
    )
}

export default ProjectsPage