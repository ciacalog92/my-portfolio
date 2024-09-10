import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './GuessNumber.css';
import Lottie from 'lottie-react';
import number from '../animations/number.json'

const GuessNumber = () => {
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  function handleGuess() {
    const num = parseInt(guess);

    if (isNaN(num)) {
      setMessage('Please enter a valid number.');
      return;
    }

    if (num < 1 || num > 100) {
      setMessage('Please enter a number between 1 and 100.');
      return;
    }

    if (num === target) {
      setMessage('Congratulations! You guessed the number!');
      setShowConfetti(true);
    } else if (num < target) {
      setMessage('Too low. Try again!');
    } else {
      setMessage('Too high. Try again!');
    }
  }

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setShowConfetti(false);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Confetti duration is set to 5 seconds

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="guess-number">
      {showConfetti && <Confetti />}
      <div className="number-container" >
      <Lottie animationData={number} loop={true} style={{ width: '50%' }} />
      </div>
      <h2>Guess the Number</h2>
      <p>I have thought of a number between 1 and 100. Try to guess it!</p>
      <input 
        type="number" inputMode="numeric"
        value={guess} 
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={resetGame}>New Game</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default GuessNumber;
