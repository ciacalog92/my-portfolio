import React, { useState } from 'react';
import './About.css';

function About() {
  const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV(!showCV);
  };

  return (
    <div className="about">
      <div className="profile-header">
        <img src={process.env.PUBLIC_URL + '/profile-pic.jpg'} alt="Calogero Ciaccio" className="profile-pic" />
        <h1 className="name-gradient">Calogero Ciaccio</h1>
        <p>Web Developer & Web Desing</p>
      </div>

      <div className="cv-card" onClick={toggleCV}>
        <h2>My CV</h2>
        <p>Click to {showCV ? 'hide' : 'view'} the CV</p>
      </div>

      {showCV && (
        <div className="cv-content">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: caly92@live.it</li>
            <li>Phone: (+39) 3312997797</li>
            <li>Address: Strada Cassia Nord, 61, 53100 Siena, Italy</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/calogero-ciaccio-528a361a1/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          </ul>

          <h2>Digital Skills</h2>
          <ul>
            <li>HTML, JavaScript, JQuery, Ajax, Bootstrap, CSS</li>
            <li>JavaScript, TypeScript, jQuery, AngularJS, React, and Node.js</li>
            <li>Experience with Android and iOS systems</li>
            <li>Excellent proficiency with Apple and Windows operating systems</li>
          </ul>

          <a href="/CV_CALOGERO_CIACCIO.pdf" download className="download-button">Download CV</a>
        </div>
      )}

      <h2>About Me</h2>
      <p>
        Hi, I’m Calogero Ciaccio, a Junior Front-End Developer passionate about technology and innovation.
        My passion for web development constantly drives me to learn new technologies and improve my skills.
      </p>
      <h3>My Skills</h3>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>React.js</li>
        <li>Responsive Web Design</li>
        <li>Git and version control</li>
        <li>UI/UX Design Basics</li>
      </ul>
      <h3>Education</h3>
      <p>
        I completed an intensive Front-End Development Bootcamp at Epicode School,
        where I gained practical and theoretical skills in web development.
      </p>
      <h3>Goals</h3>
      <p>
        My goal is to grow as a developer, working on stimulating projects
        and contributing to creating innovative and user-friendly web experiences.
      </p>
    </div>
  );
}

export default About;

