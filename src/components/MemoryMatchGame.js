// src/components/MemoryMatchGame.js
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './MemoryMatchGame.css';
import Confetti from 'react-confetti';
import dogImage from '../images/cardback.png';
import catImage from '../images/cardback.png';
import fishImage from '../images/cardback.png';
import pandaImage from '../images/cardback.png';
import tigerImage from '../images/cardback.png';
import monkeyImage from '../images/cardback.png';
import lionImage from '../images/cardback.png';
import koalaImage from '../images/cardback.png';
import gameTitleImage from '../images/memory-match-game.png';

function MemoryMatchGame() {
  const navigate = useNavigate(); // Inizializza useNavigate
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const gameRef = useRef(null);

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
    <div className="memory-game" ref={gameRef}>
      {gameCompleted && (
        <Confetti
          width={1300}
          height={1000}
          numberOfPieces={1000}
          recycle={false}
        />
      )}
      <img src={gameTitleImage} alt="Memory Match Game" className="game-title-image" />
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
      <button className="back-button" onClick={() => navigate('/')}>Torna alla Home</button>
    </div>
  );
}

export default MemoryMatchGame;

