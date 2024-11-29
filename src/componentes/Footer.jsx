import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345096444!2d-96.6989258!3d33.193275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c0b53f6a409%3A0xd30724c28b2f7df9!2s1971%20University%20Business%20Drive%20Ste%20107%2C%20McKinney%2C%20TX%2075071!5e0!3m2!1sen!2sus!4v1691563708597!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="map"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="info-container">
          <h4>Office Address:</h4>
          <p>1971 University Business Drive Ste 107 Mckinney TX 75071</p>
          <h4>Contact</h4>
          <p>Phone: +1 (469) 408-9096</p>
          <p>Email: sdf@gmail.com</p>
        </div>
      </div>
      <div className="rights-container">
        <p>Copyright ©2024 All-Pro Drywall. All Rights Reserved.</p>
        <a
          href="https://whistlecoding.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by WhistleCoding
        </a>
      </div>
    </footer>
  );
};

export default Footer;
