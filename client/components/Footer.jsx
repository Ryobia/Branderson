import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Branderson. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;