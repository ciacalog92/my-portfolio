import React from 'react';
import './ThemeToggle.css'; // Importa il file CSS per gli stili del ThemeToggle

function ThemeToggle({ toggleTheme, isDarkMode }) {
  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Passa alla modalità giorno' : 'Passa alla modalità notte'}
      </button>
    </div>
  );
}

export default ThemeToggle;
