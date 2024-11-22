import React, { useState, useEffect } from "react";
import imagen1 from "../assets/imagenes/uno.jpg"; // Importa la imagen
import imagen2 from "../assets/imagenes/dos.jpg";
import imagen3 from "../assets/imagenes/tres.jpg";

function ImageSlider() {
  // Array de imágenes importadas desde la carpeta src
  const images = [imagen1, imagen2, imagen3];

  // Estado para mantener el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambiar la imagen cada 3 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="imagenes">
      <img
        src={images[currentImageIndex]}
        alt={`Imagen ${currentImageIndex + 1}`}
      />
    </div>
  );
}

export default ImageSlider;
