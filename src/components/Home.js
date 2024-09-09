// Home.js
import React from 'react';
import './Home.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ChatBot from './ChatBot'; // Importa il componente ChatBot
import ComputerAnimation from './ComputerAnimation'; // Importa il componente ComputerAnimation

function Home() {
  return (
    <div className="Home">
      {/* Sezione header con animazione */}
      <div className="header-section">
        <h1>Web Developer & <br></br>Web Design</h1>
        <ComputerAnimation />
      </div>

      {/* Sezione delle card */}
      <div className="card-container">
        <div className="card">
          <h3>Sito Web Statico</h3>
          <p>Realizzazione di siti web statici e responsive fino a 5 pagine, ideali per presentare la tua attività online.</p>
          <p className="tech-stack">Tecnologie: HTML, CSS, JavaScript</p>
          <button className="discover-button">Scopri</button>
        </div>
        <div className="card">
          <h3>Sito Web Dinamico</h3>
          <p>Creazione di siti web dinamici con CMS (WordPress, Joomla), inclusi SEO avanzato e ottimizzazione delle prestazioni.</p>
          <p className="tech-stack">Tecnologie: HTML, CSS, JavaScript, PHP, MySQL</p>
          <button className="discover-button">Scopri</button>
        </div>
        <div className="card">
          <h3>Soluzioni E-Commerce</h3>
          <p>Progettazione e sviluppo di piattaforme e-commerce personalizzate, con integrazione di CRM e strumenti di automazione.</p>
          <p className="tech-stack">Tecnologie: HTML, CSS, JavaScript, React, Node.js, MongoDB</p>
          <button className="discover-button">Scopri</button>
        </div>
      </div>

      {/* Form di contatto */}
      <form className="contact-form">
        <h2>Contattami</h2>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder="Messaggio"
          required
        />
        <button type="submit">Invia</button>
      </form>

      {/* Icone social */}
      <div className="social-icons">
        <a href="https://wa.me/393312997797" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/ciacciocalogero/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      {/* Posizione ChatBot in fondo a destra */}
      <div className="chatbot-container">
        <ChatBot />
      </div>
    </div>
  );
}

export default Home;
