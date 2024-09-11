import React, { useState, useEffect, useRef } from "react"; // Add useRef here
import "./Home.css";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import ChatBot from "./ChatBot"; // Import the ChatBot component
import videoSrc from "../images/video.mp4"; // Import the video file
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

      <section class="black-section">
        <div class="scroll-container">
          <div class="page">
          <h3>STATIC WEBSITE</h3>
          <p>
            Creation of static and responsive websites with up to 5 pages, ideal
            for presenting your business online.
          </p>
          <p className="tech-stack">Technologies: HTML, CSS, JavaScript</p>
          <button className="discover-button">Discover</button>
          </div>
          <div class="page">
            <h3>Dynamic Website</h3>
            <p>
              Creation of dynamic websites with CMS (WordPress, Joomla),
              including advanced SEO and performance optimization.
            </p>
            <p className="tech-stack">
              Technologies: HTML, CSS, JavaScript, PHP, MySQL
            </p>
            <button className="discover-button">Discover</button>
          </div>
          <div class="page">
          <h3>E-Commerce Solutions</h3>
          <p>
            Design and development of customized e-commerce platforms, with CRM
            integration and automation tools.
          </p>
          <p className="tech-stack">
            Technologies: HTML, CSS, JavaScript, React, Node.js, MongoDB
          </p>
          <button className="discover-button">Discover</button>
          </div>
        </div>
      </section>
      {/* Card section */}
      <div className="card-container" ref={cardContainerRef}>
        <div className="card">
         
        </div>
        <div className="card">
          <h3>Dynamic Website</h3>
          <p>
            Creation of dynamic websites with CMS (WordPress, Joomla), including
            advanced SEO and performance optimization.
          </p>
          <p className="tech-stack">
            Technologies: HTML, CSS, JavaScript, PHP, MySQL
          </p>
          <button className="discover-button">Discover</button>
        </div>
        <div className="card">
          
        </div>
      </div>

      {/* Navigation dots */}
      <div className="pagination">
        {Array.from({ length: 3 }).map((_, index) => (
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
      <div className="social-icons">
        <a
          href="https://wa.me/393312997797"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/ciacciocalogero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* ChatBot positioned at the bottom right */}
      <div className="chatbot-container">
        <ChatBot />
      </div>
    </div>
  );
}

export default Home;
