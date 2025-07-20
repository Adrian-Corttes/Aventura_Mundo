import React, { useState, useEffect } from 'react';
import { MapPin, Users, Star, Ship, Menu, X, CarFront, Gauge, GitBranch, Briefcase, Umbrella, Shirt, UtensilsCrossed, Hotel, Mail, Phone, Send } from 'lucide-react';

// =================================================================
// DEFINICIÓN DE TODOS LOS COMPONENTES EN UN SOLO ARCHIVO
// Para resolver los errores de importación en este entorno.
// =================================================================

// --- Componentes de Tarjetas ---

const DestinationCard = ({ image, name, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group flex flex-col">
    <div className="relative h-56">
      <img className="w-full h-full object-cover" src={image} alt={`Imagen de ${name}`} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Actividad'; }}/>
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-300 flex items-center self-start">
        Saber Más
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
);


const CarRentalCard = ({ image, name, features, price }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <div className="relative h-48">
            <img src={image} alt={`Imagen de ${name}`} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Auto'; }}/>
        </div>
        <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
            <ul className="space-y-2 text-gray-600">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        {feature.icon}
                        <span className="ml-3">{feature.text}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="p-6 bg-gray-50">
            <p className="text-lg text-gray-700">Desde <span className="font-bold text-2xl text-indigo-600">${price}</span>/día</p>
            <button className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md">
                Reservar Auto
            </button>
        </div>
    </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center items-center mb-4">
      <div className="bg-indigo-100 p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role, image }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 mx-auto max-w-md">
    <div className="flex items-center mb-4">
      <img className="w-16 h-16 rounded-full object-cover mr-4" src={image} alt={`Foto de ${author}`} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/e2e8f0/4a5568?text=Autor'; }}/>
      <div>
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </div>
);

// --- Componente: Modal de Contacto ---
const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        console.log("Enviando datos:", formData);
        setTimeout(() => {
            if (Math.random() > 0.2) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
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
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>

                <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Hablemos de tu Viaje</h2>
                <p className="text-center text-gray-500 mb-8">Completa el formulario y un experto te contactará.</p>

                {status === 'success' ? (
                    <div className="text-center py-10">
                        <h3 className="text-2xl font-bold text-green-500 mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-gray-600">Gracias por contactarnos. Te responderemos pronto.</p>
                        <button onClick={onClose} className="mt-6 bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all">Cerrar</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre Completo</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-100 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-100 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">¿Cómo podemos ayudarte?</label>
                            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-100 border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"></textarea>
                        </div>

                        {status === 'error' && <p className="text-red-500 text-sm">Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.</p>}

                        <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center items-center gap-3 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg disabled:bg-indigo-400">
                            {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                            {status !== 'sending' && <Send size={18} />}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};


// --- Componentes de Layout ---

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
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">{link.label}</a>
          ))}
        </div>
        <div className="hidden lg:block">
            <button onClick={onBookNowClick} className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md">
              Reservar Ahora
            </button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="block text-gray-600 hover:text-indigo-600 py-2 transition-colors duration-300 font-medium">{link.label}</a>
          ))}
           <button onClick={onBookNowClick} className="mt-4 w-full bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md">
             Reservar Ahora
           </button>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
    <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Aventura<span className="text-indigo-400">Mundo</span></h3>
                    <p className="text-gray-400">Creando recuerdos inolvidables alrededor del mundo.</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-indigo-400 transition-colors">Inicio</a></li>
                        <li className="mb-2"><a href="#actividades" className="hover:text-indigo-400 transition-colors">Actividades</a></li>
                        <li className="mb-2"><a href="#servicios" className="hover:text-indigo-400 transition-colors">Servicios</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
                    <p className="mb-2">123 Calle Aventura, Ciudad Viaje</p>
                    <p className="mb-2">Email: info@aventuramundo.com</p>
                    <p>Tel: +1 (234) 567-890</p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                        <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                <p>&copy; {new Date().getFullYear()} AventuraMundo. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
);

// --- Componentes Comunes ---

