import { useState } from "react"
import Footer from "../Footer/Footer"
import styles from "./ContactPage.module.css"

function ContactPage () {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        region: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState("")

    const handleInputsChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function sendEmail(e) {
        e.preventDefault();
        setStatus("Enviando...")
        
        try {
            const response = await fetch("https://www.mlrental.cl/api/contacto", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                setStatus("Mensaje enviado correctamente")
                setFormData({
                    name: "",
                    lastName: "",
                    region: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                window.scrollTo({ top: 0, behavior: 'smooth' });
                alert("Mensaje enviado correctamente")
            } else {
                setStatus("Error al enviar el mensaje")
                throw new Error("Error al enviar el mensaje")
            }
        } catch (error) {
            console.error("Error:", error)
            setStatus("Error al enviar el mensaje")
        }
    }


    return (
        <section className={styles.contact_main_section_container}>
            <h1 className={styles.contact_title}>Contáctate con nosotros</h1>
            <p className={styles.contact_paragraph}>Dependiendo de las necesidades y solicitudes de nuestros clientes, contamos con el servicio
            de suministrar cualquier equipo, instrumento, herramienta y/o accesorios eléctrico que el cliente requiera, envíanos tu requerimiento
            y lo encontraremos.</p>
            <form onSubmit={sendEmail} className={styles.contact_form}>
                <section className={styles.contact_form_inner_container}>
                    <section className={styles.contact_form_sections}>
                        <label for="name">Nombre(s) *</label>
                        <input type="text" name="name" id="name" placeholder="Nombre(s)" onChange={handleInputsChange} required/>
                        <label for="lastName">Apellido(s) *</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Apellido(s)" onChange={handleInputsChange} required/>
                    </section>
                    <br />
                    <section className={styles.contact_form_sections}>
                        <label for="region">Región *</label>
                        <input type="text" name="region" id="region" placeholder="Región" onChange={handleInputsChange} required/>
                        <label for="email">Correo *</label>
                        <input type="email" name="email" id="email" placeholder="Correo eléctronico" onChange={handleInputsChange} required/>
                    </section>
                    <br />
                </section>
                <section className={styles.contact_form_inner_container}>
                    <section className={styles.contact_form_sections}>
                        <label for="phone">Teléfono *</label>
                        <input type="tel" name="phone" id="phone" placeholder="Número telefonico" onChange={handleInputsChange} required/>
                    </section>
                    <br />
                    <section className={styles.contact_form_sections}>
                        <label for="message">Ingrese su mensaje *</label>
                        <textarea type="text" name="message" id="message"  onChange={handleInputsChange} />
                        <button type="submit" value="Submit" className={styles.button_contact}>Enviar</button>
                    </section>
                    <br />
                </section>
            </form>
            <Footer />
        </section>
    )
}

export default ContactPage