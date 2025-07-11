import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home.jsx';
import Servicios from './pages/Servicios.jsx';
import Contacto from './pages/Contacto.jsx';
import Footer from './components/Footer.jsx'; // Asegurate de crearlo

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}


export default App;
