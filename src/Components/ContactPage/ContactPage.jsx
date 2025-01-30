import emailjs from "emailjs-com"
import styles from "./ContactPage.module.css"

function ContactPage () {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_gaq8idc", "template_x4pfd4h", e.target, "YcRp-roGG6YaNeCTe")
        console.log("Enviado")
        
        document.getElementById('name').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('region').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('toWho').selectedIndex = 0;
        document.getElementById('message').value = '';
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        alert("Mensaje enviado correctamente")
    }


    return (
        <section className={styles.contact_main_section_container}>
            <h1 className={styles.contact_title}>Déjanos tu mensaje y te responderemos a la brevedad</h1>
            <p className={styles.contact_paragraph}>Para cualquier duda o consulta sobre nuestros proyectos y equipos, complete el siguiente formulario y responderemos a la brevedad.</p>
            <form   
                onSubmit={sendEmail}
                method="post"
                encType="multipart/form-data"
                className={styles.contact_form}>
                <section className={styles.contact_form_sections}>
                    <label for="name">Nombre(s) *</label>
                    <input type="text" name="name" id="name" placeholder="Nombre" onSubmit="" required/>
                    <label for="lastName">Apellido(s) *</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Apellido" required/>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="region">Región *</label>
                    <input type="text" name="region" id="region" placeholder="Región" required/>
                    <label for="email">Correo *</label>
                    <input type="email" name="email" id="email" placeholder="Correo eléctronico" required/>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="phone">Telefono *</label>
                    <input type="tel" name="phone" id="phone" placeholder="Número telefonico" required/>
                    <label for="toWho">A quien va dirigido</label>
                    <select name="toWho" id="toWho">
                        <option value="general" selected>General</option>
                        <option value="pruebas">Pruebas eléctricas</option>
                        <option value="control">Control y protecciones</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="asesoría">Asecesoría técnica</option>
                        <option value="arriendo">Arriendo de equipos</option>
                    </select>
                </section>
                <br />
                <section className={styles.contact_form_sections}>
                    <label for="message">Ingrese su mensaje *</label>
                    <textarea type="text" name="message" id="message" />
                </section>
                <br />
                <button type="submit" value="Submit" className={styles.button_contact}>Enviar mensaje</button>
            </form>
        </section>
    )
}

export default ContactPage