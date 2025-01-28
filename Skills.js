import React from 'react';
import './styles.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>HTML & CSS</h3>
          <div className="skill-bar html-bar"></div>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="skill-bar js-bar"></div>
        </div>
        <div className="skill">
          <h3>React</h3>
          <div className="skill-bar react-bar"></div>
        </div>
        <div className="skill">
          <h3>Node.js</h3>
          <div className="skill-bar node-bar"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
