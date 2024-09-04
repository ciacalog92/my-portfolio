import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';
import RotatingBorderDiv from './RotatingBorderDiv'; // Assicurati di avere il percorso corretto

function App() {
  return (
    <Router>
      <div className="App">
        <RotatingBorderDiv /> {/* Include qui il componente per l'effetto di animazione */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




