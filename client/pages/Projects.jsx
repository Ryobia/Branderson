import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Expanded mock data for the dedicated projects page
const allProjects = [
  {
    id: 1,
    title: 'Epic Quest: The Mobile RPG',
    category: 'Mobile Game',
    description: 'A highly engaging mobile RPG built with React Native and Node.js. Features real-time multiplayer battles and intricate guild systems.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    demoLink: '#',
    githubLink: '#',
    image: '',
  },
  {
    id: 2,
    title: 'TaskMaster Pro',
    category: 'Web App',
    description: 'A full-stack MERN application for managing studio workflows and tracking game development progress across agile teams.',
    techStack: ['React', 'Express', 'TailwindCSS', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
    image: '',
  },
  {
    id: 3,
    title: 'LevelUp Engine',
    category: 'Game Engine',
    description: 'A custom 2D game engine designed for web-based mini-games. Exportable to mobile wrappers.',
    techStack: ['HTML5 Canvas', 'TypeScript', 'Vite'],
    demoLink: '#',
    githubLink: '#',
    image: '',
  },
  {
    id: 4,
    title: 'Galactic Drifter',
    category: 'Web Game',
    description: 'An arcade-style space shooter playable directly in the browser. Features global leaderboards and daily challenges.',
    techStack: ['Phaser.js', 'Express', 'Redis'],
    demoLink: '#',
    githubLink: '#',
    image: '',
  },
  {
    id: 5,
    title: 'Developer Portfolio',
    category: 'Web App',
    description: 'The very site you are looking at right now! Built to showcase my journey as a developer and host web-playable versions of my games.',
    techStack: ['React', 'TailwindCSS', 'Vite', 'Express'],
    demoLink: '#',
    githubLink: '#',
    image: '',
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-12 md:py-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 transition-colors">My Projects</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
          A collection of my web applications, mobile games, and tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <motion.div 
            key={project.id} 
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProject(project)}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md dark:hover:shadow-slate-800/50 transition-colors flex flex-col group cursor-pointer"
          >
            <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
               {project.image ? (
                 <img src={project.image} alt={`${project.title} icon`} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
               ) : (
                 <span className="text-slate-400 dark:text-slate-500 font-medium group-hover:scale-110 transition-transform duration-300">Project Image Preview</span>
               )}
               <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 dark:text-teal-400 shadow-sm transition-colors">
                 {project.category}
               </div>
            </div>
            <div className="p-6 flex-grow">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 transition-colors">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed transition-colors">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-xs font-semibold px-2.5 py-1 rounded border border-teal-200 dark:border-teal-800 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950/50 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center mt-auto transition-colors">
              <a href={project.demoLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-500 hover:text-teal-800 dark:hover:text-teal-400 text-sm font-bold transition-colors">View Project &rarr;</a>
              <a href={project.githubLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-bold transition-colors">Source Code</a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 max-w-lg w-full relative"
            >
              <div className="flex items-center gap-4 mb-6">
                {selectedProject.image && (
                  <img src={selectedProject.image} alt={`${selectedProject.title} icon`} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md rounded-xl" />
                )}
                <div>
                  <div className="mb-1 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">{selectedProject.category}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">{selectedProject.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{selectedProject.description}</p>
              <div className="flex justify-end gap-3 md:gap-4">
                <button onClick={() => setSelectedProject(null)} className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Close</button>
                <a href={selectedProject.demoLink} target="_blank" rel="noreferrer" className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">View Project &rarr;</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;