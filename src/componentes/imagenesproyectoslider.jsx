import React, { useState } from "react";
import "../styles/proyectos.css";

const ImagenesProyectosSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir a la imagen siguiente
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevImage}>
        ←
      </button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <button className="next" onClick={nextImage}>
        →
      </button>
    </div>
  );
};

export default ImagenesProyectosSlider;
