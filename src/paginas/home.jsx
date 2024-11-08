import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // Navega a la ruta especificada
  };

  return (
    <div className="parte-arriba">
      <div className="logo">
        <img src={logo} alt="Logo" className="milogo" />
      </div>
      <div className="botones">
        <button onClick={() => navigateTo("/contacto")}>Contacto</button>
        <button onClick={() => navigateTo("/servicios")}>Servicios</button>
        <button onClick={() => navigateTo("/proyectos")}>Proyectos</button>
      </div>
    </div>
  );
}

export default Home;
