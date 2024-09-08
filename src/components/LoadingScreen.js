// src/components/LoadingScreen.js
import React from 'react';
import Lottie from 'lottie-react'; // Assicurati che 'lottie-react' sia installato
import razzoAnimation from '../animations/razzo.json'; // Importa il file JSON
import './LoadingScreen.css';

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
    </div>
  );
}

export default LoadingScreen;
