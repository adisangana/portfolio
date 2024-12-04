import React, { useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            threshold: 0.5,
        });
        const target = document.querySelector('#skills-section');
        if (target) observer.observe(target);

        return () => observer.disconnect();
    }, []);

    const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const progressBars = document.querySelectorAll('.progress');
                progressBars.forEach((progressBar) => {
                    const targetWidth = progressBar.getAttribute('data-progress');
                    progressBar.style.width = targetWidth;
                });
                observer.disconnect();
            }
        });
    };

    return (
        <div id="skills-section" className="hero-content hidden">
            <h1>Skills</h1>
            <div className="progress-bar-group">
                <div className="progress-bar-item">
                    <p>JavaScript</p>
                    <div className="progress-bar">
                        <div className="progress" data-progress="90%"></div>
                    </div>
                </div>
                <div className="progress-bar-item">
                    <p>Python</p>
                    <div className="progress-bar">
                        <div className="progress" data-progress="80%"></div>
                    </div>
                </div>
                <div className="progress-bar-item">
                    <p>C++</p>
                    <div className="progress-bar">
                        <div className="progress" data-progress="70%"></div>
                    </div>
                </div>
                <div className="progress-bar-item">
                    <p>React.js</p>
                    <div className="progress-bar">
                        <div className="progress" data-progress="75%"></div>
                    </div>
                </div>
                <div className="progress-bar-item">
                    <p>Node.js</p>
                    <div className="progress-bar">
                        <div className="progress" data-progress="65%"></div>
                    </div>
                </div>
                <div className="progress-bar-item">
                    <p>HTML/CSS</p>
                    <div className="progress-bar">
                        <div className="progress" data-progress="95%"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
