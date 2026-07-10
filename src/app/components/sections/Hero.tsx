import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden text-slate-900 bg-slate-900">
      {/* Background image 100% visible, no transparency overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.webp"
          alt="Ensayos no destructivos"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text content wrapped in a more transparent glassmorphic box */}
          <div className="md:col-span-8 lg:col-span-7 bg-white/45 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/40 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-800 text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Líderes en Inspección & Ensayos
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 bg-clip-text text-transparent leading-tight">
              Ensayos No Destructivos de Alta Precisión
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl">
              Especialistas en inspección de cañerías petroleras mediante técnicas avanzadas. Garantizamos la integridad y seguridad de sus instalaciones con tecnología de última generación.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('servicios')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 flex items-center gap-2 group font-semibold cursor-pointer"
              >
                Conocer Servicios
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border border-slate-200 bg-white/90 hover:bg-white text-slate-700 px-8 py-4 rounded-xl transition-all duration-300 font-semibold cursor-pointer shadow-sm"
              >
                Contáctenos
              </button>
            </div>
          </div>

          {/* Right column - contains the floating badge only */}
          <div className="md:col-span-4 lg:col-span-5 flex justify-center md:justify-end">
            <div className="bg-white/45 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 max-w-[240px]">
              <p className="text-4xl font-extrabold text-blue-800">100%</p>
              <p className="text-sm text-slate-800 font-semibold mt-1">Precisión y Rigor en Ensayos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
