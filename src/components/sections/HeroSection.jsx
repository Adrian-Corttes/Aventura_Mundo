import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white">
      <img
        src="https://res.cloudinary.com/amenitiz/image/upload/w_1728,dpr_auto,c_scale,q_auto:best/v1708637917/loxligwsxrfnd2fv7zd6.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Vista de Mangata Cartagena"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          Tu Próxima Aventura Comienza Aquí
        </h1>
        <p
          className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
        >
          Creamos experiencias de viaje inolvidables, hechas a tu medida.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
