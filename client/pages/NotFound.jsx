import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-16 md:py-24 text-center"
    >
      <div className="w-24 h-24 mx-auto mb-6 bg-slate-200 dark:bg-slate-800 rounded-3xl flex items-center justify-center shadow-sm dark:shadow-none transition-colors">
        <span className="text-4xl">🤔</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 dark:text-slate-100 mb-6 transition-colors">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-4 transition-colors">
        Page Not Found
      </h2>
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 transition-colors">
        Oops! It looks like the page you are looking for doesn't exist or might have been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-sm"
      >
        Return Home
      </Link>
    </motion.div>
  );
};

export default NotFound;