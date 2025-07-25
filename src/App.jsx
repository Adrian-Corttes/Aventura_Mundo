import React, { useState, useEffect } from "react";
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

import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import AmenitiesSection from "./components/sections/AmenitiesSection";
import DayTripActivitiesSection from "./components/sections/DayTripActivitiesSection";
import CarRentalSection from "./components/sections/CarRentalSection";
import Footer from "./components/sections/Footer";
// =================================================================
// DEFINICIÓN DE TODOS LOS COMPONENTES EN UN SOLO ARCHIVO
// Para resolver los errores de importación en este entorno.
// =================================================================

// --- Componente: Modal de Contacto ---
const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    console.log("Enviando datos:", formData);
    setTimeout(() => {
      if (Math.random() > 0.2) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-lg relative transform transition-transform duration-300 scale-95 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Hablemos de tu Viaje
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Completa el formulario y un experto te contactará.
        </p>

        {status === "success" ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-green-500 mb-2">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-gray-600">
              Gracias por contactarnos. Te responderemos pronto.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-100 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-100 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                ¿Cómo podemos ayudarte?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-100 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
              ></textarea>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Hubo un error al enviar tu mensaje. Por favor, inténtalo de
                nuevo.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex justify-center items-center gap-3 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg disabled:bg-indigo-400"
            >
              {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
              {status !== "sending" && <Send size={18} />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// --- Componentes Comunes ---

const WhatsAppButton = ({ phoneNumber }) => (
  <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-2 right-2 bg-[#25D366] text-white px-3 py-2 rounded-full shadow-lg hover:bg-[#1DAE50] transition-all duration-300 z-50 transform hover:scale-105 flex items-center"
    aria-label="Contactar por WhatsApp"
  >
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
        fill="#ffffff"
      />
    </svg>
    <span className="ml-2 ">Contáctanos</span>
  </a>
);

// --- Componentes de Secciones ---


//-Todo lo que Necesitas
const ServicesSection = () => (
  <section id="servicios" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Todo lo que Necesitas
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          icon={<Users className="h-10 w-10 text-indigo-600" />}
          title="Guías Expertos"
          description="Nuestros guías locales te mostrarán los secretos mejor guardados."
        />
        <ServiceCard
          icon={<MapPin className="h-10 w-10 text-indigo-600" />}
          title="Itinerarios a Medida"
          description="Diseñamos viajes personalizados que se adaptan a tus sueños."
        />
        <ServiceCard
          icon={<Ship className="h-10 w-10 text-indigo-600" />}
          title="Paquetes Todo Incluido"
          description="Nos encargamos de vuelos, hoteles, tours y más."
        />
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "¡El mejor viaje de mi vida! La organización fue impecable y los lugares que visitamos fueron espectaculares.",
      author: "Ana García",
      role: "Viajera Apasionada",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
      quote:
        "AventuraMundo superó todas mis expectativas. El itinerario personalizado fue perfecto para mi familia.",
      author: "Carlos Martínez",
      role: "Explorador Familiar",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
  ];
  return (
    <section id="testimonios" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Lo que dicen nuestros viajeros
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = ({ onContactClick }) => (
  <section id="contacto" className="bg-indigo-700 text-white">
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">
        ¿Listo para tu próxima aventura?
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-200">
        Nuestro equipo está listo para ayudarte. ¡Contáctanos hoy!
      </p>
      <button
        onClick={onContactClick}
        className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl transform hover:scale-105"
      >
        Hablar con un experto
      </button>
    </div>
  </section>
);

// --- Componentes de Tarjetas ---

//Destins populares
const VideoBanner = () => (
  <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden bg-black">
    <iframe
      className="absolute top-1/2 left-1/2 w-full h-[56.25vw] min-h-full min-w-[177.77vh] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
      src="https://www.youtube.com/embed/bKUlPNfPho8?autoplay=1&mute=1&controls=0&loop=1&playlist=bKUlPNfPho8&modestbranding=1&showinfo=0&rel=0"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Video de fondo de YouTube"
    ></iframe>
    <div className="relative z-10 text-center px-4">
      <h2
        className="text-4xl md:text-5xl font-extrabold"
        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
      >
        TUS VACACIONES EN MANGATA
      </h2>
      <p
        className="text-lg md:text-xl"
        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
      >
        Cada viaje es una historia. Permítenos ayudarte a escribir la tuya.
      </p>
    </div>
  </section>
);

const VideoBanner2 = () => (
  <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden bg-black">
    <iframe
      className="absolute top-1/2 left-1/2 w-full h-[56.25vw] min-h-full min-w-[177.77vh] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
      src="https://www.youtube.com/embed/DvnI5beXYMA?autoplay=1&mute=1&controls=0&loop=1&playlist=DvnI5beXYMA&modestbranding=1&showinfo=0&rel=0"
      title="video entorno"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
    {/* <div className="relative z-10 text-center px-4">
      <h2
        className="text-4xl md:text-5xl font-extrabold"
        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
      >
        TUS VACACIONES EN MANGATA
      </h2>
      <p
        className="text-lg md:text-xl"
        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
      >
        Cada viaje es una historia. Permítenos ayudarte a escribir la tuya.
      </p>
    </div> */}
  </section>
);

// --- Todo lo que Necesitas ---
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-indigo-100 p-4 rounded-full">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role, image }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-md">
    <div className="flex items-center mb-4">
      <img
        className="w-16 h-16 rounded-full object-cover mr-4"
        src={image}
        alt={`Foto de ${author}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/100x100/e2e8f0/4a5568?text=Autor";
        }}
      />
      <div>
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </div>
);

// =================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA
// =================================================================

export default function App() {
  const whatsappNumber = "573018543715"; // Número de WhatsApp para contacto
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans antialiased">
      <Header onBookNowClick={() => setIsModalOpen(true)} />

      <main>
        <HeroSection />

        <div className="text-center py-10 bg-gray-100">
          <h2 className="text-4xl font-bold text-gray-800">
            Destinos Populares
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explora algunos de los lugares más impresionantes que tenemos para
            ofrecerte.
          </p>
        </div>

        <VideoBanner />

        <div className="text-center py-10 bg-gray-100">
          <h2 className="text-4xl font-bold text-gray-800">
            Pasadía con Mangata Beach Club
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Un lugar para desconectarte del mundo, en un paraíso junto al mar en
            donde disfrutarás el verdadero Caribe Colombiano.
          </p>
        </div>

        <section
          className="mt-1 h-screen bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/amenitiz/image/upload/w_1728,dpr_auto,c_scale,q_auto:best/v1707168457/ccdvojy1zheul2pscxrl.jpg')",
          }}
        >
          <div className="relative z-10 text-center px-4">
            <h2
              className="text-5xl md:text-6xl font-bold"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
            >
              VIVE UN PARAÍSO
            </h2>
            <p
              className="text-xl mt-4"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              CON TODO INCLUIDO
            </p>
            <h2 className="text-4xl font-bold text-white">
              Precio por persona $380,000 COP.
            </h2>
          </div>
        </section>
        <AmenitiesSection />
<div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Actividades en tu Pasadía
          </h2>
          {/* <h3 className="text-lg">Descubre la isla con aventuras sin límites</h3> */}
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Encuentra diversidad de actividades en nuestra zona, desde kayak
            hasta tours por la isla, Mangata te abre las puertas a que explores
            los alrededores de tu estadía.
          </p>
        </div>
        <VideoBanner2 />
        <DayTripActivitiesSection />
        

        <CarRentalSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection onContactClick={() => setIsModalOpen(true)} />
      </main>

      <WhatsAppButton phoneNumber={whatsappNumber} />
      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
