import { services } from '../../data/servicesData';

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios END</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de ensayos no destructivos certificados para la industria petrolera
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">Certificado</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">Alta Precisión</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">Informes Detallados</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
