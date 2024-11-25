import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contacto.css";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";

function Contacto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="todo">
      <Header />
      {/* Main Content */}
      <div className="centro">
        <div className="comentarios">
          <h1>Contact Us</h1>
          <h2>"Estamos aquí para ayudarte."</h2>
        </div>

        {/* Contact Form */}
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="formulario-container"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>
          <button className="send" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
