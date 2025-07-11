import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';  // Importa Link de React Router

const titleText = "¡Bienvenido a VJR Style Barbershop, donde tu estilo importa!";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
};

const child = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// Crea un componente MotionLink animado a partir de Link
const MotionLink = motion(Link);

function Home() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-b from-gray-100 via-white to-red-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full overflow-x-auto">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 break-words max-w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {titleText.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.p
        className="text-lg text-gray-600 mb-2 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Cortes modernos, clásicos, la mejor onda.
      </motion.p>

      <motion.p
        className="text-base text-gray-600 mb-6 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Somos una barbería con experiencia reciente, especializada en cortes modernos,
        clásicos y a gusto del cliente. Nos destacamos por ofrecer la mejor atención personalizada
        y un ambiente cómodo y profesional.
      </motion.p>

      <motion.div
        className="w-full max-w-xl mx-auto mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          dynamicHeight={false}
        >
          <div>
            <img src="/img/Moderno Mf.png" alt="Corte 1" className="w-full h-80 object-cover" />
            <p className="legend">Corte Moderno</p>
          </div>
          <div>
            <img src="/img/Classico.png" alt="Corte 2" className="w-full h-80 object-cover" />
            <p className="legend">Fade Clásico</p>
          </div>
          <div>
            <img src="/img/Fpersonalizado.png" alt="Corte 3" className="w-full h-80 object-cover" />
            <p className="legend">Mid Fade</p>
          </div>
        </Carousel>
      </motion.div>

      <MotionLink
        to="/servicios"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Ver Servicios
      </MotionLink>
    </motion.section>
  );
}

export default Home;

