// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../styles/home.css";
import ImageSlider from "../componentes/imagenes";
import Footer from "../componentes/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="todo">
      <header className="parte-arriba">
        <img src={logo} alt="Logo" className="milogo" />
        <nav className="botones">
          <button onClick={() => navigate("/contacto")}>Contacto</button>
          <button onClick={() => navigate("/servicios")}>Servicios</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/proyectos")}>Proyectos</button>
        </nav>
      </header>

      <main className="centro">
        <h1>ALL Pro Drywall</h1>
        <h2 className="lema">
          "Passion for details, commitment to excellence"
        </h2>
        <div className="componentedeimagenes">
          <ImageSlider />
        </div>
        <section className="mission-statement">
          <h2>Mission Statement of All-Pro Drywall LLC</h2>
          <p>
            At All-Pro Drywall LLC, our mission is to deliver exceptional
            quality and unparalleled customer service in every project we
            undertake. We are dedicated to completing each job on time, ensuring
            that our clients can rely on us to meet their deadlines without
            compromising on the quality of our work.
          </p>
          <p>
            Our focus on customer satisfaction drives everything we do. We
            believe that clear communication, attention to detail, and a
            commitment to excellence are essential to building lasting
            relationships with our clients. We strive to understand and fulfill
            our customers’ needs, transforming their visions into reality while
            providing a seamless and positive experience throughout the process.
          </p>
          <p>
            At All-Pro Drywall, we are not just about finishing projects; we are
            about creating lasting impressions through our work and fostering
            trust through our dedication to quality and service.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
