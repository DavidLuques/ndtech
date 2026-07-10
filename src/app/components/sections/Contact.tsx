import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-4">Contáctenos</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para asesorarlo en sus proyectos y responder a sus necesidades de inspección técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone Card */}
          <a
            href="tel:2994593624"
            className="bg-white p-8 rounded-2xl border border-slate-150 shadow-md hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group cursor-pointer"
          >
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
              <Phone size={28} />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">Teléfono</h3>
            <p className="text-slate-500 text-sm mb-4">Llámenos o escríbanos por WhatsApp</p>
            <p className="text-blue-600 font-bold text-lg mt-auto flex items-center gap-1">
              +54 299-459-3624
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
            <p className="text-blue-600 font-bold text-lg mt-auto flex items-center gap-1">
              +54 297-423-7218
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@ndtech.com.ar"
            className="bg-white p-8 rounded-2xl border border-slate-150 shadow-md hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group cursor-pointer"
          >
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
              <Mail size={28} />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">Email</h3>
            <p className="text-slate-500 text-sm mb-4">Envíenos sus consultas o pliegos técnicos</p>
            <p className="text-blue-600 font-bold text-lg mt-auto flex items-center gap-1">
              info@ndtech.com.ar
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </a>

          {/* Location Card */}
          <div
            className="bg-white p-8 rounded-2xl border border-slate-150 shadow-md hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group"
          >
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
              <MapPin size={28} />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">Ubicación</h3>
            <p className="text-slate-500 text-sm mb-4">Base operativa y cobertura regional</p>
            <p className="text-blue-600 font-bold text-lg mt-auto">
              Patagonia, Argentina
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
