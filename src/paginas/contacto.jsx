import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contacto.css";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import dos from "../assets/imagenes/dos.jpg";
import uno from "../assets/imagenes/uno.jpg";
import frac from "../assets/imagenes/frac.avif";

function Contacto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSubmitting(false);
          setProgress(0);
          alert("Form submitted successfully!");
          return prev;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="todo">
      <Header />

      <div className="comentarios">
        <h1 className="titulo">Contact Us</h1>
        <div className="cta-banner">
          <p>
            "Let's build your dreams together – the first step starts here!"
          </p>
        </div>
      </div>

      <div className="centro">
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="formulario-container"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          {isSubmitting && (
            <div className="progress-bar">
              <div style={{ width: `${progress}%` }}></div>
            </div>
          )}
          <button className="send" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div className="extras">
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-item">
            <p>
              "The best service ever! My dream home is now a reality thanks to
              this amazing team."
            </p>
            <span>- Sarah J.</span>
          </div>
          <div className="testimonial-item">
            <p>
              "Professional, efficient, and reliable. Highly recommended for any
              construction project!"
            </p>
            <span>- Mark T.</span>
          </div>
        </section>

        <section className="gallery">
          <h2>Our Work in Action</h2>
          <div className="gallery-grid">
            <img src={uno} alt="Project 1" />
            <img src={dos} alt="Project 2" />
            <img src={frac} alt="Project 3" />
          </div>
        </section>

        <section className="achievements">
          <h2>Our Achievements</h2>
          <div className="stats">
            <div>
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>300+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Contacto;
