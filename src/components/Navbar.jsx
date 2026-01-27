import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-accent/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-secondary">
              Gestoría Integral Díaz Liliana
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Inicio</a>
            <a href="#about" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Nosotros</a>
            <a href="#services" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Nuestros Servicios</a>
            <a href="#contact" className="text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-accent border-t border-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-white/50">Inicio</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-white/50">Nosotros</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-white/50">Nuestros Servicios</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-white/50">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
