import React from "react";
import { Button } from "@/components/ui/button";
import { FaCarSide, FaTruck, FaBus, FaBolt, FaRoad } from "react-icons/fa";
import { IoMdCar } from "react-icons/io";
import { MdOutlineElectricCar } from "react-icons/md";

const BrowseByType = () => {
  const carTypes = [
    { type: "SUV", icon: <FaCarSide /> },
    { type: "Sedan", icon: <IoMdCar /> },
    { type: "Hatchback", icon: <FaBolt /> },
    { type: "Coupe", icon: <FaCarSide /> },
    { type: "Hybrid", icon: <FaRoad /> },
    { type: "Convertible", icon: <FaRoad /> },
    { type: "Van", icon: <FaBus /> },
    { type: "Truck", icon: <FaTruck /> },
    { type: "Electric", icon: <MdOutlineElectricCar /> },
  ];

  return (
    <section className="py-20 px-4 lg:px-16 text-center">
      <h3 className="text-2xl font-bold">Browse by Type</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 mt-8">
        {carTypes.map(({ type, icon }) => (
          <Button key={type} variant="outline" className="flex flex-col justify-center items-center p-10">
            <div className="h-3 w-3">{icon}</div>
            <span className="mt-2">{type}</span>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default BrowseByType;
