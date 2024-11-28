import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import dos from "../assets/imagenes/dos.jpg";
import "./about.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="todo">
      <Header />
      <div className="centro">
        <div className="about-container">
          <div className="about-text">
            <h1>Who We Are</h1>
            <p>
              All-Pro Drywall LLC was founded by Arlen LeBaron five years ago in
              North Texas and has quickly become a trusted leader in the drywall
              industry. With a steadfast commitment to excellence, we prioritize
              quality craftsmanship and exceptional customer service in every
              project.
            </p>
            <p>
              At All-Pro Drywall, we believe our success is built on
              consistently meeting and exceeding our clients' expectations. Our
              skilled team of professionals brings years of experience and
              expertise to every job, ensuring that each installation and repair
              meets the highest industry standards.
            </p>
            <p>
              Customer satisfaction is at the core of our work. We listen
              closely to our clients' needs and work collaboratively to bring
              their vision to life. Whether it’s a residential renovation or a
              large-scale commercial build, All-Pro Drywall LLC is dedicated to
              delivering superior, lasting results.
            </p>
            <p>
              As we continue to grow, our commitment to quality and service
              remains unwavering, making us the preferred choice for drywall
              solutions in North Texas.
            </p>
          </div>

          <div className="about-image">
            <img src={dos} alt="Dos" className="dos" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
