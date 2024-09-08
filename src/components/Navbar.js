import React, { useState } from 'react';
import './Navbar.css';
import LottieMenuIcon from './LottieMenuIcon';
import ThemeToggleButton from './ThemeToggleButton'; // Importa il nuovo componente

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
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
