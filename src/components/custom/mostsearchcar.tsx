"use client"
import React, { useState } from "react";
import { getTopFourCars, getCarsInDescendingOrder } from '../../lib/carFilter';
import cardata from "../../lib/cardata.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarCard from "./carCard";

const MostSearchCar = () => {
  const [activeTab, setActiveTab] = useState("In Stock");
  const tabs = ["In Stock", "Sedan", "SUV", "Convertible"];

  const filterCarsByType = (type: string) => {
    if (type === "In Stock") {
      return getTopFourCars(getCarsInDescendingOrder(cardata));
    }
    return cardata.filter(car => car.type === type).slice(0, 4);
  };

  const topFourCars = filterCarsByType(activeTab);

  return (
    <section className="py-20 px-4 lg:px-16 bg-gray-50 rounded-lg">
      <h3 className="text-2xl font-bold text-center">The Most Searched Cars</h3>
      <Tabs defaultValue="In Stock" className="mt-8">
        <TabsList className="flex justify-center">
          {tabs.map((type) => (
            <TabsTrigger
              key={type}
              value={type}
              onClick={() => setActiveTab(type)}
            >
              {type}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((type) => (
          <TabsContent key={type} value={type}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {filterCarsByType(type).map((car) => (
                <CarCard car={car} key={car.name} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default MostSearchCar;
