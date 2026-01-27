import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Gestiones eficientes, resultados seguros
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Brindando asesoramiento y soluciones rápidas para cada trámite. 
              Con años de experiencia, garantizamos profesionalismo y confianza en cada gestión. 
              Somos <strong>Gestoría Integral Díaz Liliana</strong>, tu aliado confiable para navegar la burocracia 
              administrativa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/foto1.webp" 
              alt="Oficina Gestoría" 
              className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
            />
            <img 
              src="/images/foto2.webp" 
              alt="Gestoría en acción" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