const WhatsAppButton = ({ phoneNumber }) => (
  <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#1DAE50] transition-all duration-300 z-50 transform hover:scale-105 flex items-center"
    aria-label="Contactar por WhatsApp"
  >
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
        fill="#ffffff"
      />
    </svg>
    <span className="font-medium ml-2">Contáctanos</span>
  </a>
);


// --- Componentes de Secciones ---

const HeroSection = () => (
  <section className="relative h-[600px] flex items-center justify-center text-white">
    <img src="https://res.cloudinary.com/amenitiz/image/upload/w_1728,dpr_auto,c_scale,q_auto:best/v1708637917/loxligwsxrfnd2fv7zd6.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Vista de Mangata Cartagena"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
        Tu Próxima Aventura Comienza Aquí
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
        Creamos experiencias de viaje inolvidables, hechas a tu medida.
      </p>
     
    </div>
  </section>
);

const DayTripActivitiesSection = () => {
    const activities = [
        { 
            image: "https://images.unsplash.com/photo-1587975829213-91944e5a5912?q=80&w=2070&auto=format&fit=crop", 
            name: "Tour por las Islas del Rosario", 
            description: "Embárcate en una aventura inolvidable a través del paraíso natural de las Islas del Rosario. Descubre la belleza intocada de sus aguas cristalinas, sus playas de arena blanca y su exuberante vida marina." 
        },
        { 
            image: "https://images.unsplash.com/photo-1574941928331-b31182ebd345?q=80&w=1974&auto=format&fit=crop", 
            name: "Snorkeling", 
            description: "Sumérgete en un mundo submarino de colores y maravillas. Descubre la increíble biodiversidad marina mientras exploras los arrecifes de coral más vibrantes y las aguas cristalinas del Caribe." 
        },
        { 
            image: "https://images.unsplash.com/photo-1596242973830-9f7a188a9b8e?q=80&w=2070&auto=format&fit=crop", 
            name: "Kayak", 
            description: "Rema hacia la aventura y descubre un nuevo mundo desde la perspectiva del agua. Navega a través de manglares, cuevas ocultas y playas vírgenes mientras exploras la costa de Cartagena." 
        },
        { 
            image: "https://images.unsplash.com/photo-1609342935824-07288278a803?q=80&w=2070&auto=format&fit=crop", 
            name: "Paddle Boarding", 
            description: "Deslízate hacia la aventura en paddle board en las aguas cristalinas. Embárcate en una experiencia única mientras navegas sobre la serenidad del mar Caribe, rodeado de la impresionante belleza natural." 
        }
    ];
    return (
        <section id="actividades" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Actividades en tu Pasadía</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Experiencias inolvidables que te esperan en el paraíso.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {activities.map(activity => <DestinationCard key={activity.name} {...activity} />)}
                </div>
            </div>
        </section>
    );
};


