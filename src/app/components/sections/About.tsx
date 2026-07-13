import { Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 bg-[#8BB4D9] text-slate-900 overflow-hidden border-t border-slate-900/10">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Glowing blur spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl -z-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Acerca de Nosotros
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-lg text-slate-800 leading-relaxed font-medium">
              En Ndtech brindamos soluciones integrales de inspección diseñadas para maximizar la vida útil y la seguridad de sus instalaciones, equipos y productos mediante los END (Ensayos no Destructivos). Nuestro equipo de inspectores certificados combina experiencia técnica con tecnología avanzada para ofrecer diagnósticos precisos en componentes en servicio o en fabricación.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed font-medium">
              Nos comprometemos con la calidad y la continuidad operativa, respaldando cada intervention con rigor operativo y criterios de aceptación internacionales.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/40 backdrop-blur-md border border-slate-900/10 p-8 rounded-2xl shadow-xl hover:border-slate-900/20 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-slate-900/10 border border-slate-900/20 flex items-center justify-center mb-4 text-slate-900 font-bold text-lg group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
              M
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nuestra Misión</h3>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed">
              Brindar soluciones integrales en ingeniería, construcción y mantenimiento. Garantizar la calidad, seguridad y eficiencia operativa con una dedicación inquebrantable a nuestros clientes en cada proyecto.
            </p>
          </div>
          
          <div className="bg-white/40 backdrop-blur-md border border-slate-900/10 p-8 rounded-2xl shadow-xl hover:border-slate-900/20 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-slate-900/10 border border-slate-900/20 flex items-center justify-center mb-4 text-slate-900 font-bold text-lg group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
              V
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Nuestra Visión</h3>
            <p className="text-slate-800 text-sm md:text-base leading-relaxed">
              Convertirnos en referentes de la industria a través de la excelencia operativa en las técnicas innovadoras, enfocándonos en la eficiencia y mejora continua.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white/20 backdrop-blur-sm border border-slate-900/10 p-8 rounded-2xl shadow-md hover:border-slate-900/20 transition-all duration-300 flex items-start gap-4">
            <div className="p-3 bg-slate-900/10 border border-slate-900/20 rounded-xl text-slate-900">
              <Shield size={28} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Profesionalismo</h4>
              <p className="text-slate-800 text-sm leading-relaxed">
                Equipo altamente capacitado y certificado bajo normas internacionales como ISO 9712, garantizando máxima confianza.
              </p>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm border border-slate-900/10 p-8 rounded-2xl shadow-md hover:border-slate-900/20 transition-all duration-300 flex items-start gap-4">
            <div className="p-3 bg-slate-900/10 border border-slate-900/20 rounded-xl text-slate-900">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Tecnología Avanzada</h4>
              <p className="text-slate-800 text-sm leading-relaxed">
                Equipamiento e instrumental de última generación para lograr mediciones precisas y diagnósticos confiables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
