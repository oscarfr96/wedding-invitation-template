import React, { useState } from "react";
import "./adminLogin.scss";

const AdminLogin = ({ onNavigate }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de validación (puedes reemplazarlo con autenticación real)
    if (credentials.username === "admin" && credentials.password === "password123") {
      onNavigate("admin-dashboard"); // Usa la función pasada como prop para cambiar la vista
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="admin-login">
      <h2>Inicio de Sesión Administrador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default AdminLogin;
