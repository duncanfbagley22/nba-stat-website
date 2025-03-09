import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About This Project</h1>
        <p className="about-subtitle">
          Exploring the NBA through data, trends, and historical firsts.
        </p>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>📖 The Idea Behind the Project</h2>
          <p>
            The NBA is more than just a game—it’s a constantly evolving story filled with firsts, 
            record-breaking moments, and fascinating statistics. This project was born out of a 
            passion for basketball and data analytics, aiming to highlight key milestones, trends, 
            and interesting stats in an engaging way.
          </p>
        </div>

        <div className="about-section">
          <h2>🛠️ Technologies Used</h2>
          <ul className="tech-list">
            <li><strong>React.js</strong> – For building a dynamic and interactive UI</li>
            <li><strong>CSS</strong> – To style components and ensure a clean look</li>
            <li><strong>JSON</strong> – For storing and managing statistical data</li>
            <li><strong>APIs</strong> – To fetch live NBA data (planned feature!)</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🚀 What’s Next?</h2>
          <p>
            The goal is to continuously improve and expand this project by incorporating real-time 
            stats, predictive analytics, and deeper insights into player performances. Stay tuned 
            for upcoming features!
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <p>Made by Duncan Bagley</p>
      </footer>
    </div>
  );
};

export default About;
