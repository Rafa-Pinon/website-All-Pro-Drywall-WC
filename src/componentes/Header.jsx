import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../styles/header.css";

function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/contacto", label: "Contact" },
    { path: "/servicios", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/proyectos", label: "Projects" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="All-Pro Drywall Logo" />
      </div>
      <nav className="nav">
        {navLinks.map((link) =>
          location.pathname === link.path ? null : (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

export default Header;
