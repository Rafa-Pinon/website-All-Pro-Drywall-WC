import React, { useState } from "react";
import "../styles/proyectos.css";

const ImagenesProyectosSlider = ({ imagenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la imagen siguiente
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <div className="sliders">
      <div className="slider">
        <button className="prev" onClick={prevImage}>
          ←
        </button>
        <img src={imagenes[currentIndex]} alt={`Image ${currentIndex}`} />
        <button className="next" onClick={nextImage}>
          →
        </button>
      </div>
    </div>
  );
};
export default ImagenesProyectosSlider;
