
import React, { useEffect, useState } from 'react';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import BlurBlob from './BlurBlob';

const App = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="bg-white dark:bg-[#050414] text-black dark:text-white min-h-screen transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-1 z-50 p-1 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white shadow-lg"
      >
        {theme === 'dark' ? '☀️ ' : '🌙 '}
      </button>

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 w-full h-full 
        [background-image:linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        [background-size:14px_24px] 
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)] 
        pointer-events-none z-0">
      </div>

      <div className="relative z-10 pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
