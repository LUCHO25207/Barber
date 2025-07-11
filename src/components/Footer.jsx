import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Texto */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SteamData. Proyectos a tu alcance.
          </p>
          <p className="text-xs text-gray-400 mt-1 max-w-md">
            Proyecto personal desarrollado con fines de práctica y demostración. Si te gustaría una página similar para tu negocio, no dudes en contactarme.
          </p>
        </div>

        {/* Íconos de contacto */}
        <div className="flex gap-4 text-xl">
          <a
            href="yucgra.luis@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

