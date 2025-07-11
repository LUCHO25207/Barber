import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contacto() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-b from-gray-100 via-white to-red-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contacto
      </motion.h2>

      <motion.div
        className="flex flex-col items-center gap-4 text-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-600" />
          <span>Daniel Andreoli N° 171, Villa Jardín de Reyes</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-red-600" />
          <span>De lunes a lunes - 24/7</span>
        </div>
        <a
          href="https://wa.me/543884763550"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <FaWhatsapp />
          Reserva el turno
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contacto;
