import { useState } from "react";
import { motion } from "framer-motion";

import { GiRazor, GiBeard, GiScissors } from "react-icons/gi";

const servicios = [
  {
    nombre: "Corte con Tijeras",
    descripcion: "Estilo clásico o moderno",
    icono: GiScissors,
    color: "from-gray-100 to-white",
    imagen: "/img/Classico.png", // pon tu ruta
  },
  {
    nombre: "Corte Moderno",
    descripcion: "Recorte y perfilado con estilo",
    icono: GiBeard,
    color: "from-amber-50 to-white",
    imagen: "/imagenes/corte-moderno.jpg",
  },
  {
    nombre: "Cortes Personalizados",
    descripcion: "Con navaja y toalla caliente",
    icono: GiRazor,
    color: "from-slate-100 to-white",
    imagen: "/imagenes/corte-personalizado.jpg",
  },
];

function Servicios() {
  const [imagenAbierta, setImagenAbierta] = useState(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 bg-gradient-to-b from-gray-100 via-white to-red-100">
      <h2 className="text-4xl font-bold text-red-700 mb-2">Nuestros Servicios</h2>
      <p className="text-gray-500 mb-10">Cortes y cuidados personalizados</p>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {servicios.map((serv, i) => {
          const Icono = serv.icono;
          return (
            <motion.div
              key={i}
              onClick={() => setImagenAbierta(serv.imagen)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`cursor-pointer p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 bg-gradient-to-br ${serv.color}`}
            >
              <Icono className="mx-auto text-5xl text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{serv.nombre}</h3>
              <p className="text-gray-600 text-sm">{serv.descripcion}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Modal centrado */}
      {imagenAbierta && (
        <div
          onClick={() => setImagenAbierta(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-lg max-w-[80vw] max-h-[80vh] p-4 relative flex flex-col items-center"
          >
            <button
              onClick={() => setImagenAbierta(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <img
              src={imagenAbierta}
              alt="Imagen de referencia"
              className="max-w-full max-h-[70vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicios;
