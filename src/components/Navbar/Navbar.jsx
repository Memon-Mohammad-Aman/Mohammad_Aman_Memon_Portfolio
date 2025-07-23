

// export default Navbar;
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Certificate" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[15vw] ${
        isScrolled
          ? "bg-white/80 dark:bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-gray-900 dark:text-white">Mohammad Aman</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-gray-900 dark:text-white">Memon</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg text-gray-800 dark:text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Memon-Mohammad-Aman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl text-gray-800 dark:text-gray-300 hover:text-[#8245ec]" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-aman-memon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl text-gray-800 dark:text-gray-300 hover:text-[#8245ec]" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white dark:bg-[#050414] bg-opacity-90 dark:bg-opacity-70 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg text-gray-800 dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] transition ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/Memon-Mohammad-Aman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-aman-memon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
