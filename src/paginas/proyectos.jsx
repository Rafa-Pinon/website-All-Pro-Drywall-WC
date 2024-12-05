import React, { useState, useEffect } from "react";
import "../styles/proyectos.css";
import Header from "../componentes/Header";
import uno from "../../src/assets/imagenes/uno.jpg";
import dos from "../../src/assets/imagenes/dos.jpg";
import tres from "../../src/assets/imagenes/tres.jpg";
import intuno from "../../src/assets/imagenes/tab.jpeg";
import intdos from "../../src/assets/imagenes/interiordos.jpeg";
import inttres from "../../src/assets/imagenes/tres.jpg";
import inttexture from "../../src/assets/imagenes/texture.jpg";
import ImagenesProyectosSlider from "../componentes/imagenesproyectoslider";
import logosinfondo from "../../src/assets/imagenes/logo-sin-fondo.png";
import Footer from "../componentes/Footer";

function Proyectos() {
  const images = [uno, dos, tres]; // Lista de imágenes
  const interiores = [intuno, intdos, inttexture];
  return (
    <div className="proyecto">
      <div className="cabeza">
        <Header />
      </div>
      <div className="titulo">
        <div className="titulo-proyecto">
          <p>Projects</p>
        </div>
      </div>

      <div className="tipodepryecto">
        <p>Constructions</p>
      </div>
      <div className="slideruno">
        <ImagenesProyectosSlider images={images} />
      </div>

      <div className="sliderinteriores">
        <div className="pinterior">
          <p>Interiors</p>
        </div>
        <div className="sliderdos">
          <ImagenesProyectosSlider images={interiores} />
        </div>
      </div>
      <div className="foter">
        <Footer />
      </div>
    </div>
  );
}

export default Proyectos;
