import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./contacto.css";

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

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToProyectos = () => {
    navigate("/proyectos");
  };

  const navigateToServicios = () => {
    navigate("/servicios");
  };

  return (
    <div className="todo">
      {/* Header */}
      <div className="parte-arriba">
        <div className="logo">
          <img src={logo} alt="Logo" className="milogo" />
        </div>
        <div className="botones">
          <button className="btncontacto" onClick={navigateHome}>
            Home
          </button>
          <button className="btnservicio" onClick={navigateToServicios}>
            Servicios
          </button>
          <button className="btnproyectos" onClick={navigateToProyectos}>
            Proyectos
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="centro">
        <div className="comentarios">
          <h1>Contact Us</h1>
          <h2 className="lema">"Estamos aquí para ayudarte."</h2>
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
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="send" type="submit">
            Enviar
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="mapa-contacto">
          {/* Mapa de Google Maps */}
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12630.883660218027!2d-97.10806549757399!3d32.76911927235505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e820a65b8b75f%3A0x6e7a4a3c72a5489d!2sArlington%2C%20TX%2C%20USA!5e0!3m2!1sen!2smx!4v1697043445366!5m2!1sen!2smx"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación"
            ></iframe>
          </div>

          {/* Ubicación y Contacto */}
          <div className="informacion">
            <div className="ubicacion">
              <h3>Ubicación</h3>
              <p>Arlington, TX, USA</p>
            </div>
            <div className="contacto">
              <h3>Contacto</h3>
              <p>Teléfono: +1 (123) 456-7890</p>
              <p>Email: contacto@allprodrywall.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
