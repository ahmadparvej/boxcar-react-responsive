import React from "react";
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Fuel, Gauge, Joystick, MoveUpRight } from "lucide-react";
import { Car } from '../../types/car';
import Image from "next/image";

const iconMapping: { [key: string]: JSX.Element } = {
  Gauge: <Gauge />,
  Fuel: <Fuel />,
  Joystick: <Joystick />,
};

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Card key={car.name} className="bg-[#050B20] text-white">
      <Image
        width={100}
        height={200}
        src={car.img}
        alt={car.name}
        className="w-full h-48 object-cover rounded-t-lg"
        unoptimized
      />
      <CardContent className="py-4 px-5">
        <div>
          <h4 className="text-lg font-bold">
            {car.name} - {car.year}
          </h4>
          <p className="text-sm">4.0 D5 PowerPulse Momentum 5dr AWD…</p>
        </div>
        <div className="my-3 py-3 border-y-[0.5px] border-gray-500 flex justify-between">
          {car.spec.map(({ icon, label }) => (
            <div
              className="flex flex-col justify-center items-center text-sm"
              key={label}
            >
              {iconMapping[icon]}
              {label}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg">{car.price}</p>
          <Button variant="link" className="text-white">
            <div className="flex">
              View Details <MoveUpRight className="pl-1 w-6 h-6" />
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
