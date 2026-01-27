const Hero = () => {
  return (
    <div id="home" className="relative bg-[#FFFBF7] min-h-[600px] flex items-center justify-center px-6 lg:px-12 py-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#E8C4B8] opacity-90">
            Necesitas ayuda?
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Nosotros tenemos <span className="text-[#F4A4A4]">la solución</span>
          </h1>
          
          <ul className="space-y-3 text-lg text-gray-600 font-medium pt-4">
            <li className="flex items-center gap-2">
              <span className="text-[#F4A4A4] text-2xl">•</span>
              <span><strong className="text-[#F4A4A4]">Gestoría</strong> Automotor, Notarial, Judicial, Inmobiliaria y Náutica</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F4A4A4] text-2xl">•</span>
              <span><strong className="text-[#F4A4A4]">Seguros</strong> La Caja</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#F4A4A4] text-2xl">•</span>
              <span><strong className="text-[#F4A4A4]">Tramites</strong> varios</span>
            </li>
          </ul>

          <div className="pt-8">
            <a 
              href="https://api.whatsapp.com/send/?phone=5491138426574&text=Holaa+Lili%21%21+Quiero+hacer+una+consulta&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#1F2937] hover:bg-gray-800 text-white font-bold tracking-wider rounded-sm transition-all transform hover:scale-105 shadow-lg"
            >
              CONTACTANOS
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
           <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="/images/foto1.webp" 
                alt="Gestoría Team" 
                className="w-full h-full object-cover"
              />
           </div>
           {/* Decorative elements */}
           <div className="absolute -z-10 top-10 right-10 w-full h-full bg-[#E8C4B8]/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
