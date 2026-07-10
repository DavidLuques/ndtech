import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/75 backdrop-blur-md border-b border-gray-200/30 shadow-md' 
        : 'bg-white/45 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-20'
        }`}>
          <div className="text-2xl font-bold text-blue-900">
            ND<span className="text-blue-600">Tech</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/30">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
