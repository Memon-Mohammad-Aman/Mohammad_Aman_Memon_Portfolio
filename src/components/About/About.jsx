// import React from "react";
// import { Typewriter } from "react-simple-typewriter";
// import { Tilt } from 'react-tilt';

// import profile from "../../assets/pro.png";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
//     >
//       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
//         {/* Left Text Content */}
//         <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
//             Hi, I am
//           </h1>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
//             Mohammad Aman Memon
//           </h2>
//           <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight">
//             I am a{" "}
//             <span className="text-[#8245ec]">
//               <Typewriter
//                 words={["Fullstack Web Developer", "Web Designer", "UI/UX Designer"]}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={70}
//                 deleteSpeed={50}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h3>
//           <p className="text-base sm:text-lg md:text-lg text-gray-400 font-semibold mb-4 leading-tight">
//             I am an aspiring Fullstack Web Developer with a passion for creating beautiful and functional websites.
//             I am a quick learner and always looking to improve my skills.
//           </p>

//           <a
//             href="https://drive.google.com/file/d/14X2yJoFL-9QnppnJKvVS4vADbzPLWyWE/view?usp=sharing"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
//             style={{
//               background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//               boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
//             }}
//           >
//             DOWNLOAD CV
//           </a>
//         </div>

//         {/* Right Profile Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Tilt
//             options={{
//               max: 25,
//               scale: 1.05,
//               speed: 1000,
//               glare: true,
//               "max-glare": 0.3,
//             }}
//             className="focus:outline-none"
//           >
//             <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_0_25px_#8245ec80]">
//               <img
//                 src={profile}
//                 alt="Mohammad Aman Memon"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';

import profile from "../../assets/pro.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 text-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Mohammad Aman Memon
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            I am a{" "}
            <span className="text-[#8245ec] dark:text-purple-400">
              <Typewriter
                words={[
                  "Fullstack Web Developer",
                  "Web Designer",
                  "UI/UX Designer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-300 font-semibold mb-4 leading-tight">
            I am an aspiring Fullstack Web Developer with a passion for creating beautiful and functional websites.
            I am a quick learner and always looking to improve my skills.
          </p>

          <a
            href="https://drive.google.com/file/d/14X2yJoFL-9QnppnJKvVS4vADbzPLWyWE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 text-white"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            options={{
              max: 25,
              scale: 1.05,
              speed: 1000,
              glare: true,
              "max-glare": 0.3,
            }}
            className="focus:outline-none"
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-[0_0_25px_#8245ec80]">
              <img
                src={profile}
                alt="Mohammad Aman Memon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
