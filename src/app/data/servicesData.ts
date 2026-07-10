import { Eye, Droplet, Magnet, Waves, Cpu, Radio } from 'lucide-react';

export const services = [
  {
    title: 'Inspección Visual',
    description: 'Es el método fundamental, sirve para diagnosticar el estado de un activo o determinar si se requieren ensayos complementarios. El método se basa en la observación directa y el uso de instrumentos de medición, mediante un proceso sistemático, riguroso y estandarizado, donde nuestros inspectores evalúan las condiciones del material, soldadura o componentes para detectar discontinuidades superficiales.',
    image: '/inspeccionvisual.webp',
    icon: Eye
  },
  {
    title: 'Líquidos Penetrantes',
    description: 'Ensayo que detecta discontinuidades abiertas a la superficie en la estructura. Se aplica el líquido penetrante con alta capilaridad en el material a ensayar, se remueve el excedente de la superficie, se seca y luego se aplica un revelador que permite inspeccionar y determinar la presencia de discontinuidades con su ubicación exacta.',
    image: '/liquidospenetrantes.webp',
    icon: Droplet
  },
  {
    title: 'Partículas Magnetizables',
    description: 'Se utiliza para localizar discontinuidades superficiales o sub-superficiales sobre materiales ferromagnéticos. La pieza examinada debe ser magnetizada luego se aplican partículas de hierro, las discontinuidades que estén próximas a la superficie o en contacto con ésta, provocarán un campo de fuga en donde se concentrarán las partículas que han sido arrojadas, revelando la discontinuidad que compromete la integridad de la pieza a ensayar.',
    image: '/particulasmagneticas.webp',
    icon: Magnet
  },
  {
    title: 'Ultrasonido',
    description: 'Esta técnica consiste en transmitir ondas sónicas de alta frecuencia en el material a ensayar. Con transductores de ángulos determinados generamos una onda sónica en la pieza, esta se propaga sobre la misma y al detectar alguna imperfección o discontinuidad se refleja y produce una señal en forma de eco que permite evaluar la anormalidad detectada. Este método permite ensayar sobre piezas de gran extensión física tanto detección de fallas como medición de espesores, Scan B.',
    image: '/ultrasonido.webp',
    icon: Waves
  },
  {
    title: 'PAUT (Phased Array Ultrasonic Testing)',
    description: 'Es uno de los métodos más avanzados de Ensayos No Destructivos (END), utiliza múltiples elementos ultrasónicos controlados electrónicamente para generar ondas que pueden ser dirigidas, enfocadas y barridas a través del material sin necesidad de mover físicamente el transductor. Permite generar imágenes detalladas y diferentes tipos de escaneos que facilitan la detección, caracterización y el dimensionamiento preciso de las discontinuidades, lo que permite un análisis y visualización en tiempo real generando una inspección completa con un solo escaneo, optimizando tiempos operativos y reduciendo costos.',
    image: '/photopased.webp',
    icon: Cpu
  },
  {
    title: 'Gammagrafía Industrial',
    description: 'Procedimiento radiográfico convencional para localizar anomalías internas en materiales sólidos. Se aplica a un amplio tipo de componentes, estructuras metálicas y soldaduras de diversa ductilidad. Permite una evaluación del 100% de la pieza de forma no invasiva, garantizando la integridad de la estructura o componente.',
    image: '/radiografiaindustrial.webp',
    icon: Radio
  }
];
