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
        <div class="page">
          <section className="black-section cta-and-skills-section">
            <div className="cta-content">
              <h2>Take Your Business to the Next Level</h2>
              <p>
                Ready to make your mark online? Whether you need a website or a
                custom web app, we provide tailor-made solutions that meet your
                unique needs. Let’s turn your ideas into reality!
              </p>
              <button className="contact-button">Start Your Project</button>
            </div>

            <div className="skills-content">
              <h2>Technologies We Use</h2>
              <p>
                Here are some of the key technologies that power our projects:
              </p>
              <div className="skills-icons">
                <img src="html-icon.png" alt="HTML" />
                <img src="css-icon.png" alt="CSS" />
                <img src="js-icon.png" alt="JavaScript" />
                <img src="react-icon.png" alt="React" />
                <img src="nodejs-icon.png" alt="Node.js" />
                <img src="wordpress-icon.png" alt="WordPress" />
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
            Creation of static and responsive websites with up to 5 pages, ideal
            for presenting your business.5
          </p>
          <p className="tech-stack">Technologies: HTML, CSS, JavaScript</p>
          <button className="discover-button">Discover</button>
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
          <h3>E-commerce Development</h3>
          <p>
            Build fully integrated e-commerce websites with secure payment
            gateways and inventory management.
          </p>
          <p className="tech-stack">
            Technologies: Shopify, WooCommerce, React, Node.js
          </p>
          <button className="discover-button">Discover</button>
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
