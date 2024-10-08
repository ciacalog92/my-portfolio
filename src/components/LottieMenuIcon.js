import React, { useState, useCallback } from 'react';
import Lottie from 'react-lottie';
import animationData from '../animations/menu-animation.json';

const LottieMenuIcon = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = useCallback(() => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000); // Durata dell'animazione in millisecondi
  }, []);

  const defaultOptions = {
    loop: false, // Non ripetere l'animazione
    autoplay: false, // Non avviare automaticamente
    animationData: animationData,
  };

  return (
    <div onClick={handleClick}>
      <Lottie
        options={defaultOptions}
        height={55}
        width={55}
        isStopped={!isPlaying} // Controlla se l'animazione deve essere ferma
        isPaused={false}
      />
    </div>
  );
};

export default LottieMenuIcon;

