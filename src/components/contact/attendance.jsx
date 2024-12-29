import React, { useState } from "react";
import "./attendance.scss";
// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Asegúrate de que la ruta sea correcta
// Components
import Title from "../ui-components/title/title";

const Attendance = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    needBus: false,
    hasAllergies: false,
    allergiesDetails: "",
  });

  const [isSending, setIsSending] = useState(false);

  const inputHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Guarda los datos en Firebase
      await addDoc(collection(db, "attendance"), {
        ...formData,
        allergiesDetails: formData.allergiesDetails || "N/A", // Asegura un valor por defecto
        timestamp: new Date(), // Marca de tiempo para el registro
      });

      alert("¡Asistencia confirmada!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        needBus: false,
        hasAllergies: false,
        allergiesDetails: "",
      });
    } catch (error) {
      console.error("Error al guardar el registro:", error);
      alert("Ocurrió un error al confirmar tu asistencia. Intenta de nuevo.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="attendance">
      <div className="wrapperAttendance">
        <Title title="CONFIRMA TU ASISTENCIA" />
        <p className="subtitle">
          Por favor, confirma tu asistencia rellenando el siguiente formulario.
        </p>
        <form id="attendance-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={formData.name}
            onChange={inputHandler}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={inputHandler}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono de contacto"
            required
            value={formData.phone}
            onChange={inputHandler}
          />
          <textarea
            name="message"
            rows="3"
            placeholder="Peticiones especiales, mensajes..."
            value={formData.message}
            onChange={inputHandler}
          ></textarea>
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="needBus"
              checked={formData.needBus}
              onChange={inputHandler}
            />
            Necesitaré autobús para los traslados
          </label>
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="hasAllergies"
              checked={formData.hasAllergies}
              onChange={inputHandler}
            />
            Tengo alguna alergia
          </label>
          {formData.hasAllergies && (
            <textarea
              name="allergiesDetails"
              rows="3"
              placeholder="Por favor, especifica tus alergias"
              value={formData.allergiesDetails}
              onChange={inputHandler}
            ></textarea>
          )}
          <button type="submit" className="submit-button" disabled={isSending}>
            {isSending ? "Enviando..." : "Confirmar asistencia"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
