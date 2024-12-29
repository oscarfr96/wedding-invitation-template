import React from 'react';
import { Link } from "react-scroll";
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo.svg';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const desktopNav = (props) => {
  const handleLogoClick = () => {
    props.onNavigate("home"); // Cambia a la vista "home" de tu App.js
  };

  return (
    <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
      <div className="wrapper flex-s-between">
        <div>
          <img
            src={LogoImg}
            alt="logo"
            className="pointer"
            onClick={handleLogoClick} // Ejecuta la función al hacer clic
          />
        </div>
        <div className="mobile__menu" onClick={props.mobileMenuOpen}>
          <img src={MobileMenuIcon} alt="menu" />
        </div>
        <div className="desktop__menu">
          <ul className="flex-s-between">
            <li>
              <Link activeClass="active-link" to="event-info" spy={true} smooth={true} offset={-70} duration={500}>
                LA BODA
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="indications" spy={true} smooth={true} offset={-70} duration={500}>
                CÓMO LLEGAR
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                CONTACTO
              </Link>
            </li>
            <li>
              <Link activeClass="active-link" to="attendance" spy={true} smooth={true} offset={-70} duration={500}>
                ASISTENCIA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default desktopNav;
