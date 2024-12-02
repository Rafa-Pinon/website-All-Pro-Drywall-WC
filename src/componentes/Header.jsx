import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/contacto", label: "Contact" },
    { path: "/servicios", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/proyectos", label: "Projects" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="All-Pro Drywall Logo" />
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        {navLinks
          .filter((link) => link.path !== location.pathname)
          .map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}

export default Header;
