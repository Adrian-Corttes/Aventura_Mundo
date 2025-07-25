import React, { useState } from "react";
import {
  MapPin,
  Users,
  Star,
  Ship,
  Menu,
  X,
  CarFront,
  Gauge,
  GitBranch,
  Briefcase,
  Umbrella,
  Shirt,
  UtensilsCrossed,
  Hotel,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const Header = ({ onBookNowClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#", label: "Inicio" },
    { href: "#actividades", label: "Actividades" },
    { href: "#servicios", label: "Servicios" },
    { href: "#alquiler", label: "Alquiler de Autos" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600">
          Orbi<span className="text-gray-800">Tours</span>
        </a>
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <button
            onClick={onBookNowClick}
            className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md"
          >
            Reservar Ahora
          </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-600 hover:text-indigo-600 py-2 transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onBookNowClick}
            className="mt-4 w-full bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md"
          >
            Reservar Ahora
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
