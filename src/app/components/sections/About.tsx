import { Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Acerca de Nosotros</h2>
            <p className="text-lg mb-6 text-blue-100">
              Somos una empresa especializada en ensayos no destructivos (END) para la industria petrolera. Nuestro equipo de profesionales altamente capacitados utiliza tecnología de última generación para garantizar la máxima precisión en cada inspección.
            </p>
            <p className="text-lg mb-8 text-blue-100">
              Nos enfocamos en brindar servicios de excelencia, con protocolos rigurosos de calidad y seguridad. Cada proyecto es tratado con el más alto nivel de profesionalismo, asegurando la integridad de sus instalaciones críticas.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Shield className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Profesionalismo</h4>
                <p className="text-blue-100 text-sm">Equipo altamente capacitado y certificado</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <CheckCircle2 className="mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Tecnología Avanzada</h4>
                <p className="text-blue-100 text-sm">Equipamiento de última generación</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1565364507085-325347bae748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Pipeline inspection"
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
