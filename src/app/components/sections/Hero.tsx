import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Ensayos No Destructivos de Alta Precisión
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Especialistas en inspección de cañerías petroleras mediante técnicas radiográficas avanzadas. Garantizamos la integridad y seguridad de sus instalaciones con tecnología de última generación.
            </p>
            <button
              onClick={() => scrollToSection('servicios')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 group"
            >
              Conocer Servicios
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542274368-443d694d79aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Industrial pipelines"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold text-blue-600">100%</p>
              <p className="text-gray-600">Precisión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
