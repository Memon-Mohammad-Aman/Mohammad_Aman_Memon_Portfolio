
import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-Skills-gradient dark:bg-gray-900 clip-path-custom"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">CERTIFICATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg font-semibold">
          A collection of my certificates and certifications
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-white h-full"></div>

        {/* Certificate Cards */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`mb-16 flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white dark:bg-gray-300 border-4 border-purple-600 w-10 h-10 rounded-full flex justify-center items-center">
                <img
                  src={experience.img}
                  alt="certificate"
                  className="w-6 h-6 object-contain rounded-full"
                />
              </div>
            </div>

            {/* Certificate Card */}
            <div
              className={`w-full sm:max-w-md p-4 rounded-2xl border border-gray-300 dark:border-white shadow-xl shadow-purple-600/20 backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-24" : "sm:mr-24"
              } mt-12 bg-white dark:bg-gray-800`}
            >
              <div className="w-full h-60 flex justify-center items-center">
                <img
                  src={experience.img}
                  alt="certificate"
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
