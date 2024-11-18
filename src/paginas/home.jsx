import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./home.css";
import ImageSlider from "../componentes/imagenes";

function Home() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path); // Navega a la ruta especificada
  };

  return (
    <div className="todo">
      <div className="parte-arriba">
        <div className="logo">
          <img src={logo} alt="Logo" className="milogo" />
        </div>
        <div className="botones">
          <div className="btncontactocajah">
            <button
              className="btncontacto"
              onClick={() => navigateTo("/contacto")}
            >
              Contacto
            </button>
          </div>
          <div className="btnservicioscajah">
            <button
              className="btnservicio"
              onClick={() => navigateTo("/servicios")}
            >
              Servicios
            </button>
          </div>
          <div className="btnproyectoscajah">
            <button
              className="btnproyectos"
              onClick={() => navigateTo("/proyectos")}
            >
              Proyectos
            </button>
          </div>
        </div>
      </div>
      <div className="centro">
        <div className="comentarios">
          <div className="nombre">
            <h1>ALL Pro Drywall</h1>
          </div>
          <div className="lema">
            <h1>"Passion for details, commitment to excellence"</h1>
          </div>
        </div>
        <div className="componentedeimagenes">
          <ImageSlider />
        </div>
      </div>
      <div className="footer">
        <div className="logofooter">
          <img src={logo} alt="Logo" className="milogofooter" />
        </div>
        <div className="botonesfooter">
          <div className="btncontactocaja">
            <button
              className="btncontacto"
              onClick={() => navigateTo("/contacto")}
            >
              Contacto
            </button>
          </div>
          <div className="btnservicioscaja">
            <button
              className="btnservicio"
              onClick={() => navigateTo("/servicios")}
            >
              Servicios
            </button>
          </div>
          <div className="btnproyectoscaja">
            <button
              className="btnproyectos"
              onClick={() => navigateTo("/proyectos")}
            >
              Proyectos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
