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
      <div className="centro">
        <div className="comentarios">
          <h1>Contact Us</h1>
          <div className="highlight">
            <h2>"What can we build for you"</h2>
          </div>
        </div>

        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="formulario-container"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button className="send" type="submit">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
