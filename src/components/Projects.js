import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import projectAnimation from '../animations/project.json'; // Assicurati che il percorso sia corretto
import './Projects.css'; 
import memoryMatchImage from '../images/gameplay.png';
import shop from '../images/shop.png'

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
    title: "To Do List",
    description: "A full-stack task management application with user authentication",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

function Projects() {
  return (
    <>
      {/* Contenitore separato per l'animazione Lottie */}
      <div className="lottie-animation-container">
        <Lottie animationData={projectAnimation} loop={true} style={{ width: '100%' }} />
        <h2>My Projects</h2>
      </div>

      {/* Contenitore dei progetti */}
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/projects/${project.id}`} className="view-project">View Project</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
