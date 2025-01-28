import React from 'react';
import './styles.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project One</h3>
          <p>Responsive website built with HTML, CSS, and JavaScript.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project Two</h3>
          <p>A React-based application with dynamic state management.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="portfolio-item">
          <img src="project3.jpg" alt="Project 3" />
          <h3>Project Three</h3>
          <p>Full-stack application built with Node.js and MongoDB.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
