import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="hero-content">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h2>News Sharing Site</h2>
          <p>A modern, responsive web design project focused on interactivity and user experience.</p>
          <a href="http://ec2-18-221-136-117.us-east-2.compute.amazonaws.com/login.php" className="btn">View Project</a>
        </div>
        <div className="project-card">
          <h2>Stock Price Analysis</h2>
          <p>Using machine learning techniques to predict stock prices based on historical data.</p>
          <a href="https://stockpriceanalysis.streamlit.app/" className="btn">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
