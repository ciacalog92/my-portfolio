import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Navbar.css';
import LottieMenuIcon from './LottieMenuIcon';
import ThemeToggleButton from './ThemeToggleButton';
import { GiAbstract006 } from "react-icons/gi";

function Navbar({ handleShowLoadingScreen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIconClick = (event) => {
    event.preventDefault();
    setClickCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount === 10) {
        handleShowLoadingScreen();
        return 0;
      }

      return newCount;
    });
  };

  useEffect(() => {
    console.log(`Click count: ${clickCount}`);
  }, [clickCount]);

  const handlers = useSwipeable({
    onSwipedRight: () => setIsOpen(true),
    onSwipedLeft: () => setIsOpen(false),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <nav className="navbar" {...handlers}>
      <div className="navbar-container">
        <div onClick={handleIconClick} className="show-loading-button" type="button">
          <GiAbstract006 />
        </div>
        <ThemeToggleButton />
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
