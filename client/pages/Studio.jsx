import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import atomicAlliesIcon from '../assets/icon_atomic.png';
import idleRainIcon from '../assets/icon_rain.png';

const studioGames = [
  {
    id: 1,
    title: 'Atomic Allies',
    genre: 'Roguelike Adventure',
    description: 'A roguelike adventure where you battle using the periodic table. Strategize and combine elements to conquer enemies.',
    platform: ['iOS', 'Android', 'Web'],
    status: 'In Development',
    playLink: 'https://brandersonstudio.itch.io/atomicallies',
    image: atomicAlliesIcon
  },
  {
    id: 2,
    title: 'Idle Rain: ASMR Zen Garden',
    genre: 'Idle Progression',
    description: 'An idle progression game where you collect rain, buy flowers, and utilize prestige mechanics to grow your tranquil garden.',
    platform: ['iOS', 'Android', 'Web'],
    status: 'In Development',
    playLink: 'https://brandersonstudio.itch.io/idlerain',
    image: idleRainIcon
  }
];

const Studio = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-12 md:py-20"
    >
      <div className="text-center mb-12">
        <div className="w-24 h-24 mx-auto mb-6 bg-indigo-500/10 rounded-3xl flex items-center justify-center border border-indigo-500/20 shadow-sm dark:shadow-none transition-colors">
          <span className="text-4xl">🎮</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Game Studio</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
          Crafting immersive mobile games and interactive web experiences. 
          Check out our latest releases and upcoming titles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studioGames.map((game) => (
          <motion.div 
            key={game.id} 
            whileHover={{ y: -8 }}
            onClick={() => setSelectedGame(game)}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-md dark:hover:shadow-slate-800/50 transition-colors flex flex-col group cursor-pointer"
          >
            {/* Game Banner Placeholder */}
            <div className="h-48 bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
               {game.image ? (
                 <img src={game.image} alt={`${game.title} icon`} className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
               ) : (
                 <span className="text-slate-400 dark:text-slate-500 font-medium group-hover:scale-110 transition-transform duration-300">Game Art Placeholder</span>
               )}
               <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                 {game.status}
               </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wider transition-colors">{game.genre}</div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 transition-colors">{game.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed transition-colors">{game.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {game.platform.map((plat, index) => (
                  <span key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 transition-colors">
                    {plat}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950/50 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center mt-auto transition-colors">
              <a href={game.playLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="w-full text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-bold py-2 px-4 rounded transition-colors shadow-sm cursor-pointer">
                Play Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGame(null)}
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
                {selectedGame.image && (
                  <img src={selectedGame.image} alt={`${selectedGame.title} icon`} className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md rounded-xl" />
                )}
                <div>
                  <div className="mb-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{selectedGame.genre}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">{selectedGame.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">{selectedGame.description}</p>
              <div className="flex justify-end gap-3 md:gap-4">
                <button onClick={() => setSelectedGame(null)} className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Close</button>
                <a href={selectedGame.playLink} target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">Play Now &rarr;</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Studio;