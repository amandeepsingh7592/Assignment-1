import React from 'react';
import './styles.css';

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

export default Testimonials;
