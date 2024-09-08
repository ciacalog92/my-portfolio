import React from 'react';
import './Home.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ChatBot from './ChatBot'; // Importa il componente ChatBot

function Home() {
  return (
    <div className="Home">
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
