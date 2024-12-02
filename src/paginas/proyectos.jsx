import React, { useState, useEffect } from "react";
import "../styles/proyectos.css";
import Header from "../componentes/Header";
import uno from "../../src/assets/imagenes/uno.jpg";
import dos from "../../src/assets/imagenes/dos.jpg";
import tres from "../../src/assets/imagenes/tres.jpg";
import cuatro from "../../src/assets/imagenes/cuatro.jpg";
import cinco from "../../src/assets/imagenes/cinco.jpg";
import seis from "../../src/assets/imagenes/seis.jpg";
import texture from "../../src/assets/imagenes/texture.jpg";
import tab from "../../src/assets/imagenes/tab.jpeg";
import ml from "../../src/assets/imagenes/ml.jpeg";
import ImagenesProyectosSlider from "../componentes/imagenesproyectoslider";

function Proyectos() {
  const imagenes = [uno, dos, tres]; // Lista de imágenes
  const imagenesdos = [texture, seis, tab, ml]; // Lista de imágenes
  return (
    <div className="proyecto">
      <div className="cabeza">
        <Header />
      </div>
      <div className="titulo-proyecto">
        <p>Projects</p>
      </div>

      <div className="fotos">
        <div className="frase">
          <p>"The beginning is the first brick toward your future"</p>
        </div>
        <ImagenesProyectosSlider imagenes={imagenes} />
      </div>
      <div className="temaslider">
        <p>Interiores</p>
      </div>
      <div className="sliderdos">
        <ImagenesProyectosSlider imagenes={imagenesdos} />
      </div>
      <div className="foter">
        <h1>foter</h1>
      </div>
    </div>
  );
}

export default Proyectos;
