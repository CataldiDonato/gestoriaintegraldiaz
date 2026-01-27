import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';

const services = [
  {
    title: "Gestoría Automotor",
    subtitle: "Trámites Rápidos y Seguros",
    description: "Más de 20 años de experiencia en transferencias de autos, informes de dominio, denuncias de robo y compra. Gestionamos duplicados de cédula, título y patente, pago de patentes y altas y bajas municipales.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre gestoria automotor"
  },
  {
    title: "Gestoría Judicial",
    subtitle: "Para Empresas y Estudios Jurídicos",
    description: "Servicios especializados en gestión de trámites judiciales y administrativos con rapidez y profesionalismo.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre gestoria judicial"
  },
  {
    title: "Gestoría Inmobiliaria",
    subtitle: "Compra, Venta y Alquileres",
    description: "Informes de deuda municipal y provincial, boletos de compraventa y planes de pago.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre gestoria inmobiliaria"
  },
  {
    title: "Turnos y Trámites",
    subtitle: "Administrativos",
    description: "Gestionamos turnos para Verificación Policial, VTV, Grabado de Autopartes, ANSES, ARCA y más.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre tramites administrativos"
  },
  {
    title: "Gestoría Notarial",
    subtitle: "Certificaciones y Legalizaciones",
    description: "Expertos en certificación de firmas, permisos de viaje para menores, redacción de contratos y apostillas.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre gestoria notarial"
  },
  {
    title: "Gestoría Náutica",
    subtitle: "Trámites para Embarcaciones",
    description: "Realizamos inscripción en REJU y REY, cambio de motor, transferencias y más.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre gestoria nautica"
  },
  {
    title: "Seguros La Caja",
    subtitle: "Cotización y Gestión de Pólizas",
    description: "Punto autorizado para cotización, alta y baja de seguros para flotas y particulares.",
    message: "Holaa Lili!! Quiero hacer una consulta sobre los seguros de la caja",
    image: "/images/la-caja.webp"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-[#F4A4A4] mx-auto rounded-full"></div>
        </div>

        {/* Layout: 3 Columns on large screens */}
        {/* Left Column: 3 Services */}
        {/* Center Column: Animation */}
        {/* Right Column: 4 Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} align="right" />
            ))}
          </div>

          {/* Center Column - Animation */}
          <div className="flex justify-center items-center py-8 lg:py-0 relative">
             <div className="w-full max-w-sm lg:max-w-full">
                <Lottie animationData={animationData} loop={true} className="w-full h-auto" />
             </div>
             {/* Decorative blob behind animation */}
             <div className="absolute inset-0 bg-[#FFFBF7] rounded-full filter blur-3xl -z-10 transform scale-90"></div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index + 3} service={service} align="left" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, align }) => {
  return (
    <a 
       href={`https://api.whatsapp.com/send/?phone=5491138426574&text=${encodeURIComponent(service.message)}&type=phone_number&app_absent=0`}
       target="_blank" 
       rel="noopener noreferrer"
       className={`block bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#F4A4A4] group ${align === 'right' ? 'lg:text-right' : 'lg:text-left'} h-full`}
    >
      <div className={`flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'} h-full justify-between`}>
        <div>
          <div className={`flex items-center gap-3 mb-2 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              {service.image && <img src={service.image} alt="Icon" className="w-8 h-8 object-contain" />}
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#F4A4A4] transition-colors">{service.title}</h3>
          </div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{service.subtitle}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
        </div>
        
        <span className="text-[#F4A4A4] font-bold text-sm tracking-wider group-hover:underline">
          Consultar Gratis &rarr;
        </span>
      </div>
    </a>
  );
};

export default Services;
