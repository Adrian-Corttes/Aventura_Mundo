import React from "react";
import { MapPin, Users, Star, Ship, Menu, X, CarFront, Gauge, GitBranch, Briefcase, Umbrella, Shirt, UtensilsCrossed, Hotel, Mail, Phone, Send, CalendarSync, ShieldAlert} from 'lucide-react';
import onix from "../../assets/img/onix.jpeg";
import tracker from "../../assets/img/tracker.jpeg";
import CarRentalCard from "../cards/CarRentalCard";

const CarRentalSection = () => {
  const carFeatures = {
    compacto: [
      {
        icon: <Users className="h-5 w-5 text-indigo-500" />,
        text: "4 Pasajeros",
      },
      {
        icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
        text: "2 Maletas",
      },
    ],
    tracker: [
      {
        icon: <CalendarSync className="h-5 w-5 text-indigo-500" />,
        text: "Automatico",
      },
      {
        icon: <Users className="h-5 w-5 text-indigo-500" />,
        text: "5 Pasajeros",
      },
      {
        icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
        text: "4 Maletas",
      },
      {
        icon: <ShieldAlert className="h-5 w-5 text-indigo-500" />,
        text: " 1.500.000 de depósito reembolsable",
      },
    ],
    onix: [
      {
        icon: <CalendarSync className="h-5 w-5 text-indigo-500" />,
        text: "Automatico",
      },
      {
        icon: <Users className="h-5 w-5 text-indigo-500" />,
        text: "5 Pasajeros",
      },
       
      {
        icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
        text: "3 Maletas",
      },
       {
        icon: <ShieldAlert className="h-5 w-5 text-indigo-500" />,
        text: " 1.500.000 de depósito reembolsable",
      },
    ],
  };

  const cars = [
    {
      image: onix,
      name: "Chevrolet Onix",
      features: carFeatures.onix,
      price: "220 (COP)",
    },
    {
      image: tracker,
      name: "Chevrolet Tracker",
      features: carFeatures.tracker,
      price: "350 (COP)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514316454348-772aadd4e2b3?q=80&w=1974&auto=format&fit=crop",
      name: "Compacto Urbano",
      features: carFeatures.compacto,
      price: "80",
    },
  ];
  return (
    <section id="alquiler" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Muévete a tu Ritmo
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explora cada rincón de tu destino con total libertad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car) => (
            <CarRentalCard key={car.name} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRentalSection;
