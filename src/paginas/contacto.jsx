import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./contacto.css";
import Footer from "../componentes/Footer";
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
      <Footer />
    </div>
  );
}

export default Contacto;
