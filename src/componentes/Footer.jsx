import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mapa-contacto">
        <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12630.883660218027!2d-97.10806549757399!3d32.76911927235505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c090db2b1a1b1%3A0x72c086a57063b013!2sAll-Pro%20Drywall%20LLC!5e0!3m2!1ses!2smx!4v1694515270818!5m2!1ses!2smx"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación"
          ></iframe>
        </div>

        <div className="contacto">
          <h3>Ubicación:</h3>
          <p>All-Pro Drywall LLC, 1234 Calle Ejemplo, Norte de Texas</p>
          <h3>Contacto:</h3>
          <p>Teléfono: +1 555 123 4567</p>
          <p>Email: contacto@allprodrywall.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
