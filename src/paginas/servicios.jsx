import React from "react";
import { useNavigate } from "react-router-dom";
import "./Servicios.css"; // Asegúrate de que el archivo CSS esté en el mismo directorio
import logo from "../assets/img/logo.png";
import Footer from "../componentes/Footer";
import dh from "../assets/imagenes/dh.jpeg";
import tab from "../assets/imagenes/tab.jpeg";
import ml from "../assets/imagenes/ml.jpeg";
import texture from "../assets/imagenes/texture.jpg";

const Servicios = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const navigateToProyectos = () => {
    navigate("/proyectos");
  };

  const navigateToAbout = () => {
    navigate("/about");
  };

  const navigateToContacto = () => {
    navigate("/contacto");
  };

  const servicios = [
    {
      id: 1,
      titulo: "Drywall Hang",
      descripcion:
        "We walk the hang ensuring that all light boxes, Vents and wiring are cutout. We also walk all nail patterns making sure are correct and ready for drywall inspection.",
      imagen: dh,
    },
    {
      id: 2,
      titulo: "Tape and Bed",
      descripcion:
        "At All-Pro Drywall, we specialize in comprehensive drywall solutions, delivering professional and high-quality service for all your projects. We understand that drywall is not only an economical and efficient option but also a fantastic way to enhance the aesthetics and functionality of any space.",
      imagen: tab,
    },
    {
      id: 3,
      titulo: "Marking Lights Prior to Hang",
      descripcion:
        "At the beginning stage we mark all of the lights, vents and wiring that are not to be covered by drywall to ensure we do not leave the builder with setbacks down the road.",
      imagen: ml,
    },
    {
      id: 4,
      titulo: "Drywall Texture",
      descripcion:
        "We mask all of the windows, air vents and any other items that do not require texture, we spray a drywall mud primer before texturing any of our jobs. This helps us spry the texture on a even surface free of shadows and dust build up in the corners, helping minimize punch items and areas that need repair after texture.",
      imagen: texture,
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
          <button className="btnservicio" onClick={navigateToAbout}>
            About
          </button>
          <button className="btnproyectos" onClick={navigateToProyectos}>
            Proyectos
          </button>
          <button className="btncontacto" onClick={navigateToContacto}>
            Contact Us
          </button>
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="servicios-container">
        <h1 className="servicios-title">Our Services</h1>
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
      <div className="quality-section">
        <h2>Committed to Quality: Precision and Care in Every Project</h2>
        <p>
          <strong>Pre-Installation Walkthrough:</strong> We conduct a thorough
          walkthrough of each unit before hanging, following a detailed
          checklist to ensure everything is ready for a smooth installation.
        </p>
        <p>
          <strong>Full-Time Project Supervision:</strong> Our projects are
          managed by full-time supervisors who oversee every aspect of the work,
          ensuring quality and addressing any issues as they arise.
        </p>
        <p>
          <strong>Daily Inspections:</strong> To stay on schedule and maintain a
          clean workspace, we inspect our projects daily, making sure our
          standards are met consistently.
        </p>
        <p>
          These are the steps we take to ensure the level of quality you expect.
          By maintaining this level of care throughout the project, we make the
          building turnover process as smooth as possible.
        </p>
        <p>
          We’ve learned that finishing well is the key to a successful project.
          Our attention to detail during Punch-Out saves valuable time and
          ensures a flawless final result.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Servicios;
