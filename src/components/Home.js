import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Confetti from 'react-confetti';
import ChatBot from './ChatBot'; // Importa il componente ChatBot

// Importa le immagini
import dogImage from '../images/cardback.png';
import catImage from '../images/cardback.png';
import fishImage from '../images/cardback.png';
import pandaImage from '../images/cardback.png';
import tigerImage from '../images/cardback.png';
import monkeyImage from '../images/cardback.png';
import lionImage from '../images/cardback.png';
import koalaImage from '../images/cardback.png';
import gameTitleImage from '../images/memory-match-game.png';

function Home() {
  const [showCV, setShowCV] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const gameRef = useRef(null);

  const toggleCV = () => {
    setShowCV(!showCV);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati del form:', formData);
  };

  useEffect(() => {
    initializeCards();
  }, []);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameCompleted(true);
    }
  }, [matchedCards, cards]);

  const initializeCards = () => {
    const initialCards = [
      { id: 1, content: '🐶', image: dogImage },
      { id: 2, content: '🐱', image: catImage },
      { id: 3, content: '🦊', image: fishImage },
      { id: 4, content: '🐼', image: pandaImage },
      { id: 5, content: '🐯', image: tigerImage },
      { id: 6, content: '🐵', image: monkeyImage },
      { id: 7, content: '🦁', image: lionImage },
      { id: 8, content: '🐨', image: koalaImage },
    ];
    const shuffledCards = [...initialCards, ...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setMatchedCards([]);
    setMoves(0);
    setGameCompleted(false);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].content === cards[secondIndex].content) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="Home">
      {/* Sezione del gioco Memory Match posizionata in cima alla pagina */}
      <div className="memory-game" ref={gameRef}>
        {gameCompleted && (
          <Confetti
            width={1300}
            height={1000}
            numberOfPieces={1000}
            recycle={false}
          />
        )}
        <img src={gameTitleImage} alt="Memory Match Game" className="game-title-image" /> {/* Immagine del titolo */}    
        <div className="memory-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`memory-card ${flippedCards.includes(index) || matchedCards.includes(index) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-front">{card.content}</div>
              <div className="card-back">
                <img src={card.image} alt="Card Back" />
              </div>
            </div>
          ))}
        </div>
        {gameCompleted && (
          <button onClick={initializeCards} className="restart-button">
            Ricomincia il gioco
          </button>
        )}
      </div>

      {/* Resto del contenuto della pagina */}
      <div className="profile-header">
        <img src={process.env.PUBLIC_URL + '/profile-pic.jpg'} alt="Calogero Ciaccio" className="profile-pic" />
        <h1>Calogero Ciaccio</h1>
        <p>Junior Front-End Developer</p>
      </div>

      <div className="cv-card" onClick={toggleCV}>
        <h2>Il Mio CV</h2>
        <p>Clicca per {showCV ? 'nascondere' : 'visualizzare'} il CV</p>
      </div>

      {showCV && (
         <div className="cv-content">
         <h2>Contatti</h2>
         <ul>
           <li>Email: caly92@live.it</li>
           <li>Telefono: (+39) 3312997797</li>
           <li>Indirizzo: Strada Cassia Nord, 61, 53100 Siena, Italia</li>
           <li>LinkedIn: <a href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/" target="_blank" rel="noopener noreferrer">Profilo LinkedIn</a></li>
         </ul>

         <h2>Competenze Digitali</h2>
         <ul>
           <li>HTML, Javascript, JQuery, Ajax, Bootstrap, CSS</li>
           <li>Java Script, TypeScript, jQuery, AngularJS, React e Node.js</li>
           <li>Utilizzo sistemi Android e IOS</li>
           <li>Ottima competenza nell'uso di sistemi operativi Apple e Windows</li>
         </ul>

         <a href="/CV_CALOGERO_CIACCIO.pdf" download className="download-button">Scarica CV</a>
       </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contattami</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Messaggio"
          required
        />
        <button type="submit">Invia</button>
      </form>

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

      {/* Posizione ChatBot in fondo a destra */}
      <div className="chatbot-container">
        <ChatBot />
      </div>
    </div>
  );
}

export default Home;
