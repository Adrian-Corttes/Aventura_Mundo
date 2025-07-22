import React from "react";

const DestinationCard = ({ image, name, description }) => {

  return (
    <div className="bg-white  shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group flex flex-col">
      <div className="relative h-56">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`Imagen de ${name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/e2e8f0/4a5568?text=Actividad";
          }}
        />
   
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
