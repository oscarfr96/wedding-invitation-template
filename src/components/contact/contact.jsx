import React from "react";
// SCSS
import "./contact.scss";
// Components
import Title from "../ui-components/title/title";

const Contact = () => {
  return (
    <div id="contact">
      <div className="wrapper">
        <Title title="CONTACTO" />
        <p className="subtitle">
          Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.
        </p>
        <div className="contact-info">
          <div className="contact-card">
            <h3>Iván</h3>
            <p className="contact-detail">📞 +34 600 123 456</p>
            <p className="contact-detail">📧 ivan@example.com</p>
          </div>
          <div className="contact-card">
            <h3>Maria</h3>
            <p className="contact-detail">📞 +34 601 654 321</p>
            <p className="contact-detail">📧 maria@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
