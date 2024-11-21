import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./contacto.css";
import ImageSlider from "../componentes/imagenes";

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
          <div className="btncontactocajah">
            <button className="btncontacto" onClick={navigateHome}>
              Home
            </button>
          </div>
          <div className="btnservicioscajah">
            <button className="btnservicio" onClick={navigateToServicios}>
              Servicios
            </button>
          </div>
          <div className="btnproyectoscajah">
            <button className="btnproyectos" onClick={navigateToProyectos}>
              Proyectos
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="centro">
        <div className="comentarios">
          <div className="nombre">
            <h1>Contact Us</h1>
          </div>
          <div className="lema">
            <h1>"Estamos aquí para ayudarte."</h1>
          </div>
        </div>

        {/* Formulario de contacto */}
        <form
          name="contacto" // tengo que asegurarme de que este nombre coincida con el que está configurado en Netlify
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
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
            />
          </div>
          <button className="send" type="submit">
            Enviar
          </button>
        </form>

        <button className="btnproyectos" onClick={navigateToProyectos}>
          Ver Proyectos
        </button>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="logofooter">
          <img src={logo} alt="Logo" className="milogofooter" />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
