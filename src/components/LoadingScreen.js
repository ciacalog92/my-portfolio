// src/components/LoadingScreen.js
import React from 'react';
import './LoadingScreen.css';

function LoadingScreen({ onEnter, onPlay }) {
  return (
    <div className="loading-screen">
      <h1>Benvenuto!</h1>
      <button onClick={onEnter}>Entra nel sito</button>
      <button onClick={onPlay}>Gioca</button>
    </div>
  );
}

export default LoadingScreen;
