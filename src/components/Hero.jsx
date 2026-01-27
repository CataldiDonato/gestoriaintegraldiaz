import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-gray-900 h-[600px] flex items-center justify-center text-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Background Image (Placeholder) */}
      <img 
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
        alt="Gestoria Office"
        className="absolute inset-0 w-full h-full object-cover z-[-1]" 
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          ¿Necesitas ayuda? <br />
          <span className="text-primary">Nosotros tenemos la solución</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Gestoría Automotor, Notarial, Judicial, Inmobiliaria y Náutica. 
          Soluciones integrales para particulares y empresas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=5491138426574&text=Holaa+Lili%21%21+Quiero+hacer+una+consulta&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Contactanos por WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.615 2.679-.71c.965.59 2.072 1.008 3.27 1.008 3.179 0 5.771-2.585 5.772-5.765 0-3.181-2.593-5.77-5.772-5.77zm0 10.59c-1.047 0-2.071-.345-3.051-.951l-.225-.138-1.571.417.419-1.532-.143-.243c-.702-1.189-1.065-2.203-1.065-3.376 0-2.673 2.167-4.766 4.809-4.766 2.645 0 4.814 2.174 4.814 4.848 0 2.674-2.167 4.767-4.811 4.767z"></path>
              <path d="M12.064 0C5.372 0 0 5.373 0 12.066C0 14.186.536 16.155 1.48 17.89L.012 23.367l5.63-1.474c1.884 1.093 4.075 1.706 6.422 1.706 6.699 0 12.064-5.373 12.064-12.065 0-6.69-5.362-12.064-12.064-12.064zm7.989 12.07c0 4.41-3.58 7.994-7.989 7.994-1.996 0-3.834-.658-5.311-1.771l-3.238.847.868-3.151c-1.291-1.637-2.068-3.69-2.068-5.918 0-4.417 3.582-7.998 7.983-7.998 4.408 0 7.99 3.581 7.99 8.001z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
