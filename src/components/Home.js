import React, { useState } from 'react';
import './Home.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ChatBot from './ChatBot'; // Importa il componente ChatBot

function Home() {
  const [showCV, setShowCV] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const toggleCV = () => {
    setShowCV(!showCV);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati del form:', formData);
  };

  return (
    <div className="Home">
      {/* Resto del contenuto della pagina */}
      <div className="profile-header">
        <img src={process.env.PUBLIC_URL + '/profile-pic.jpg'} alt="Calogero Ciaccio" className="profile-pic" />
        <h1>Calogero Ciaccio</h1>
        <p>Junior Front-End Developer</p>
      </div>

      <div className="cv-card" onClick={toggleCV}>
        <h2>Il Mio CV</h2>
        <p>Clicca per {showCV ? 'nascondere' : 'visualizzare'} il CV</p>
      </div>

      {showCV && (
        <div className="cv-content">
          <h2>Contatti</h2>
          <ul>
            <li>Email: caly92@live.it</li>
            <li>Telefono: (+39) 3312997797</li>
            <li>Indirizzo: Strada Cassia Nord, 61, 53100 Siena, Italia</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/" target="_blank" rel="noopener noreferrer">Profilo LinkedIn</a></li>
          </ul>

          <h2>Competenze Digitali</h2>
          <ul>
            <li>HTML, Javascript, JQuery, Ajax, Bootstrap, CSS</li>
            <li>Java Script, TypeScript, jQuery, AngularJS, React e Node.js</li>
            <li>Utilizzo sistemi Android e IOS</li>
            <li>Ottima competenza nell'uso di sistemi operativi Apple e Windows</li>
          </ul>

          <a href="/CV_CALOGERO_CIACCIO.pdf" download className="download-button">Scarica CV</a>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contattami</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
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

