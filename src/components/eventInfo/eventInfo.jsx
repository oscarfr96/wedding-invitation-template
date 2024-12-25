import React from "react";
import "./eventInfo.scss";
// Components
import Title from "../ui-components/title/title";

const EventInfo = () => {
  return (
    <div id="event-info">
      <div className="wrapper">
        <Title title="LA BODA" />
        <p className="subtitle">
          Nos casaremos en el Parador de Ávila, un lugar privilegiado en la ciudad que tanto queremos.
        </p>
        <div className="eventos">
          <div className="evento">
            <h3>Ceremonia</h3>
            <p className="hora">- 11:00 am -</p>
            <p className="lugar"><strong>Iglesia de San Bartolomé</strong></p>
            <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
          </div>
          <div className="evento">
            <h3>Recepción</h3>
            <p className="hora">- 1:00 pm -</p>
            <p className="lugar"><strong>Comida</strong></p>
            <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
          </div>
          <div className="evento">
            <h3>Fiesta</h3>
            <p className="hora">- 8:00 pm -</p>
            <p className="lugar"><strong>La Terraza</strong></p>
            <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
          </div>
        </div>
        <p className="map-invitation">
          El evento principal tendrá lugar en <a href="https://www.parador.es/es/paradores/parador-de-avila" className="highlight" target="_blank" rel="noopener noreferrer"><strong>El Parador de Ávila</strong></a>:
        </p>


        <div className="google-maps-banner">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.724596858582!2d-4.704024224160014!3d40.65800087140181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd40f31c29e34033%3A0x8185b97acceb3f0a!2sParador%20de%20%C3%81vila!5e0!3m2!1ses!2ses!4v1734458192576!5m2!1ses!2ses"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
