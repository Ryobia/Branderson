import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Branderson.Studio. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-6 items-center">
          <a href="https://github.com/Ryobia" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/1branderson/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">LinkedIn</a>
          <Link to="/privacy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">App Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;