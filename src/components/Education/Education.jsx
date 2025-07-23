
import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[10vw] font-sans bg-white text-black dark:bg-[#0a0a0f] dark:text-white transition-colors duration-300"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-widest drop-shadow-md">
          EDUCATION
        </h2>
        <div className="w-24 h-[3px] bg-purple-600 mx-auto mt-4 rounded-full shadow-md" />
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
          A journey through my academic milestones and foundational learning.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-purple-700/30 z-0 hidden sm:block" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-20 flex flex-col sm:flex-row items-center relative z-10 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 border-[4px] border-purple-300 rounded-full flex items-center justify-center z-20 shadow-md">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full rounded-full object-cover border border-white/20"
              />
            </div>

            {/* Card */}
            <div
              className={`mt-16 sm:mt-0 w-full sm:max-w-xl bg-[#f9f9fb] dark:bg-[#13131a] border border-gray-300 dark:border-[#2e2e3b] rounded-2xl shadow-xl p-6 backdrop-blur-lg hover:scale-[1.02] transition-all duration-300 ease-in-out ${
                index % 2 === 0
                  ? "sm:ml-24 text-left"
                  : "sm:mr-24 text-left sm:text-right"
              }`}
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                {edu.degree}
              </h3>
              <h4 className="text-lg mt-1">{edu.school}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {edu.date}
              </p>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-500 text-sm">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
