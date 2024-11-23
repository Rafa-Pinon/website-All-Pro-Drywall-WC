import React from "react";
import "./About.css";
import Footer from "../componentes/Footer";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Sobre Nosotros</h1>
        <p>
          Bienvenidos a nuestra empresa. Estamos comprometidos en ofrecer los
          mejores servicios de calidad para nuestros clientes. Nuestro equipo
          está formado por profesionales apasionados y dedicados, trabajando
          juntos para hacer realidad tus proyectos. Valoramos la excelencia, la
          innovación y la satisfacción del cliente por encima de todo.
        </p>
        <p>
          Con años de experiencia en el sector, nuestro objetivo es construir
          relaciones sólidas y duraderas con nuestros clientes basadas en la
          confianza y el desempeño excepcional.
        </p>
      </div>
      <div className="about-image">
        <img
          src="/ruta/de/la/imagen.jpg"
          alt="Equipo"
          className="about-photo"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
