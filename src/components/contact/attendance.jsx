import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./attendance.scss";
import * as emailjs from "emailjs-com";
import Title from "../ui-components/title/title";
import ContactInfo from "./contactInfo/contactInfo";
import ContactSocial from "./contactInfo/contactSocial";
import Modal from "../contact-modal/Modal";

import ContactBackground from "../../assets/contact/bg.png";

class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "", // Nuevo campo de teléfono
      message: "",
      needBus: false,
      hasAllergies: false,
      allergiesDetails: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ sending: true });

    const template_params = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone, // Incluye el teléfono en el envío
      message: this.state.message,
      needBus: this.state.needBus ? "Sí" : "No",
      hasAllergies: this.state.hasAllergies ? "Sí" : "No",
      allergiesDetails: this.state.allergiesDetails || "N/A",
    };

    const API_KEY = ""; // YOUR EMAIL.JS API KEY
    const TEMPLATE_ID = ""; // YOUR EMAIL.JS TEMPLATE ID

    emailjs.send("default_service", TEMPLATE_ID, template_params, API_KEY).then(
      (response) => {
        if (response.status === 200) {
          this.showSuccessModal();
        } else {
          this.showErrorModal();
        }
      },
      (error) => {
        this.showErrorModal();
      }
    );
  };

  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };

  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      message: "",
      needBus: false,
      hasAllergies: false,
      allergiesDetails: "",
    });
  };

  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  render() {
    const { hasAllergies, sending } = this.state;

    let submitButtonRender = (
      <div className="small__button">
        <button aria-label="send message" type="submit">
          Confirmar
        </button>
      </div>
    );

    if (sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }

    return (
      <div id="contact">
        <div className="wrapperAttendance">
          <Title title="ASISTENCIA." />
          <p className="font18">
            Por favor, es importante que confirmes tu asistencia mediante el siguiente formulario:
          </p>

          <Row className="padding30">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <h4 className="font30 weight800 padding30">Confirma tu asistencia.</h4>
                <input
                  type="text"
                  placeholder="Nombre"
                  required
                  name="name"
                  value={this.state.name}
                  onChange={this.inputHandler}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={this.state.email}
                  onChange={this.inputHandler}
                />
                <input
                  type="tel"
                  placeholder="Teléfono de contacto"
                  required
                  name="phone"
                  value={this.state.phone}
                  onChange={this.inputHandler}
                />
                <textarea
                  rows="3"
                  placeholder="Peticiones especiales, mensajes de amor..."
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>

                {/* Checkbox para autobús */}
                <div className="checkbox-container">
                  <label>
                    <input
                      type="checkbox"
                      name="needBus"
                      checked={this.state.needBus}
                      onChange={this.inputHandler}
                    />
                    Necesitaré autobús para los traslados
                  </label>
                </div>

                {/* Checkbox para alergias */}
                <div className="checkbox-container">
                  <label>
                    <input
                      type="checkbox"
                      name="hasAllergies"
                      checked={this.state.hasAllergies}
                      onChange={this.inputHandler}
                    />
                    Tengo alguna alergia
                  </label>
                </div>

                {/* Textarea condicional para especificar alergias */}
                {hasAllergies && (
                  <textarea
                    rows="3"
                    placeholder="Por favor, especifica tus alergias"
                    name="allergiesDetails"
                    value={this.state.allergiesDetails}
                    onChange={this.inputHandler}
                  ></textarea>
                )}

                {submitButtonRender}
              </form>
            </Col>
            <Col md={12} lg={6}>
              <div className="flex-center">
                <img src={ContactBackground} alt="contact background" />
              </div>
            </Col>
          </Row>
          <ContactInfo />
          <ContactSocial />
        </div>
      </div>
    );
  }
}

export default Attendance;
