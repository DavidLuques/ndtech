import { Eye, Droplet, Magnet, Waves, Cpu, Radio } from 'lucide-react';

export const services = [
  {
    title: 'Inspección Visual',
    description: 'Es el método fundamental, sirve para diagnosticar el estado de un activo o determinar si se requieren ensayos complementarios. El método se basa en la observación directa y el uso de instrumentos de medición, mediante un proceso sistemático, riguroso y estandarizado, donde nuestros inspectores evalúan las condiciones del material, soldadura o componentes para detectar discontinuidades superficiales.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Eye
  },
  {
    title: 'Líquidos Penetrantes',
    description: 'Ensayo que detecta discontinuidades abiertas a la superficie en la estructura. Se aplica el líquido penetrante con alta capilaridad en el material a ensayar, se remueve el excedente de la superficie, se seca y luego se aplica un revelador que permite inspeccionar y determinar la presencia de discontinuidades con su ubicación exacta.',
    image: 'https://images.unsplash.com/photo-1682561476589-6b37af78d9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Droplet
  },
  {
    title: 'Partículas Magnetizables',
    description: 'Se utiliza para localizar discontinuidades superficiales o sub-superficiales sobre materiales ferromagnéticos. La pieza examinada debe ser magnetizada luego se aplican partículas de hierro, las discontinuidades que estén próximas a la superficie o en contacto con ésta, provocarán un campo de fuga en donde se concentrarán las partículas que han sido arrojadas, revelando la discontinuidad que compromete la integridad de la pieza a ensayar.',
    image: 'https://images.unsplash.com/photo-1584060245918-3bb6fbcf2f7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Magnet
  },
  {
    title: 'Ultrasonido',
    description: 'Esta técnica consiste en transmitir ondas sónicas de alta frecuencia en el material a ensayar. Con transductores de ángulos determinados generamos una onda sónica en la pieza, esta se propaga sobre la misma y al detectar alguna imperfección o discontinuidad se refleja y produce una señal en forma de eco que permite evaluar la anormalidad detectada. Este método permite ensayar sobre piezas de gran extensión física tanto detección de fallas como medición de espesores, Scan B.',
    image: 'https://images.unsplash.com/photo-1535612731405-1348d22b842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Waves
  },
  {
    title: 'PAUT (Phased Array Ultrasonic Testing)',
    description: 'Es uno de los métodos más avanzados de Ensayos No Destructivos (END), utiliza múltiples elementos ultrasónicos controlados electrónicamente para generar ondas que pueden ser dirigidas, enfocadas y barridas a través del material sin necesidad de mover físicamente el transductor. Permite generar imágenes detalladas y diferentes tipos de escaneos que facilitan la detección, caracterización y el dimensionamiento preciso de las discontinuidades, lo que permite un análisis y visualización en tiempo real generando una inspección completa con un solo escaneo, optimizando tiempos operativos y reduciendo costos.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Cpu
  },
  {
    title: 'Gammagrafía Industrial',
    description: 'Procedimiento radiográfico convencional para localizar anomalías internas en materiales sólidos. Se aplica a un amplio tipo de componentes, estructuras metálicas y soldaduras de diversa ductilidad. Permite una evaluación del 100% de la pieza de forma no invasiva, garantizando la integridad de la estructura o componente.',
    image: 'https://images.unsplash.com/photo-1670580479846-261c4e21ff17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Radio
  }
];
