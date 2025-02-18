import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "./AEMC3731.png";
import image2 from "./AEMC6250.png";
import image3 from "./AEMC6472.png";
import image4 from "./AEMCDTR8510.png";
import image5 from "./ALROCMF360.png";
import image6 from "./IBEX2000.png";
import image7 from "./MEGGERS1-1068.png";
import image8 from "./PUNTASVLF.png";
import image9 from "./RMO200G.png";
import { NavLink } from "react-router-dom";


const slides = [
  {
    title: "Pinza medición de puesta a tierra",
    image: image1,
  },
  {
    title: "Micrómetro 10 A",
    image: image2,
  },
  {
    title: "Telurometro",
    image: image3,
  },
  {
    title: "Medidor relación de transformación",
    image: image4,
  },
  {
    title: "Máquina para confección de mufas",
    image: image5,
  },
  {
    title: "Medidor calidad de baterías",
    image: image6,
  },
  {
    title: "Medidor de aislamiento 10 kV",
    image: image7,
  },
  {
    title: "Puntas para pruebas VLF-Tang Delta",
    image: image8,
  },
  {
    title: "Micrómetro 200 A",
    image: image9,
  },
];

export const Carousel1 = () => {
  return (
    <section className="page carousel-1-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                <NavLink to="/contacto">Cotizar</NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};