import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-center gap-8 text-lg font-semibold shadow">
      <Link to="/" className="hover:text-red-500">Inicio</Link>
      <Link to="/servicios" className="hover:text-red-500">Servicios</Link>
      <Link to="/contacto" className="hover:text-red-500">Contacto</Link>
    </nav>
  );
}

export default Nav;
