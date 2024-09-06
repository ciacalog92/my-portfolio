import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GuessNumber from './GuessNumber';
import MiniEcommerce from './MiniEcommerce';
import ToDoList from './ToDoList';
import MemoryMatchGame from './MemoryMatchGame'; // Importa il gioco

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website built with React and Node.js",
    longDescription: "This e-commerce website provides a seamless shopping experience for users. It includes features such as product browsing, cart management, user authentication, and secure checkout process.",
    component: <MiniEcommerce />
  },
  {
    id: 2,
    title: "Number Guessing Game",
    description: "A simple number guessing game built with React",
    longDescription: "This is a fun and interactive number guessing game where players try to guess a randomly generated number between 1 and 100.",
    component: <GuessNumber />
  },
  {
    id: 3,
    title: "Memory Match Game", // Aggiungi il gioco Memory Match
    description: "A fun memory matching game built with React",
    longDescription: "This memory matching game challenges players to match pairs of animal cards. Flip the cards to find matches and see how many moves it takes to complete the game.",
    component: <MemoryMatchGame />
  },
  {
    id: 4,
    title: "To Do List",
    description: "A task management system built with React and Firebase",
    longDescription: "This task management system allows users to create, edit, and delete tasks. It also provides features such as task categorization and due date management.",
    component: <ToDoList />
  }
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.longDescription}</p>
      {project.component}
      <Link to="/projects" className="view-project">Back to Projects</Link>
    </div>
  );
}

export default ProjectDetail;



