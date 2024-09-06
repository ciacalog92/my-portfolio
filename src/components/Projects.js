import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; 

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website built with React and Node.js",
    image: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Number Guessing Game",
    description: "A simple number guessing game built with React",
    image: "https://images.pexels.com/photos/1314543/pexels-photo-1314543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Memory Match Game", // Aggiungi il gioco nella lista dei progetti
    description: "A fun memory matching game built with React",
    image: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    <div className="projects-container">
      <h2>My Projects</h2>
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
  );
}

export default Projects;

