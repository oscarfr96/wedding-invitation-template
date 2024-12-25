import React from "react";
import "./main.scss";

const TARGET_DATE = new Date("2025-07-15T00:00:00");

const Main = () => {
  const handleReservationClick = () => {
    // Lógica para redirigir o hacer scroll a la sección de reserva.
    const reservationSection = document.getElementById("reservation");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <h3 className="hero-date">- {TARGET_DATE.toLocaleDateString()} -</h3>
        <h1 className="hero-names">Iván & Maria</h1>
        <p className="hero-marriage-message">¡Nos casamos!</p>
        <button className="hero-button" onClick={handleReservationClick}>
          Reserva tu asistencia
        </button>
      </div>
    </div>
  );
};

export default Main;
