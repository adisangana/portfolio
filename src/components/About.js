import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="hero-content">
      <h1>About Me</h1>
      <p>I'm Aditya Sangana GOAT, a passionate developer specializing in creative and intuitive digital experiences.</p>
      <div className="resume-section">
        <h2>Education</h2>
        <div id="education-content" className="resume-content">
          <h3>Washington University in St. Louis</h3>
          <p>Bachelor of Science in Computer Science, Minor in Architecture<br />August 2020 - May 2024</p>
        </div>
      </div>
      <div className="resume-section">
        <h2>Experience</h2>
        <div id="experience-content" className="resume-content">
          <h3>Software Engineering Intern - ABC Corp</h3>
          <p>May 2023 - August 2023</p>
          <ul>
            <li>Developed features for a web-based platform using React.js and Node.js.</li>
            <li>Improved performance by 30% by optimizing database queries.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
