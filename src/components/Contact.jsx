import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Estamos listos para ayudarte con tus trámites y gestiones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Dirección</h3>
                <p className="text-gray-600 mt-1">
                  Nueva Delhi 4408, Los Polvorines<br />
                  Malvinas Argentinas. CP 1613
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Teléfono / WhatsApp</h3>
                <p className="text-gray-600 mt-1">+54 9 11 3842 6574</p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=5491138426574&text=Holaa+Lili%21%21+Quiero+hacer+una+consulta&type=phone_number&app_absent=0" 
                  className="text-primary hover:underline text-sm block mt-1"
                >
                  Enviar mensaje ahora
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">Lilyd86@hotmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">Horarios de Atención</h3>
                <ul className="text-gray-600 mt-1 space-y-1">
                  <li><span className="font-semibold">Lunes a Viernes:</span> 9:00am - 13:00pm y 15:30pm - 19:00pm</li>
                  <li><span className="font-semibold">Sábado:</span> 10:00am - 13:00pm</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-300">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.995079458212!2d-58.705608!3d-34.524458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd3939763189%3A0xc6e4b47f4fc3486c!2sNueva%20Delhi%204408%2C%20Los%20Polvorines%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1705606000000!5m2!1ses!2sar" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
