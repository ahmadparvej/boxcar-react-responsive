import React from "react";
import cardata from "../../lib/cardata.json"
import CarCard from './carCard';
import { getTopFourCars } from '../../lib/carFilter';
import { Car } from "@/types/car";

const LatestCar = () => {

  const topFourCars:Car[] = getTopFourCars(cardata);

  return (
    <section className="py-20 px-4 lg:px-16 bg-gray-50 rounded-lg">
      <h3 className="text-2xl font-bold text-center">Latest Cars</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {topFourCars.map((car) => (
          <CarCard car={car} key={car.name} />
        ))}
      </div>
    </section>
  );
};

export default LatestCar;
