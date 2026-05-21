import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* 1. Fully active sticky navigation bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. About Section */}
        <About />

        {/* 4. Specialties & Services */}
        <Specialties />

        {/* 5. Experience Timeline */}
        <Experience />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Contact Form & Emergency Notice */}
        <Contact />
      </main>

      {/* 8. Rich Signature Footer */}
      <Footer />
      
    </div>
  );
}

export default App;