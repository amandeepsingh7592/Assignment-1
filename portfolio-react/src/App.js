import React from 'react';
import './App.css'; // Ensure you have your CSS in this file or adjust accordingly

// Hero Section
const Hero = () => {
  return (
    <header id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Amandeep Singh</h1>
        <p>Web Developer | UI/UX Designer</p>
        <a href="#about" className="cta-button">Learn More About Me</a>
      </div>
    </header>
  );
};

// About Section
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>Hello! I'm Amandeep Singh, a passionate web developer with a love for creating beautiful and functional websites. I specialize in front-end development and enjoy turning complex problems into simple, user-friendly solutions.</p>
      <p>I have a background in Web Development, and I’m constantly learning new technologies and improving my skills. When I’m not coding, you can find me exploring new tech trends, reading about web design, or working on personal projects.</p>
      <p>My goal is to build web applications that make an impact and provide users with meaningful experiences. Let's build something great together!</p>
    </section>
  );
};

// Skills Section
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

// Portfolio Section
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
        <img src="project1.jpg" alt="Project 1" />
<h3>Project One</h3>
<p>Responsive website built with HTML, CSS, and JavaScript.</p>
<button className="project-link" onClick={() => window.location.href = '#'}>View Project</button>
</div>
<div className="portfolio-item">
  <img src="project2.jpg" alt="Project 2" />
  <h3>Project Two</h3>
  <p>A React-based application with dynamic state management.</p>
  <button className="project-link" onClick={() => window.location.href = '#'}>View Project</button>
</div>
<div className="portfolio-item">
  <img src="project3.jpg" alt="Project 3" />
  <h3>Project Three</h3>
  <p>Full-stack application built with Node.js and MongoDB.</p>
  <button className="project-link" onClick={() => window.location.href = '#'}>View Project</button>
</div>
</div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What People Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"Amandeep is an excellent developer. He helped us build our website in record time!"</p>
          <h4>Gurpreet Singh</h4>
          <p>CEO, Tech Company</p>
        </div>
        <div className="testimonial">
          <p>"A fantastic experience working with Amandeep. Highly recommend!"</p>
          <h4>Mark Johnson</h4>
          <p>Lead Developer, Web Agency</p>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

// Footer Section
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Amandeep Singh. All Rights Reserved.</p>
      <div className="social-media">
      <a href="https://github.com/amandeepsingh7592" target="_blank" rel="noreferrer" title="GitHub">GitHub</a>
<a href="https://www.linkedin.com/in/amandeepsingh0366/" target="_blank" rel="noreferrer" title="LinkedIn">LinkedIn</a>


      </div>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
