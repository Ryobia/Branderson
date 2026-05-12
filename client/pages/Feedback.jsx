import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    game: 'Idle Rain',
    type: 'Bug Report',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      name: formData.name || 'Anonymous',
      game: formData.game,
      type: formData.type,
      message: formData.message,
    };

    emailjs.send('service_jfrkuz5', 'template_551zaxg', templateParams, 'ffjDONZH-RUJMA6Wj')
      .then((response) => console.log('Feedback sent!', response.status, response.text))
      .catch((err) => console.error('Feedback failed...', err));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 md:py-24 max-w-2xl mx-auto text-center"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-teal-200 dark:border-teal-900/50 p-8 md:p-12 transition-colors">
          <div className="text-6xl mb-6">🙌</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-600 dark:text-teal-500 mb-4 tracking-tight">Thank You!</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Your feedback is invaluable and helps make the games better for everyone.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-teal-600 dark:text-teal-400 font-medium hover:underline"
          >
            Submit another response
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-12 md:py-20 max-w-3xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Tester Feedback</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 transition-colors">
          Found a bug? Have an idea? Let me know below!
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-10 transition-colors">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Name / Alias (Optional)</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors"
                placeholder="Player1"
              />
            </div>
            <div>
              <label htmlFor="game" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Game</label>
              <select 
                id="game" 
                name="game"
                value={formData.game}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors"
              >
                <option value="Idle Rain">Idle Rain</option>
                <option value="Atomic Allies">Atomic Allies</option>
                <option value="Other">Other / General</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Feedback Type</label>
            <select 
              id="type" 
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors"
            >
              <option value="Bug Report">Bug Report 🐛</option>
              <option value="Feature Request">Feature Request 💡</option>
              <option value="General Feedback">General Feedback 📝</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Message</label>
            <textarea 
              id="message" 
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors resize-none"
              placeholder="Describe what happened or what you'd like to see..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Feedback;