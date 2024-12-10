import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/home.css";
import dh from "../assets/imagenes/dh.jpeg";
import residential from "../assets/imagenes/residential.jpeg";
import commercial from "../assets/imagenes/commercial.jpeg";
import modern from "../assets/imagenes/modern.jpeg";

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

        <section className="projects">
          <h2>Our Recent Projects</h2>
          <div className="project-gallery">
            <div className="project-card">
              <img src={residential} alt="Project 1" />
              <p>Residential Wall Finishing</p>
            </div>
            <div className="project-card">
              <img src={commercial} alt="Project 2" />
              <p>Commercial Interior Design</p>
            </div>
            <div className="project-card">
              <img src={modern} alt="Project 3" />
              <p>Modern Office Space</p>
            </div>
          </div>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At All-Pro Drywall, we are committed to delivering exceptional
            quality and craftsmanship. We understand the importance of deadlines
            and ensure that our clients can rely on us to meet theirs without
            compromising on the quality of our work.
          </p>
          <p>
            Our focus on customer satisfaction drives everything we do. We
            believe that clear communication, attention to detail, and a
            commitment to excellence set us apart. We work diligently to meet
            our customers’ needs, transforming their visions into reality while
            providing a seamless and positive experience throughout the process.
          </p>
          <p>
            At All-Pro Drywall, we are not just about finishing projects; we are
            about creating lasting impressions through our work and fostering
            trust through our dedication to quality and service.
          </p>
        </section>

        <section className="why-us">
          <h2>Why Choose Us?</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Reliable Service</h3>
              <p>On-time delivery for every project.</p>
            </div>
            <div className="benefit">
              <h3>Experienced Team</h3>
              <p>Over 15 years of industry experience.</p>
            </div>
            <div className="benefit">
              <h3>Quality Assurance</h3>
              <p>Using the best materials and techniques.</p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <img src={dh} alt="Client 1" className="testimonial-photo" />
              <p className="testimonial-text">
                "Amazing attention to detail. Will definitely hire them again."
              </p>
              <p className="testimonial-name">- Alex Johnson</p>
            </div>
            <div className="testimonial">
              <img
                src={residential}
                alt="Client 2"
                className="testimonial-photo"
              />
              <p className="testimonial-text">
                "Great service and excellent communication throughout the
                project!"
              </p>
              <p className="testimonial-name">- Sarah Lee</p>
            </div>
            <div className="testimonial">
              <img
                src={commercial}
                alt="Client 3"
                className="testimonial-photo"
              />
              <p className="testimonial-text">
                "I am very pleased with the professionalism and quality."
              </p>
              <p className="testimonial-name">- James Carter</p>
            </div>
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
