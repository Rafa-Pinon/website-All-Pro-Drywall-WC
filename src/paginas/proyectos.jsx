import React, { useState, useEffect } from "react";
import "../styles/proyectos.css";
import Header from "../componentes/Header";
import uno from "../../src/assets/imagenes/uno.jpg";
import dos from "../../src/assets/imagenes/dos.jpg";
import tres from "../../src/assets/imagenes/tres.jpg";
import ImagenesProyectosSlider from "../componentes/imagenesproyectoslider";

function Proyectos() {
  const images = [uno, dos, tres]; // Lista de imágenes
  return (
    <div className="proyecto">
      <div className="cabeza">
        <Header />
      </div>
      <div className="titulo-proyecto">
        <p>Projects</p>
      </div>

      <div className="fotos">
        <ImagenesProyectosSlider images={images} />
      </div>
    </div>
  );
}

export default Proyectos;
