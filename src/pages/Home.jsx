import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-b from-gray-100 via-white to-red-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Bienvenido a Barbería Jose
      </motion.h1>

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

      <motion.a
        href="/servicios"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Ver Servicios
      </motion.a>
    </motion.section>
  );
}

export default Home;
