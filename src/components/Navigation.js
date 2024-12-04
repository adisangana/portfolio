import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ showSection, toggleTheme }) => {
  return (
    <nav className="side-nav">
      <ul>
        <li><a href="#home" onClick={() => showSection('home')}>Home</a></li>
        <li><a href="#about" onClick={() => showSection('about')}>About</a></li>
        <li><a href="#projects" onClick={() => showSection('projects')}>Projects</a></li>
        <li><a href="#contact" onClick={() => showSection('contact')}>Contact</a></li>
        <li><a href="https://adisangana.github.io/myportfolio/#home">Portfolio 1.0</a></li>
      </ul>
      <button id="theme-switcher" className="btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navigation;
