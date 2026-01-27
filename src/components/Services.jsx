import React from 'react';

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
    message: "Holaa Lili!! Quiero hacer una consulta sobre los seguros de la caja"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full border-t-4 border-primary">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <h4 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">{service.subtitle}</h4>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <a 
                href={`https://api.whatsapp.com/send/?phone=5491138426574&text=${encodeURIComponent(service.message)}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full block text-center bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 font-medium transition-colors"
              >
                Consultar Gratis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
