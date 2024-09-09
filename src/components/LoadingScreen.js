// src/components/LoadingScreen.js
import React from 'react';
import Lottie from 'lottie-react'; // Assicurati che 'lottie-react' sia installato
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
        <h1>Benvenuto!</h1>
        <button onClick={onEnter}>Entra nel sito</button>
        <button onClick={onPlay}>Gioca</button>
      </div>
      <div className="heart-container">
        <img src={Heart} alt="Heart" className="heart" />
      </div>
    </div>

  );
}

export default LoadingScreen;
