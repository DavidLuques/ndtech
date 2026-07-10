import { services } from '../../data/servicesData';

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">Nuestros Servicios</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En Ndtech nos enfocamos en brindar un servicio de excelencia en cada proyecto.
            Contamos con un grupo de profesionales calificados, certificados bajo norma ISO 9712 y con amplia experiencia en el sector petrolero, energético, metalmecánico e industrial.
          </p>
        </div>

        {/* Conceptual Diagram Block */}
        <div className="mb-24 max-w-5xl mx-auto">
          <div className="relative group p-4 md:p-8 bg-slate-50 border border-slate-200/50 rounded-3xl shadow-xl">
            <div className="absolute top-4 left-4 bg-blue-600/10 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-500/10 shadow-xs">
              Esquema de Ensayos No Destructivos (END)
            </div>
            <img
              src="/tecnicasdeend.webp"
              alt="Técnicas de END"
              className="w-full h-auto object-contain rounded-2xl mt-8 md:mt-4"
            />
          </div>
        </div>

        {/* Serpentine Services List */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Image side */}
                <div className={`relative overflow-hidden rounded-2xl border border-slate-100 shadow-lg group hover:shadow-xl transition-all duration-500 h-[300px] sm:h-[380px] bg-slate-50 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-750"
                  />
                </div>

                {/* Content side */}
                <div className={`flex flex-col space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 text-blue-600 p-3.5 rounded-xl border border-blue-100 shadow-xs">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
