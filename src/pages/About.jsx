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
          <h2>The Idea Behind the Project</h2>
          <p>
            I love basketball and I love numbers. 
            From a young age I'd be reading boxscores in the newspaper or trying to analyze things. 
            At the same time, analytics have taken the sports world by storm. 
            As I've seen this pivot to an analytical approach, I've noticed that sometimes it goes a bit too far.
            I decided to create this project to show that while numbers are tracked, they don't always show anything useful.
            Data is kept locally, and then results are pushed to this page.
            Check back daily for updates.
          </p>
        </div>

        <div className="about-section">
          <h2>Technologies Used</h2>
          <ul className="tech-list">
          <li className="about-list-item"><strong>React.js</strong> – For creating reusable components and managing state to build the user interface</li>
          <li className="about-list-item"><strong>HTML/CSS</strong> – To structure and style content, creating a visually appealing and responsive design</li>
          <li className="about-list-item"><strong>Python</strong> – For performing backend logic, processing data, and interacting with local and external databases</li>
          <li className="about-list-item"><strong>SQL</strong> – For querying and managing relational databases to store and retrieve structured data</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>What’s Next?</h2>
          <p>
            To be honest, I'm not sure. 
            The goal was to create something that could be updated through a script automatically. 
            I may try to have job run so I don't have to do anything, but we'll see.
            In theory, I could also move all the data to the cloud to allow for a lot more interactivity, but that could be most costly. We'll see what's next...
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
