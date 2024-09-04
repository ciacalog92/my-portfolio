import React, { useState } from 'react';
import './Contacts.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Qui andrà la logica per inviare il form
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
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Il tuo nome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="La tua email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Il tuo messaggio"
            required
          />
          <button type="submit">Invia</button>
        </form>
      </section>
      <section className="social-links">
        <h2>Seguimi sui Social</h2>
        <a href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/tuousername" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Aggiungi altri link social se necessario */}
      </section>
    </div>
  );
}

export default Contacts;

