import React, { useState } from 'react';
import './project.css';

import web from './web.webp';
import coding from './coding.webp';
import digital from './digital.webp';
import portfolio from './portfolio.jpg';
import idts from './idts.jpg';
import sparkon from './sparkon.jpg';

const Project = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Evision Technoserve (07/2021 – 10/2021)',
      description: 'Training and placement website using HTML, CSS, JS, Bootstrap, and PHP.',
      imageUrl: web,
      category: 'Corporate',
    },
    {
      title: 'Innovative Design Services (09/2021)',
      description: 'Responsive full-stack site with HTML5, CSS3, JS, and PHP. Led team and dev work.',
      imageUrl: coding,
      category: 'Corporate',
    },
    {
      title: 'Sparkon Engineers (02/2020 - 04/2020)',
      description: 'Corporate site using HTML, CSS, JS, Bootstrap. Directed QA and frontend tasks.',
      imageUrl: sparkon,
      category: 'Corporate',
    },
    {
      title: 'Portfolio Website (2024)',
      description: 'React-based personal portfolio with resume, project gallery, and contact form.',
      imageUrl: portfolio,
      category: 'Personal',
    },
    {
      title: 'LinkedIn clone',
      description: 'React-based Linked websites clone.',
      imageUrl: idts,
      category: 'Personal',
    },
    {
      title: 'SYF CSS Engagement – Capgemini (Dec 2021 – Oct 2024)',
      description: `Led full product cycle:
- UI in React.js, HTML, CSS, Bootstrap
- API integration
- Git/GitHub collaboration`,
      imageUrl: digital,
      category: 'Corporate',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  const categories = ['All', 'Personal', 'Corporate'];

  return (
    <section id="project" className="project-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <div
              className={`project-card ${flippedIndex === index ? 'flipped' : ''}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={project.imageUrl} alt={project.title} />
                  <h3>{project.title}</h3>
                </div>
                <div className="card-back">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
