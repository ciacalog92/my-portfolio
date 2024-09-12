import React, { useState } from 'react';
import './Contacts.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [valid, setValid] = useState({
    name: false,
    email: false
  });

  const validateField = (name, value) => {
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setValid({ ...valid, email: emailRegex.test(value) });
    } else if (name === "name") {
      setValid({ ...valid, name: value.trim().length > 0 });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grazie per il tuo messaggio! Ti risponderò presto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contacts">
      <h1>Contattami</h1>
      <section className="contact-info">
        <h2>Informazioni di Contatto</h2>
        <p>Email: caly92@live.it</p>
        <p>Telefono: (+39) 3312997797</p>
        <p>Indirizzo: Strada Cassia Nord, 61, 53100 Siena, Italia</p>
      </section>
      
      <section className="contact-form">
        <h2>Inviami un Messaggio</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Il tuo nome"
              className={valid.name ? "valid" : ""}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="La tua email"
              className={valid.email ? "valid" : ""}
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Il tuo messaggio"
            required
          />
          <button type="submit" className="submit-button">Invia</button>
        </form>
      </section>

      <div className="social-links">
        <h2>Seguimi sui Social</h2>
        <a href="https://wa.me/393312997797" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
        <a href="https://www.instagram.com/ciacciocalogero/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contacts;

