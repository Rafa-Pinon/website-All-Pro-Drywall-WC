import React from "react";
import "./Servicios.css";
import Footer from "../componentes/Footer";
const Servicios = () => {
  const servicios = [
    {
      id: 1,
      titulo: "Servicio 1",
      descripcion:
        "Descripción detallada del servicio 1. Aquí puedes describir qué incluye y sus beneficios.",
      imagen: "/ruta/a/imagen1.jpg",
    },
    {
      id: 2,
      titulo: "Servicio 2",
      descripcion:
        "Descripción detallada del servicio 2. Explica qué lo hace especial.",
      imagen: "/ruta/a/imagen2.jpg",
    },
    {
      id: 3,
      titulo: "Servicio 3",
      descripcion:
        "Descripción detallada del servicio 3. Ideal para mencionar detalles técnicos o ventajas.",
      imagen: "/ruta/a/imagen3.jpg",
    },
  ];

  return (
    <div className="servicios-container">
      <h1 className="servicios-title">Nuestros Servicios</h1>
      <div className="servicios-list">
        {servicios.map((servicio, index) => (
          <div
            key={servicio.id}
            className={`servicio-item ${
              index % 2 === 0 ? "row-normal" : "row-reverse"
            }`}
          >
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className="servicio-imagen"
            />
            <div className="servicio-texto">
              <h2>{servicio.titulo}</h2>
              <p>{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Servicios;
