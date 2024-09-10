// src/components/LoadingScreen.js
import React from 'react';
import Lottie from 'lottie-react'; // Assicurati che 'lottie-react' sia installato
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import razzoAnimation from '../animations/razzo.json'; // Importa il file JSON
import './LoadingScreen.css';
import Heart from '../images/CP_HEART.gif';

function LoadingScreen({ onEnter, onPlay }) {
  return (
    <div className="loading-screen">
      <div className="animation-container">
        <Lottie animationData={razzoAnimation} loop={true} className="animation" />
      </div>
      <div className="loading-screen-content">
        <h1>Concratulazioni hai trovato<br></br> l'EASTER EGG!</h1>
        <button onClick={onEnter}>Entra nel sito</button>
      </div>
      <div className="heart-container">
        <img src={Heart} alt="Heart" className="heart" />
      </div>
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
    </div>

  );
}

export default LoadingScreen;
