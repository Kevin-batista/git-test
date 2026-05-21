import React, { useState } from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="font-extrabold text-xl tracking-tight text-teal-600">
              Dr. Flack vet<span className="text-slate-700 font-medium text-sm ml-1">DVM</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Tools (Theme Toggle + CTA) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:text-teal-600 rounded-xl bg-slate-50 hover:bg-teal-50/50 transition-all"
              title="Toggle Theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-colors shadow-sm"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle Combo */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 rounded-xl bg-slate-50"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-teal-600 hover:bg-slate-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-inner animate-fade-in-down">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2.5 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-colors shadow-sm"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;