import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
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

