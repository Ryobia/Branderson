import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* <Navbar /> will go here later */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here (e.g., /projects, /contact) as you build them */}
          </Routes>
        </main>
        {/* <Footer /> will go here later */}
      </div>
    </BrowserRouter>
  );
};

export default App;