import React from "react";
import { MapPin, Users, Star, Ship, Menu, X, CarFront, Gauge, GitBranch, Briefcase, Umbrella, Shirt, UtensilsCrossed, Hotel, Mail, Phone, Send } from 'lucide-react';

//Pasadia con Mangata Beach Club
const AmenitiesSection = () => {
  const amenities = [
    {
      icon: <Ship className="h-10 w-10 text-gray-700" />,
      label: "Transporte en bote",
    },
    {
      icon: <Umbrella className="h-10 w-10 text-gray-700" />,
      label: "Pasadía -todo incluido-",
    },
    {
      icon: <Shirt className="h-10 w-10 text-gray-700" />,
      label: "Servicio de toallas",
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10 text-gray-700" />,
      label: "Almuerzo a la carta",
    },
    {
      icon: <Hotel className="h-10 w-10 text-gray-700" />,
      label: "Promociones por temporadas",
    },
  ];
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-around items-center flex-wrap gap-8">
          {amenities.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center w-32"
            >
              {item.icon}
              <p className="mt-2 text-sm font-medium text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
