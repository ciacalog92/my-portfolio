// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import projectAnimation from '../animations/project.json';
import './Projects.css';
import memoryMatchImage from '../images/gameplay.png';
import shop from '../images/shop.png';
import obstacleImage from '../images/obstacle.png';
import homepageImage from '../images/homepage.png';

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website built with React and Node.js",
    image: shop
  },
  {
    id: 2,
    title: "Number Guessing Game",
    description: "A simple number guessing game built with React",
    image: "https://images.pexels.com/photos/1314543/pexels-photo-1314543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Memory Match Game",
    description: "A fun memory matching game built with React",
    image: memoryMatchImage
  },
  {
    id: 4,
    title: "Obstacle Game",
    description: "A thrilling obstacle game built with React",
    image: obstacleImage
  },
  {
    id: 5,
    title: "To Do List",
    description: "A full-stack task management application with user authentication",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Sitofixit",
    description: "Servizio di riparazione e assistenza per siti web: manutenzione, fix di bug, aggiornamenti e messa in sicurezza.",
    image: homepageImage,
    externalUrl: "https://sitofixit.netlify.app"
  }
];

function Projects() {
  return (
    <>
      <div className="lottie-animation-container">
        <Lottie animationData={projectAnimation} loop={true} style={{ width: '100%' }} />
        <h2>My Projects</h2>
      </div>

      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <img src={project.image} alt={`Anteprima del progetto ${project.title}`} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project"
                  aria-label={`Visita il sito ${project.title} (si apre in una nuova scheda)`}
                >
                  Visit Website
                </a>
              ) : (
                <Link
                  to={`/projects/${project.id}`}
                  className="view-project"
                  aria-label={`Apri i dettagli del progetto ${project.title}`}
                >
                  View Project
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
