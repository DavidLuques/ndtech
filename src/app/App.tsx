import { useState } from 'react';
import { Menu, X, Shield, Radio, Droplet, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    {
      title: 'Radiografía Industrial',
      description: 'Detección precisa de fisuras, grietas y discontinuidades internas en cañerías petroleras mediante técnicas radiográficas avanzadas. Garantizamos la integridad estructural de sus instalaciones.',
      image: 'https://images.unsplash.com/photo-1670580479846-261c4e21ff17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Radio
    },
    {
      title: 'Ultrasonido Industrial',
      description: 'Medición de espesores y detección de defectos internos utilizando ondas ultrasónicas. Ideal para monitoreo de corrosión y evaluación de soldaduras en ductos petroleros.',
      image: 'https://images.unsplash.com/photo-1535612731405-1348d22b842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Shield
    },
    {
      title: 'Líquidos Penetrantes',
      description: 'Inspección superficial para detectar grietas, poros y discontinuidades en superficies no porosas. Método efectivo para control de calidad en soldaduras y uniones.',
      image: 'https://images.unsplash.com/photo-1682561476589-6b37af78d9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: Droplet
    },
    {
      title: 'Partículas Magnéticas',
      description: 'Detección de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos. Esencial para garantizar la seguridad operacional de sus equipos.',
      image: 'https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-900">
              END<span className="text-blue-600">Pro</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestros Servicios END</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una gama completa de ensayos no destructivos certificados para la industria petrolera
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
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
                      <service.icon className="text-blue-600" size={32} />
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
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Contáctenos</h2>
            <p className="text-xl text-gray-600">Estamos listos para ayudarlo con sus necesidades de inspección</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Teléfono</h3>
              <p className="text-gray-600">+54 9 XXX XXX-XXXX</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">info@endpro.com.ar</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Ubicación</h3>
              <p className="text-gray-600">Patagonia, Argentina</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200">© 2026 ENDPro. Todos los derechos reservados.</p>
          <p className="text-blue-300 text-sm mt-2">Ensayos No Destructivos - Inspección de Cañerías Petroleras</p>
        </div>
      </footer>
    </div>
  );
}
