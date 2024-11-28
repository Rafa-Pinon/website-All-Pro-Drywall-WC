import React, { useState, useEffect } from "react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [images]);

  return (
    <div
      className="image-slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`, // Cambia la imagen de fondo
      }}
    ></div>
  );
}

export default ImageSlider;
