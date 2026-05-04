import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-12 md:py-20 max-w-3xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 transition-colors">Get In Touch</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 transition-colors">
          Have a project in mind or just want to chat about game dev? I'd love to hear from you!
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-10 transition-colors">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 transition-colors">Message</label>
            <textarea 
              id="message" 
              rows="5"
              className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-slate-900 dark:text-slate-100 outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;