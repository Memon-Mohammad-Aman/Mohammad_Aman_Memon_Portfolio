

// export default Skills;
import React from 'react';
import { SkillsInfo } from '../../constants';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen transition-colors duration-300 bg-white dark:bg-[#0b0f19] text-black dark:text-white">

      <div className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">SKILLS</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-700 dark:text-gray-400 text-center text-base sm:text-lg max-w-3xl mx-auto mb-12">
            A collection of my technical skills and tools that I regularly use to build projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 py-10 justify-between">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-100 dark:bg-gray-900 border dark:border-white border-gray-300 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4 text-center">
                {category.title}
              </h3>

              <Tilt
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
