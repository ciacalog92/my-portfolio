// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contacts from './components/Contacts';
import LoadingScreen from './components/LoadingScreen'; // Importa il componente LoadingScreen
import MemoryMatchGame from './components/MemoryMatchGame'; // Importa il componente MemoryMatchGame
import './App.css';

const getCurrentTheme = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark'; // Giorno: 7-18, Notte: 19-6
};

function App() {
  const [theme, setTheme] = useState(getCurrentTheme());
  const [loading, setLoading] = useState(false); // Imposta su false inizialmente
  const [gameMode, setGameMode] = useState(localStorage.getItem('gameMode') || null);

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(getCurrentTheme());
    };

    handleThemeChange(); // Imposta il tema all'avvio
    const intervalId = setInterval(handleThemeChange, 60000); // Controlla ogni minuto

    return () => clearInterval(intervalId); // Pulisce l'intervallo al dismontaggio
  }, []);

  useEffect(() => {
    if (!gameMode) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [gameMode]);

  const handleEnter = () => {
    setLoading(false);
    setGameMode('site'); // Imposta la modalità sito
    localStorage.setItem('gameMode', 'site'); // Salva la scelta in localStorage
  };

  const handlePlay = () => {
    setLoading(false);
    setGameMode('game'); // Imposta la modalità gioco
    localStorage.setItem('gameMode', 'game'); // Salva la scelta in localStorage
  };



  const handleShowLoadingScreen = () => {
    setLoading(true); // Mostra la LoadingScreen
    setGameMode(null); // Reimposta la modalità di gioco su null
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        {loading ? (
          <LoadingScreen onEnter={handleEnter} onPlay={handlePlay} />
        ) : (
          <>
            <Navbar handleShowLoadingScreen={handleShowLoadingScreen} />
            {gameMode === 'site' ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            ) : gameMode === 'game' ? (
              <MemoryMatchGame />
            ) : null}
          </>
        )}
      </div>
    </Router>
  );
}

export default App;



