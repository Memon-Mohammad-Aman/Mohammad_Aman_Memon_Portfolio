
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Mohammad Aman Memon
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center mt-4 gap-4 sm:gap-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Certifications", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/AmaanMe54800548" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/mohammad-aman-memon/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/amaan_memon_7861/?hl=en",
            },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@Amaan_Memon" },
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/profile.php?id=100069807152122",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-1">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            📞 +91 9265588226
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            📧 amanmemon0014@gmail.com
          </p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          © 2025 Mohammad Aman Memon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
