import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight transition-colors">
              Branderson.Studio
            </Link>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/studio" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Studio
              </Link>
              <Link to="/feedback" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Feedback
              </Link>
              <Link to="/contact" className="text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;