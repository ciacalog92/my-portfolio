import React, { useState } from 'react';
import './About.css';

function About() {
  const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV(!showCV);
  };

  return (
    <div className="about">
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

      <h2>Chi Sono</h2>
      <p>
        Ciao, sono Calogero Ciaccio, un Junior Front-End Developer appassionato di tecnologia e innovazione.
        La mia passione per lo sviluppo web mi spinge costantemente a imparare nuove tecnologie e a migliorare le mie competenze.
      </p>
      <h3>Le Mie Competenze</h3>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React.js</li>
        <li>Responsive Web Design</li>
        <li>Git e controllo versione</li>
        <li>UI/UX Design Basics</li>
      </ul>
      <h3>Formazione</h3>
      <p>
        Ho completato un Bootcamp intensivo di Front-End Development presso Epicode School,
        dove ho acquisito competenze pratiche e teoriche nel campo dello sviluppo web.
      </p>
      <h3>Obiettivi</h3>
      <p>
        Il mio obiettivo è di crescere come sviluppatore, lavorando su progetti stimolanti
        e contribuendo a creare esperienze web innovative e user-friendly.
      </p>
    </div>
  );
}

export default About;

