import React from "react";
import { useNavigate } from "react-router-dom";
import "./Servicios.css";
import logo from "../assets/img/logo.png";
import Footer from "../componentes/Footer";
const Servicios = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToProyectos = () => {
    navigate("/proyectos");
  };
  //despues que cree el about lo voy a cambiar a about
  const navigateToServicios = () => {
    navigate("/servicios");
  };

  const servicios = [
    {
      id: 1,
      titulo: "Servicio 1",
      descripcion: "Descripción detallada del servicio 1.",
      imagen: "../imagenes/cuatro.jpg",
    },
    {
      id: 2,
      titulo: "Servicio 2",
      descripcion: "Descripción detallada del servicio 2.",
      imagen: "/ruta/a/imagen2.jpg",
    },
    {
      id: 3,
      titulo: "Servicio 3",
      descripcion: "Descripción detallada del servicio 3.",
      imagen: "/ruta/a/imagen3.jpg",
    },
  ];

  return (
    <div>
      {/* Encabezado */}
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

      {/* Sección de servicios */}
      <div className="servicios-container">
        <h1 className="servicios-title">Nuestros Servicios</h1>
        <div className="servicios-list">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className={`servicio-item ${
                index % 2 === 0 ? "row-normal" : "row-reverse"
              }`}
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="servicio-imagen"
              />
              <div className="servicio-texto">
                <h2>{servicio.titulo}</h2>
                <p>{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
