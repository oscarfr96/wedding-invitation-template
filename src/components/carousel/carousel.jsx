import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Slider from "react-slick"; // Importamos el carrusel
import "./carousel.scss";
// Components
import TeamBox from './teamBox';
// Assets
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const carousel = () => {
  const settings = {
    dots: true, // Indicadores de los slides
    infinite: true, // Repite las imágenes al final
    speed: 500, // Velocidad de la transición
    slidesToShow: 3, // Cuántas imágenes se muestran a la vez
    slidesToScroll: 1, // Cuántas imágenes se desplazan cada vez
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Tiempo de espera entre cada cambio (ms)
    responsive: [
      {
        breakpoint: 1024, // Para pantallas menores a 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Para pantallas menores a 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="about">
      <div className="wrapper">
        <Slider {...settings}>
          <div>
            <TeamBox avatar={Person01} />
          </div>
          <div>
            <TeamBox avatar={Person02} />
          </div>
          <div>
            <TeamBox avatar={Person02} />
          </div>
          <div>
            <TeamBox avatar={Person02} />
          </div>
          <div>
            <TeamBox avatar={Person02} />
          </div>
          <div>
            <TeamBox avatar={Person02} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default carousel;
