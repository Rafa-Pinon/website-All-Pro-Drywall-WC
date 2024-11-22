import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096444!2d-122.41941538468127!3d37.774929779759224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858144f8d54c2b%3A0xab20d57c27ddac79!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1663610576652!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="info-container">
        <h4>Ubicación</h4>
        <p>123 Calle Ejemplo, Ciudad, País</p>
        <h4>Contacto</h4>
        <p>Teléfono: +1 234 567 890</p>
        <p>Email: ejemplo@dominio.com</p>
      </div>
    </footer>
  );
};

export default Footer;
