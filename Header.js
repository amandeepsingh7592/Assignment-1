import React from 'react';
import './styles.css';

const Header = () => {
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

export default Header;
