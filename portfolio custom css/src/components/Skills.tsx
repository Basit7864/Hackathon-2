import React from "react";
import "../app/styles/skills.css"; // Import the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        {/* First Column: Heading and Paragraph */}
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-text">
          I'm a graphic designer and I design logos, brochures, web designing, flyers, business cards, invitation cards, & much more designs new 
          to relate with graphic designing.
          </p>
        </div>

        {/* Second Column: Skills */}
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;