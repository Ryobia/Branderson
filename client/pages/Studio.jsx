import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import atomicAlliesIcon from '../assets/icon_atomic.png';
import idleRainIcon from '../assets/icon_rain.png';
import bloomBattleIcon from '../assets/icon_bloom.svg';

const AppleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-1.07 1.73-.93 2.76 1.01.08 2.02-.51 2.64-1.26z" />
  </svg>
);

const GooglePlayIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.367-.61-.88-.61-1.46V3.274c0-.58.24-1.093.609-1.46zm11.242 11.244l2.502 2.503-11.838 6.77 9.336-9.273zm0-2.116L5.513 1.67l11.838 6.77-2.5 2.502zm1.472 1.058l3.774 2.159c.787.45.787 1.185 0 1.635l-3.774 2.16-2.228-2.227 2.228-2.227z" />
  </svg>
);

const GamepadIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="6" y1="12" x2="10" y2="12"></line>
    <line x1="8" y1="10" x2="8" y2="14"></line>
    <line x1="15" y1="13" x2="15.01" y2="13"></line>
    <line x1="18" y1="11" x2="18.01" y2="11"></line>
    <rect x="2" y="6" width="20" height="12" rx="6"></rect>
  </svg>
);

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
    platform: ['iOS', 'Android'],
    status: 'Available Now',
    appleStoreLink: 'https://apps.apple.com/us/app/idle-rain-asmr-zen-garden/id6786962649',
    googlePlayLink: 'https://play.google.com/store/apps/details?id=com.idlerain.atomic',
    image: idleRainIcon,
    privacyLink: '/privacy'
  },
  {
    id: 3,
    title: 'Bloom & Battle',
    genre: 'Plant Breeding / Auto Battler',
    description: 'A plant breeding and auto-battler where you breed plants together to create exciting fusions to take into the campaign against enemy pests. Features in-depth stats and passive traits to encourage min-maxing perfect specimens.',
    platform: ['iOS', 'Android'],
    status: 'Testing Soon',
    image: bloomBattleIcon
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
          <GamepadIcon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
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
               <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-white shadow-sm">
                 {game.status}
               </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wider transition-colors">{game.genre}</div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 transition-colors">{game.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed transition-colors">{game.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {game.platform.map((plat, index) => (
                  <span key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-semibold px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 transition-colors">
                    {plat}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950/50 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center mt-auto transition-colors">
              {game.appleStoreLink || game.googlePlayLink ? (
                <div className="grid grid-cols-2 gap-2.5 w-full">
                  {game.appleStoreLink && (
                    <a
                      href={game.appleStoreLink}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-bold py-2.5 px-3 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                      <span>App Store</span>
                    </a>
                  )}
                  {game.googlePlayLink && (
                    <a
                      href={game.googlePlayLink}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-bold py-2.5 px-3 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      <GooglePlayIcon className="w-4 h-4 fill-current shrink-0" />
                      <span>Google Play</span>
                    </a>
                  )}
                </div>
              ) : game.playLink ? (
                <a
                  href={game.playLink}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Play Now
                </a>
              ) : (
                <div className="w-full text-center py-2.5 px-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-sm font-bold border border-indigo-200/80 dark:border-indigo-800/80">
                  Testing Soon
                </div>
              )}
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
                  <div className="mb-1 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{selectedGame.genre}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">{selectedGame.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">{selectedGame.description}</p>
              <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
                {selectedGame.privacyLink ? (
                  <Link 
                    to={selectedGame.privacyLink} 
                    className="text-sm font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                ) : <div />}
                <div className="flex flex-wrap gap-2.5 items-center">
                  <button onClick={() => setSelectedGame(null)} className="px-4 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Close</button>
                  {selectedGame.appleStoreLink && (
                    <a
                      href={selectedGame.appleStoreLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                    >
                      <AppleIcon className="w-4 h-4 fill-current shrink-0" />
                      <span>App Store</span>
                    </a>
                  )}
                  {selectedGame.googlePlayLink && (
                    <a
                      href={selectedGame.googlePlayLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                    >
                      <GooglePlayIcon className="w-4 h-4 fill-current shrink-0" />
                      <span>Google Play</span>
                    </a>
                  )}
                  {selectedGame.playLink && (
                    <a href={selectedGame.playLink} target="_blank" rel="noreferrer" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm">Play Now &rarr;</a>
                  )}
                  {!selectedGame.appleStoreLink && !selectedGame.googlePlayLink && !selectedGame.playLink && (
                    <span className="inline-flex items-center px-4 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-sm font-bold border border-indigo-200/80 dark:border-indigo-800/80">
                      Testing Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Studio;