const AmenitiesSection = () => {
    const amenities = [
        { icon: <Ship className="h-10 w-10 text-gray-700" />, label: "Transporte en bote" },
        { icon: <Umbrella className="h-10 w-10 text-gray-700" />, label: "Pasadía -todo incluido-" },
        { icon: <Shirt className="h-10 w-10 text-gray-700" />, label: "Servicio de toallas" },
        { icon: <UtensilsCrossed className="h-10 w-10 text-gray-700" />, label: "Almuerzo a la carta" },
        { icon: <Hotel className="h-10 w-10 text-gray-700" />, label: "Promociones por temporadas" },
    ];

    return (
        <section className="py-16 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Pasadía con Mangata Beach Club</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Un lugar para desconectarte del mundo, en un paraíso junto al mar en donde disfrutarás el verdadero Caribe Colombiano. </p>
        </div>

            <div className="container mx-auto px-6">
                <div className="flex justify-around items-center flex-wrap gap-8">
                    {amenities.map(item => (
                        <div key={item.label} className="flex flex-col items-center text-center w-32">
                            {item.icon}
                            <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

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
            <h2 className="text-4xl md:text-5xl font-extrabold" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>TUS VACACIONES EN MANGATA</h2>
            <p className="text-lg md:text-xl" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>Cada viaje es una historia. Permítenos ayudarte a escribir la tuya.</p>
        </div>
    </section>
);

const CarRentalSection = () => {
    const carFeatures = {
        compacto: [ { icon: <Users className="h-5 w-5 text-indigo-500"/>, text: '4 Pasajeros' }, { icon: <Briefcase className="h-5 w-5 text-indigo-500"/>, text: '2 Maletas' } ],
        suv: [ { icon: <Users className="h-5 w-5 text-indigo-500"/>, text: '5 Pasajeros' }, { icon: <Briefcase className="h-5 w-5 text-indigo-500"/>, text: '4 Maletas' } ],
        lujo: [ { icon: <Users className="h-5 w-5 text-indigo-500"/>, text: '5 Pasajeros' }, { icon: <Briefcase className="h-5 w-5 text-indigo-500"/>, text: '3 Maletas' } ]
    };
    const cars = [
        { image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop", name: "Deportivo de Lujo", features: carFeatures.lujo, price: "250" },
        { image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop", name: "SUV Familiar", features: carFeatures.suv, price: "120" },
        { image: "https://images.unsplash.com/photo-1514316454348-772aadd4e2b3?q=80&w=1974&auto=format&fit=crop", name: "Compacto Urbano", features: carFeatures.compacto, price: "80" }
    ];
    return (
        <section id="alquiler" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Muévete a tu Ritmo</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Explora cada rincón de tu destino con total libertad.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cars.map(car => <CarRentalCard key={car.name} {...car} />)}
                </div>
            </div>
        </section>
    );
};

const ServicesSection = () => (
    <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12"><h2 className="text-4xl font-bold text-gray-800">Todo lo que Necesitas</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ServiceCard icon={<Users className="h-10 w-10 text-indigo-600"/>} title="Guías Expertos" description="Nuestros guías locales te mostrarán los secretos mejor guardados."/>
                <ServiceCard icon={<MapPin className="h-10 w-10 text-indigo-600"/>} title="Itinerarios a Medida" description="Diseñamos viajes personalizados que se adaptan a tus sueños."/>
                <ServiceCard icon={<Ship className="h-10 w-10 text-indigo-600"/>} title="Paquetes Todo Incluido" description="Nos encargamos de vuelos, hoteles, tours y más."/>
            </div>
        </div>
    </section>
);

const TestimonialsSection = () => {
    const testimonials = [
        { quote: "¡El mejor viaje de mi vida! La organización fue impecable y los lugares que visitamos fueron espectaculares.", author: "Ana García", role: "Viajera Apasionada", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" },
        { quote: "AventuraMundo superó todas mis expectativas. El itinerario personalizado fue perfecto para mi familia.", author: "Carlos Martínez", role: "Explorador Familiar", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" }
    ];
    return (
        <section id="testimonios" className="py-20 bg-indigo-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-4xl font-bold text-gray-800">Lo que dicen nuestros viajeros</h2></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {testimonials.map(testimonial => <TestimonialCard key={testimonial.author} {...testimonial} />)}
                </div>
            </div>
        </section>
    );
};

const CtaSection = ({ onContactClick }) => (
    <section id="contacto" className="bg-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-bold mb-4">¿Listo para tu próxima aventura?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-200">Nuestro equipo está listo para ayudarte. ¡Contáctanos hoy!</p>
            <button onClick={onContactClick} className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg shadow-xl transform hover:scale-105">
                Hablar con un experto
            </button>
        </div>
    </section>
);


// =================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA
// =================================================================

export default function App() {
  const whatsappNumber = "573001234567";
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans antialiased">
      <Header onBookNowClick={() => setIsModalOpen(true)} />

      <main>
        <HeroSection />

        <div className="text-center py-10 bg-gray-100">
            <h2 className="text-4xl font-bold text-gray-800">Destinos Populares</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Explora algunos de los lugares más impresionantes que tenemos para ofrecerte.</p>
        </div>

        <VideoBanner />
        <AmenitiesSection />
    

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
            <h2 className="text-4xl font-bold text-white">Precio por persona $380,000 COP.</h2>
          </div>
        </section>
        
        <DayTripActivitiesSection />
        <CarRentalSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection onContactClick={() => setIsModalOpen(true)} />
      </main>

      <WhatsAppButton phoneNumber={whatsappNumber} />
      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
