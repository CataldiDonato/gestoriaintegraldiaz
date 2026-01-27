import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Sobre Nosotros
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Gestiones eficientes, resultados seguros
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Brindando asesoramiento y soluciones rápidas para cada trámite. 
          Con años de experiencia, garantizamos profesionalismo y confianza en cada gestión. 
          Somos <strong>Gestoria Integral Díaz Liliana</strong>, tu aliado confiable para navegar la burocracia 
          administrativa.
        </p>
      </div>
    </section>
  );
};

export default About;
