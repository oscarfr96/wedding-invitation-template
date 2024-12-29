import React from "react";
import { Link } from "react-scroll";
// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from "../../assets/navbar/mobile-close.svg";
import Logo from "../../assets/navbar/logo-yellow.svg";

const mobileNav = (props) => {
  const handleLogoClick = () => {
    props.onNavigate("home"); // Cambia a la vista "home" de tu App.js
    props.closeMobileMenu(); // Cierra el menú móvil
  };

  return (
    <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
      <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
        <img src={CloseIcons} alt="close" />
      </div>
      <div className="mobile__navbar-logo flex-center">
        <img
          src={Logo}
          alt="logo"
          className="pointer"
          onClick={handleLogoClick} // Ejecuta la función al hacer clic
        />
      </div>
      <div className="mobile__navbar-menu">
        <ul>
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="event-info"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              LA BODA
            </Link>
          </li>
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="indications"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              CÓMO LLEGAR
            </Link>
          </li>
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              CONTACTO
            </Link>
          </li>
          <li className="flex-center">
            <Link
              activeClass="active-link"
              to="attendance"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={props.closeMobileMenu}
            >
              ASISTENCIA
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default mobileNav;
