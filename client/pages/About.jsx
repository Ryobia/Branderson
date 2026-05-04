import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-12 md:py-20 max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 transition-colors">About Me</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 transition-colors">
          A little bit about who I am and what I do.
        </p>
      </div>
      
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-10 transition-colors">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Hi, I'm Brandon!</h2>
        
        <div className="space-y-4 text-slate-600 dark:text-slate-400 transition-colors leading-relaxed">
          <p>
            I'm a passionate MERN Stack Web Developer and Mobile Game Developer. I specialize in building high-performance web applications and bringing interactive, engaging experiences to life.
          </p>
          <p>
            With a strong foundation in React, Node.js, Express, and MongoDB, I love bridging the gap between standard web technology and game development. When I'm not coding full-stack architecture, I'm usually tinkering with game engines or exploring new ways to create immersive digital worlds.
          </p>
          <p>
            On the game studio side, I am highly experienced in the Godot engine. I've developed two apps using Godot: <strong>Atomic Allies</strong>, a roguelike adventure where you battle using the periodic table, and <strong>Idle Rain: ASMR Zen Garden</strong>, an idle progression game where the player collects rain, buys flowers, and uses prestige mechanics to grow.
          </p>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-10 mb-5 transition-colors">Core Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'React Native', 'Vite', 'Godot', 'Phaser.js', 'TypeScript'].map((tech) => (
            <span key={tech} className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 font-semibold px-3 py-1.5 rounded-lg border border-teal-200 dark:border-teal-800 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;