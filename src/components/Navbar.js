import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.svg';
import LottieMenuIcon from './LottieMenuIcon'; // Importa il componente Lottie

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" width={60} />
          <span className="typing-effect">I'm a Web Developer</span>
        </Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <LottieMenuIcon /> {/* Usa il componente Lottie qui */}
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          {/* Aggiungi i nuovi link per About e Contacts qui */}
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-links" onClick={() => setIsOpen(false)}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

