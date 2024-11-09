import React from "react";

const Skills = () => {
  return (
    <div className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-gray-500 pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Beatae, sapiente?
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-down">Next.js</h2>
              <h2 data-aos="zoom-in-down">Adobe Photoshop</h2>
              <h2 data-aos="zoom-in-down">React.js</h2>
              <h2 data-aos="zoom-in-down">Adobe Illustrator</h2>
             
            </div>
            <div className="space-y-2">
            <h2 data-aos="zoom-in-down">Javascript</h2>
              <h2 data-aos="zoom-in-down">Tailwind</h2>
              <h2 data-aos="zoom-in-down">CSS</h2>
              <h2 data-aos="zoom-in-down">Typescript</h2>
              <h2 data-aos="zoom-in-down">HTML</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;