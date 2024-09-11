import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import { ThemeContext } from '../components/ThemeContext';
import switchAnimation from '../animations/darkmode.json'; // Importa l'animazione per il bottone

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <Lottie 
        animationData={switchAnimation} 
        loop={false}
        play
        style={{ width: 60 , height: 60 }}
        // Passa una proprietà di animazione condizionale per cambiare l'animazione basata sulla modalità
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
          // Imposta la proprietà di animazione, se il tuo JSON supporta cambiamenti basati su un attributo specifico
        }}
      />
    </div>
  );
};

export default ThemeToggleButton;
