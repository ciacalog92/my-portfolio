import React, { useState } from 'react';
import './GuessNumber.css';

const GuessNumber = () => {
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [, setAttempts] = useState(0);

  function handleGuess() {
    const num = parseInt(guess);

    if (isNaN(num)) {
      setMessage('Per favore, inserisci un numero valido.');
      return;
    }

    if (num < 1 || num > 100) {
      setMessage('Per favore, inserisci un numero tra 1 e 100.');
      return;
    }

    setAttempts(prevAttempts => {
      const newAttempts = prevAttempts + 1;

      // Provide feedback to the user including the number of attempts
      if (num === target) {
        setMessage(`Congratulazioni! Hai indovinato in ${newAttempts} tentativi.`);
      } else if (num < target) {
        setMessage(`Troppo basso. Prova di nuovo! Hai fatto ${newAttempts} tentativi.`);
      } else {
        setMessage(`Troppo alto. Prova di nuovo! Hai fatto ${newAttempts} tentativi.`);
      }

      return newAttempts;
    });
  }

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="guess-number">
      <h2>Indovina il Numero</h2>
      <p>Ho pensato a un numero tra 1 e 100. Prova a indovinarlo!</p>
      <input 
        type="number" 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Inserisci il tuo tentativo"
      />
      <button onClick={handleGuess}>Indovina</button>
      <button onClick={resetGame}>Nuova Partita</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default GuessNumber;
