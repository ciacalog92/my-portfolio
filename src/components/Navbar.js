import React, { useState, useEffect } from 'react';
import './Navbar.css';
import LottieMenuIcon from './LottieMenuIcon';
import ThemeToggleButton from './ThemeToggleButton'; // Importa il nuovo componente
import { GiAbstract006 } from "react-icons/gi";

function Navbar({ handleShowLoadingScreen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Variabile per il conteggio dei clic

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll verso il basso, nasconde la navbar
        navbar.classList.add('hidden');
      } else {
        // Scroll verso l'alto, mostra la navbar
        navbar.classList.remove('hidden');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Per evitare valori negativi su dispositivi mobili
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function per rimuovere il listener quando il componente viene smontato
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIconClick = (event) => {
    event.preventDefault(); // Prevenire l'azione predefinita del link
    setClickCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount === 10) {
        handleShowLoadingScreen(); // Mostra la LoadingScreen quando si raggiungono 5 clic
        return 0; // Resetta il contatore dei clic
      }

      return newCount;
    });
  };

  // Aggiungi il valore di clickCount per evitare l'avviso
  useEffect(() => {
    console.log(`Click count: ${clickCount}`);
  }, [clickCount]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div onClick={handleIconClick} className="show-loading-button" type="button">
          <GiAbstract006 />
        </div>
        <ThemeToggleButton /> {/* Usa il bottone animato */}
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <LottieMenuIcon />
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-links" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contacts" className="nav-links" onClick={() => setIsOpen(false)}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
