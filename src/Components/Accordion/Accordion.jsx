import { useRef, useState } from "react";
import "./styles.css";

import { FaArrowAltCircleDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    header: "Primer Paso - Envíanos tu solicitud o requerimiento",
    text: `Contáctanos indicando los equipos que necesitas, el tiempo de arriendo y cualquier requisito especial. Puedes hacerlo a través de nuestro formulario en línea, correo electrónico o teléfono. Nuestro equipo revisará tu solicitud y te brindará asesoría si lo requieres.`,
    
  },
  {
    id: 2,
    header: "Segundo Paso - Te enviamos la cotización respectiva",
    text: `Una vez recibida tu solicitud, elaboraremos una cotización detallada con los costos, condiciones y disponibilidad de los equipos. Te la enviaremos a la brevedad para que puedas revisarla y realizar cualquier consulta antes de confirmar el arriendo.`,
  },
  {
    id: 3,
    header: "Tercer Paso - Recibimos tu orden de compra",
    text: `Una vez que hayas revisado y aprobado la cotización, envíanos tu orden de compra para formalizar el arriendo. Con este documento, aseguramos la disponibilidad de los equipos y avanzamos con el proceso de entrega.`,
  },
  {
    id: 4,
    header: "Cuarto Paso - Enviamos el contrato de arriendo",
    text: `Te enviaremos el contrato de arriendo con todos los términos y condiciones detallados. Es importante revisar y firmar el documento para formalizar el acuerdo y proceder con la entrega de los equipos.`,
  },
  {
    id: 5,
    header: "Quinto Paso - Entrega de equipo(s)",
    text: `Una vez firmado el contrato de arriendo y cumplidos los requisitos de garantía y pago, procederemos con la entrega del equipo en la fecha y lugar acordados. Nos aseguramos de que recibas los equipos en óptimas condiciones y listos para su uso.`,
  },
  {
    id: 6,
    header: "Sexto Paso - Devolución del equipo(s)",
    text: `Al finalizar el período de arriendo, deberás coordinar la devolución del equipo en el lugar y fecha acordados. Se realizará una inspección para verificar su estado y asegurar que cumple con las condiciones establecidas en el contrato.`,
  },
  {
    id: 7,
    header: "Septimo Paso - Devolución de garantía",
    text: `Si la inspección confirma que el equipo no presenta daños ni desperfectos fuera del uso normal, procederemos con la devolución del cheque en garantía. En caso de observaciones, se informará al cliente para evaluar las acciones correspondientes.`,
  },
];

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef(null);
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined"><FaArrowAltCircleDown /></span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={{ height: active === id ? `${contentEl.current?.scrollHeight}px` : "0px" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <article className="howto_rent_article">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          active={active}
          handleToggle={handleToggle}
          faq={faq}
        />
      ))}
    </article>
  );
};

export default Accordion