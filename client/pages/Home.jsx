import React from 'react';
import { Link } from 'react-router'; // Using Link for client-side routing
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col md:flex-row min-h-[75vh] w-full gap-6 py-6 md:py-10"
    >
      {/* Developer Portfolio Side */}
      <Link
        to="/projects"
        className="group relative flex-1 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-900 transition-all duration-500 ease-out hover:flex-[1.3] shadow-lg dark:shadow-none"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-slate-900/90 group-hover:from-teal-500/40 transition-colors duration-500 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-8 transform transition-transform duration-500 group-hover:scale-105">
          <div className="w-20 h-20 mx-auto mb-6 bg-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-500/30">
            <span className="text-3xl">💻</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Developer</h2>
          <p className="text-teal-100/80 text-lg max-w-sm mx-auto font-medium">MERN Stack Web Applications & Software Engineering</p>
          <div className="mt-8 inline-block px-8 py-3 border-2 border-teal-500/50 rounded-full text-teal-300 font-bold tracking-wide group-hover:bg-teal-500 group-hover:text-slate-900 transition-all duration-300">
            View Portfolio
          </div>
        </div>
      </Link>

      {/* Game Studio Side */}
      <Link
        to="/studio"
        className="group relative flex-1 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-900 transition-all duration-500 ease-out hover:flex-[1.3] shadow-lg dark:shadow-none"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 to-slate-900/90 group-hover:from-indigo-500/40 transition-colors duration-500 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-8 transform transition-transform duration-500 group-hover:scale-105">
          <div className="w-20 h-20 mx-auto mb-6 bg-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-indigo-500/30">
            <span className="text-3xl">🎮</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Game Studio</h2>
          <p className="text-indigo-100/80 text-lg max-w-sm mx-auto font-medium">Mobile Games, Interactive Experiences & Tools</p>
          <div className="mt-8 inline-block px-8 py-3 border-2 border-indigo-500/50 rounded-full text-indigo-300 font-bold tracking-wide group-hover:bg-indigo-500 group-hover:text-slate-900 transition-all duration-300">
            Enter Studio
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Home;