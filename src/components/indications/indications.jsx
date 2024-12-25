import React from "react";
// SCSS
import "./indications.scss";
// Components
import Title from "../ui-components/title/title";

const Indications = () => {
  return (
    <div id="indications">
      <div className="wrapper">
        <Title title="CÓMO LLEGAR" />
        <p className="subtitle">
          Existen múltiples opciones para vuestra llegada y alojamiento.
        </p>
        <div className="eventos">
          <div className="evento">
            <h3>Transporte</h3>
            <p className="lugar">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
          </div>
          <div className="evento">
            <h3>Alojamiento</h3>
            <p className="lugar">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indications;
