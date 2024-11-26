import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import ImageSlider from "../componentes/imagenes";
import "../styles/home.css";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      document.querySelector(".scroll-indicator").style.width = `${progress}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="scroll-indicator"></div>
      <main>
        <section className="welcome">
          <h1 className="company-name">All-Pro Drywall LLC</h1>
          <h2 className="company-motto">
            "Building quality and trust in every wall."
          </h2>
        </section>
        <section className="slider">
          <ImageSlider />
        </section>
        <section className="mission">
          <h2>Our Mission</h2>
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
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-slider">
            <p>"All-Pro Drywall is simply the best! Highly recommended!"</p>
            <p>"Great quality and on-time delivery. Couldn't be happier!"</p>
            <p>
              "Amazing attention to detail. Will definitely hire them again."
            </p>
          </div>
        </section>
        <section className="cta">
          <Link to="/contacto">
            <button className="btn-cta">Get a Free Quote</button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
