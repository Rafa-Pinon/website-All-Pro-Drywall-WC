import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../componentes/Footer";
import logo from "../assets/img/logo.png";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

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
        <div className="about-container">
          <div className="about-text">
            <h1>Who We Are</h1>
            <p>
              All-Pro Drywall LLC was founded by Arlen LeBaron five years ago in
              North Texas and has quickly become a trusted leader in the drywall
              industry. With a steadfast commitment to excellence, we prioritize
              quality craftsmanship and exceptional customer service in every
              project.
            </p>
            <p>
              At All-Pro Drywall, we believe our success is built on
              consistently meeting and exceeding our clients' expectations. Our
              skilled team of professionals brings years of experience and
              expertise to every job, ensuring that each installation and repair
              meets the highest industry standards.
            </p>
            <p>
              Customer satisfaction is at the core of our work. We listen
              closely to our clients' needs and work collaboratively to bring
              their vision to life. Whether it’s a residential renovation or a
              large-scale commercial build, All-Pro Drywall LLC is dedicated to
              delivering superior, lasting results.
            </p>
            <p>
              As we continue to grow, our commitment to quality and service
              remains unwavering, making us the preferred choice for drywall
              solutions in North Texas.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/ruta/de/la/imagen.jpg"
              alt="Equipo"
              className="about-photo"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
