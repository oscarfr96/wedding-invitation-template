import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./footer.scss";

import Logo from "../../assets/footer/logo.svg";
import Arrow from "../../assets/footer/arrow.svg";

const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="wrapper">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <div className="footer-box">
              <img src={Logo} alt="logo" />
              <p>© 2025 - Óscar Fraile, All Right Reserved</p>
              <p>
                <button
                  onClick={() => {
                    scrollToTop();
                    onNavigate("admin-login");
                  }}
                  className="admin-link"
                >
                  Acceso administración
                </button>
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <div className="footer-box back-to-top" onClick={scrollToTop}>
              <p>VOLVER ARRIBA</p>
              <img src={Arrow} alt="arrow" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
