export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-900 text-white border-t border-blue-950/20 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              ND<span className="text-blue-500">Tech</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Comprometidos con la excelencia en Ensayos No Destructivos y el aseguramiento de la integridad operativa de sus activos industriales.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-slate-400 hover:text-blue-500 transition-colors text-sm font-medium cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-slate-400 hover:text-blue-500 transition-colors text-sm font-medium cursor-pointer"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-slate-400 hover:text-blue-500 transition-colors text-sm font-medium cursor-pointer"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-slate-400 hover:text-blue-500 transition-colors text-sm font-medium cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Patagonia, Argentina</li>
              <li>info@ndtech.com.ar</li>
              <li>+54 299 4593624</li>
              <li>+54 297 4237218</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-900/60 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 NDTech. Todos los derechos reservados.</p>
          <p className="text-slate-400 font-medium">Ensayos No Destructivos - Inspección de Cañerías Petroleras</p>
        </div>
      </div>
    </footer>
  );
}
