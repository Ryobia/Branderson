import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

const Menu = () => {
  const [toppings, setToppings] = useState({
    butter: false,
    syrup: false,
    whippedCream: false,
    strawberries: false,
    chocolateChips: false,
    peanutButter: false,
    nutella: false,
  });
  const [drinks, setDrinks] = useState({
    orangeJuice: false,
    milk: false,
    water: false,
    capriSun: false,
  });
  const [sides, setSides] = useState({
    bacon: false,
    sausage: false,
    eggs: false,
  });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcodeDate, setPasscodeDate] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  const handleToppingChange = (e) => {
    setToppings({ ...toppings, [e.target.name]: e.target.checked });
  };

  const handleDrinkChange = (e) => {
    setDrinks({ ...drinks, [e.target.name]: e.target.checked });
  };

  const handleSideChange = (e) => {
    setSides({ ...sides, [e.target.name]: e.target.checked });
  };

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    if (passcodeDate === '2020-10-02') {
      setIsAuthenticated(true);
    } else {
      setPasscodeError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the selected items into readable comma-separated strings
    const selectedToppings = Object.keys(toppings).filter(k => toppings[k]).join(', ');
    const selectedDrinks = Object.keys(drinks).filter(k => drinks[k]).join(', ');
    const selectedSides = Object.keys(sides).filter(k => sides[k]).join(', ');

    // Package up the order details for EmailJS
    const templateParams = {
      toppings: selectedToppings || 'None',
      drinks: selectedDrinks || 'None',
      sides: selectedSides || 'None',
      date: date,
      time: time,
      notes: notes || 'None',
    };

    // Send the email (runs asynchronously so the UI updates immediately)
    emailjs.send('service_jfrkuz5', 'template_cx1sww1', templateParams, 'ffjDONZH-RUJMA6Wj')
      .then((response) => console.log('Order sent!', response.status, response.text))
      .catch((err) => console.error('Order failed...', err));

    setSubmitted(true);
    
    // Fire off some festive Mother's Day confetti fireworks!
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#ffffff'] // Rose/pink theme
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 md:py-24 max-w-lg mx-auto text-center"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-rose-200 dark:border-rose-900/50 p-8 md:p-12">
          <div className="text-5xl mb-6">🔒💖</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-2 tracking-tight">Top Secret Menu</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Answer the security question to access your Mother's Day surprise.</p>
          <form onSubmit={handlePasscodeSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-rose-500 mb-2">When did you become a mother?</label>
              <input 
                type="date" 
                required 
                value={passcodeDate} 
                onChange={(e) => { setPasscodeDate(e.target.value); setPasscodeError(false); }} 
                className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border ${passcodeError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 dark:border-slate-700'} rounded-xl focus:ring-rose-500 focus:border-rose-500 text-slate-900 dark:text-slate-100 outline-none transition-colors text-center text-lg`} 
              />
              {passcodeError && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-2 font-medium">
                  That doesn't seem quite right, try again!
                </motion.p>
              )}
            </div>
            <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Unlock 🔓
            </button>
          </form>
        </div>
      </motion.div>
    );
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 md:py-24 max-w-2xl mx-auto text-center"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-rose-200 dark:border-rose-900/50 p-8 md:p-12">
          <div className="text-6xl mb-6">🧇❤️</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rose-500 mb-4 tracking-tight">Order Received!</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Your special Mother's Day breakfast in bed is officially scheduled for <br/> 
            <strong className="text-slate-800 dark:text-slate-200">{date} at {time}</strong>.
          </p>
          <p className="text-rose-400 font-medium italic">The chef is getting the waffle iron ready...</p>
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
      className="py-12 md:py-20 max-w-2xl mx-auto"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-500 mb-4 tracking-tight">Mother's Day Menu</h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Customize your perfect breakfast in bed. Happy Mother's Day! 🌷
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-10">
        {/* Main Course */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">Main Course</h2>
          <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-xl border border-rose-100 dark:border-rose-900/50 flex items-center">
            <span className="text-3xl mr-4">🧇</span>
            <div>
              <h3 className="font-bold text-rose-800 dark:text-rose-300 text-lg">Freshly Baked Belgian Waffles</h3>
              <p className="text-rose-600/80 dark:text-rose-400/80 text-sm">Crispy on the outside, fluffy on the inside.</p>
            </div>
          </div>
        </div>

        {/* Toppings Checklist */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Select Your Toppings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'butter', label: '🧈 Butter' },
              { id: 'syrup', label: '🍁 Warm Maple Syrup' },
              { id: 'whippedCream', label: '☁️ Whipped Cream' },
              { id: 'strawberries', label: '🍓 Fresh Strawberries' },
              { id: 'chocolateChips', label: '🍫 Chocolate Chips' },
              { id: 'peanutButter', label: '🥜 Peanut Butter' },
              { id: 'nutella', label: '🌰 Nutella' },
            ].map((topping) => (
              <motion.label 
                key={topping.id} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group"
              >
                <input
                  type="checkbox"
                  name={topping.id}
                  checked={toppings[topping.id]}
                  onChange={handleToppingChange}
                  className="w-5 h-5 text-rose-500 rounded border-slate-300 focus:ring-rose-500 focus:ring-offset-0 bg-transparent"
                />
                <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{topping.label}</span>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Drink Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Choose a Drink</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'orangeJuice', label: '🍊 Fresh Orange Juice' },
              { id: 'milk', label: '🥛 Cold Milk' },
              { id: 'water', label: '💧 Ice Water' },
              { id: 'capriSun', label: '🧃 Capri Sun' },
            ].map((drink) => (
              <motion.label 
                key={drink.id} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group"
              >
                <input
                  type="checkbox"
                  name={drink.id}
                  checked={drinks[drink.id]}
                  onChange={handleDrinkChange}
                  className="w-5 h-5 text-rose-500 rounded border-slate-300 focus:ring-rose-500 focus:ring-offset-0 bg-transparent"
                />
                <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{drink.label}</span>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Side Dishes */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Side Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 'bacon', label: '🥓 Crispy Bacon' },
              { id: 'sausage', label: '🌭 Breakfast Sausage' },
              { id: 'eggs', label: '🍳 Eggs (Any Style)' },
            ].map((side) => (
              <motion.label 
                key={side.id} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-slate-800 cursor-pointer transition-colors group"
              >
                <input
                  type="checkbox"
                  name={side.id}
                  checked={sides[side.id]}
                  onChange={handleSideChange}
                  className="w-5 h-5 text-rose-500 rounded border-slate-300 focus:ring-rose-500 focus:ring-offset-0 bg-transparent"
                />
                <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{side.label}</span>
              </motion.label>
            ))}
          </div>
        </div>

        {/* Date and Time Picker */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Delivery Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date</label>
              <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 text-slate-900 dark:text-slate-100 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time</label>
              <input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 text-slate-900 dark:text-slate-100 outline-none transition-colors" />
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div className="mb-8">
           <label className="block text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Special Requests?</label>
           <textarea rows="2" value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full px-4 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-rose-500 focus:border-rose-500 text-slate-900 dark:text-slate-100 outline-none transition-colors resize-none" placeholder="A donut, a hug, etc..."></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-lg">
          Place Order 🍽️
        </button>
      </form>
    </motion.div>
  );
};

export default Menu;