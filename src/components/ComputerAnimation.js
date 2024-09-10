// src/components/ComputerAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import computerAnimation from '../animations/computer.json'; // Assicurati che il percorso sia corretto
import './ComputerAnimation.css'
const ComputerAnimation = () => {
  return (
    <div className="lottie-container">
      <Lottie animationData={computerAnimation} loop={true}/>
    </div>
  );
};

export default ComputerAnimation;
