import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Gestoría Integral Díaz Liliana</h3>
            <p className="text-gray-400 max-w-sm">
              Soluciones integrales y gestiones eficientes para particulares y empresas. Confianza y profesionalismo en cada trámite.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact (Quick) */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lilyd86@hotmail.com</li>
              <li>+54 9 11 3842-6574</li>
              <li>Nueva Delhi 4408</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} - Gestoria Integral Díaz Liliana</p>
          <div className="mt-4 md:mt-0">
             Diseñado por <a href="https://techphite.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">TechPhite.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
