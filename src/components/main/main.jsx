import React, { useState, useEffect } from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./main.scss";
//Assets
import HeroImage from "../../assets/hero/hero-image.png";
//Components
import Button from "../ui-components/button/button";

// Definimos la fecha objetivo fuera del componente para que no se re-calcula en cada render
const TARGET_DATE = new Date("2025-07-15T00:00:00");

const Main = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Función para calcular el tiempo restante
  function calculateTimeLeft() {
    const now = new Date();
    const difference = TARGET_DATE - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // En caso de que ya haya pasado la fecha
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  // Actualiza el contador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Desestructuramos los valores de `timeLeft` para usarlos directamente
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  return (
    <div className="hero" id="hero">
      <div className="wrapper">
        <Row>
          <Col md={12} lg={6}>
            <div className="hero-info">
              <h1 className="weight800 font60">¡Nos casamos!</h1>
              <h2 className="weight800 font50">
                Y nos encantaría que nos acompañases en este día tan especial.
              </h2>
              <p className="font60">El gran día: {TARGET_DATE.toLocaleDateString()}</p>
              <Button label="Confirmar asistencia" target={"contact"} />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="hero-image">
              <img src={HeroImage} alt="hero" />
            </div>
          </Col>
        </Row>

        {/* Contador regresivo */}
        <div className="hero-countdown">
          <h2>Faltan:</h2>
          <p>
            {days} días, {hours} horas, {minutes} minutos, {seconds} segundos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
