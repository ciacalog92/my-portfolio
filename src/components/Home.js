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
        <h1>FrontEnd Developer</h1>
        <ComputerAnimation />
      </div>

      {/* Sezione delle card */}
      <div className="card-container">
        <div className="card">
          <h3>Card Title 1</h3>
          <p>Some content for the first card.</p>
        </div>
        <div className="card">
          <h3>Card Title 2</h3>
          <p>Some content for the second card.</p>
        </div>
        <div className="card">
          <h3>Card Title 3</h3>
          <p>Some content for the third card.</p>
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
