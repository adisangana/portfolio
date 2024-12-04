import React, { useState } from 'react';
import './styles/Global.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  const showSection = (section) => {
    setCurrentSection(section);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#fff' : '#000';
    document.body.style.color = darkMode ? '#000' : '#fff';
  };

  return (
    <div className="App">
      <BackgroundAnimation darkMode={darkMode} />
      <Navigation showSection={showSection} toggleTheme={toggleTheme} />
      {currentSection === 'home' && <Hero />}
      {currentSection === 'about' && <About />}
      {currentSection === 'projects' && <Projects />}
      {currentSection === 'contact' && <Contact />}
      {currentSection === 'skills' && <Skills />}
    </div>
  );
};

export default App;
