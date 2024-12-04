import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content active">
        <h1>Aditya Sangana</h1>
        <p>Designing creative digital experiences</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
