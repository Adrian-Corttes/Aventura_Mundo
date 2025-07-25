import React from "react";

const CarRentalCard = ({ image, name, features, price }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-70">
        <img
          src={image}
          alt={`Imagen de ${name}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x400/e2e8f0/4a5568?text=Auto";
          }}
        />
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
      
      <div className="p-6 pt-0 bg-gray-50">
        <p className="text-lg text-gray-700">
          {" "}
          <span className="font-bold text-2xl text-indigo-600">${price}</span>
          /día
        </p>
        <button className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md">
          Reservar Auto
        </button>
      </div>
    </div>
  );
};

export default CarRentalCard;
