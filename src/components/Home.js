import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ChatBot from "./ChatBot";
import videoSrc from "../images/video.mp4";
import Lottie from "lottie-react";
import wordpressIcon from "../images/wordpress.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import reactIcon from "../images/react.png";
import nodeIcon from "../images/nodejs.png";
import whatsappAnimation from "../animations/whatsapp.json";
import instagramAnimation from "../animations/instagram.json";
import linkedinAnimation from "../animations/linkedin.json";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const container = cardContainerRef.current;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setCurrentPage(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (index) => {
    const container = cardContainerRef.current;
    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: "smooth",
    });
    setCurrentPage(index);
  };

  return (
    <div className="Home">
      <section className="white-section">
        <div className="video-container">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="responsive-video"
          />
        </div>
      </section>

      <section className="black-section">
        <div className="page">
          <section className="black-section cta-and-skills-section">
            <div className="cta-content">
              <h2>Porta il tuo business al livello successivo</h2>
              <p>
                Trasformo le tue idee in siti web moderni, veloci e su misura.
                Sviluppo, restyling e assistenza: dalla landing page al
                gestionale, fino al servizio dedicato di riparazione siti
                <strong> Sitofixit</strong>. Richiedi una consulenza gratuita.
              </p>
              <Link to="/contacts" className="contact-button">
                Richiedi una consulenza gratuita
              </Link>
            </div>

            <div className="skills-content">
              <h2>Technologies We Use</h2>
              <p>
                Here are some of the key technologies that power our projects:
              </p>
              <div className="skills-icons">
                <img src={htmlIcon} alt="HTML" />
                <img src={cssIcon} alt="CSS" />
                <img src={jsIcon} alt="JavaScript" />
                <img src={reactIcon} alt="React" />
                <img src={nodeIcon} alt="Node.js" />
                <img src={wordpressIcon} alt="WordPress" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Card section */}
      <div className="card-container" ref={cardContainerRef}>
        <div className="card">
          <h3>Static Website</h3>
          <p>
            Creation of static and responsive websites
            <br /> with up to 5 pages, ideal for
            <br /> presenting your business.
          </p>
          <p className="tech-stack">Technologies: HTML, CSS, JavaScript</p>
          <Link to="/static-website" className="discover-button">Info</Link>
        </div>
        <div className="card">
          <h3>Dynamic Website</h3>
          <p>
            Creation of dynamic websites with CMS:
            <br /> (WordPress, Joomla), including advanced SEO and performance
            optimization.
          </p>
          <p className="tech-stack">
            Technologies:
            <br /> HTML, CSS, JavaScript, PHP, MySQL
          </p>
          <Link to="/dynamic-website" className="discover-button">Info</Link>
        </div>
        <div className="card">
          <h3>E-commerce Development</h3>
          <p>
            Build fully integrated e-commerce websites
            <br /> with secure payment gateways and
            <br /> inventory management.
          </p>
          <p className="tech-stack">
            Technologies:
            <br /> Shopify, WooCommerce, React, Node.js
          </p>
          <Link to="/ecommerce-development" className="discover-button">Info</Link>
        </div>
        <div className="card">
          <h3>Sitofixit · Assistenza siti web</h3>
          <p>
            Il tuo sito ha problemi, è lento o vulnerabile?
            <br /> Manutenzione, fix bug, aggiornamenti
            <br /> e messa in sicurezza.
          </p>
          <p className="tech-stack">
            WordPress · React · PHP · DevOps
          </p>
          <a
            className="discover-button"
            href="https://sitofixit.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scopri Sitofixit
          </a>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="pagination">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              currentPage === index ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* Social icons */}

      {/* Sezione vetrina + CTA finale */}
      <section className="showcase-section">
        <h2>Le mie creazioni parlano per me</h2>
        <p className="showcase-subtitle">
          Siti web, e-commerce, web app e giochi interattivi: ogni progetto è
          pensato su misura per i miei clienti. Dai un’occhiata al portfolio e
          scopri cosa posso realizzare per te.
        </p>
        <div className="showcase-actions">
          <Link to="/projects" className="showcase-cta primary">
            Vedi i progetti
          </Link>
          <Link to="/contacts" className="showcase-cta secondary">
            Parliamone — Contattami
          </Link>
        </div>
        <ul className="showcase-bullets">
          <li>✓ Consulenza iniziale gratuita</li>
          <li>✓ Preventivi chiari e senza sorprese</li>
          <li>✓ Assistenza post-lancio con Sitofixit</li>
        </ul>
      </section>

      {/* ChatBot positioned at the bottom right */}
      <div className="chatbot-container">
        <ChatBot />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-of-service">Terms of Service</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social-icons">
            <a
              href="https://wa.me/393312997797"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Lottie
                className="footer-social-icon"
                animationData={whatsappAnimation}
                loop={true}
                autoplay={true}
              />
            </a>
            <a
              href="https://www.instagram.com/ciacciocalogero/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Lottie
                className="footer-social-icon"
                animationData={instagramAnimation}
                loop={true}
                autoplay={true}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Lottie
                className="footer-social-icon"
                animationData={linkedinAnimation}
                loop={true}
                autoplay={true}
              />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
