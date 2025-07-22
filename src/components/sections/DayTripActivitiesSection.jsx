import React from "react";
import DestinationCard from "../cards/DestinationCard";
//import lunchday from "../../assets/img/lunchday.webp";

const DayTripActivitiesSection = () => {
  const activities = [
    {
      image:
        "https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1708639675/jlauajii8greu4wm3pqh.jpg",
      name: "Tour por las Islas del Rosario",
      description:
        "Embárcate en una aventura inolvidable a través del paraíso natural de las Islas del Rosario. Descubre la belleza intocada de sus aguas cristalinas, sus playas de arena blanca y su exuberante vida marina.",
    },
    {
      image:
        "https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1707619004/esycymnwcngp9rdu1kmd.jpg",
      name: "Snorkeling",
      description:
        "Sumérgete en un mundo submarino de colores y maravillas. Descubre la increíble biodiversidad marina mientras exploras los arrecifes de coral más vibrantes y las aguas cristalinas del Caribe.",
    },
    {
      image:
        "https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1708638595/efbanq2wu5nyge2xhvhd.jpg",
      name: "Kayak",
      description:
        "Rema hacia la aventura y descubre un nuevo mundo desde la perspectiva del agua. Navega a través de manglares, cuevas ocultas y playas vírgenes mientras exploras la costa de Cartagena.",
    },
    {
      image:
        "https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1708639808/iz7fsozy6ezdpfuxmaa7.jpg",
        name: "Paddle Board",
      description:
        "Deslízate hacia la aventura en paddle board en las aguas cristalinas. Embárcate en una experiencia única mientras navegas sobre la serenidad del mar Caribe, rodeado de la impresionante belleza natural.",
    },
  ];

  return (
    <section id="actividades" className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Actividades en tu Pasadía
          </h2>
          <h3 className="text-lg">Descubre la isla con aventuras sin límites</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Encuentra diversidad de actividades en nuestra zona, desde kayak
            hasta tours por la isla, Mangata te abre las puertas a que explores
            los alrededores de tu estadía.
          </p>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {activities.map((activity) => (
            <DestinationCard
              key={activity.name}
              image={activity.image}
              name={activity.name}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayTripActivitiesSection;
