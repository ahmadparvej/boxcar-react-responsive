import React from "react";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from 'lucide-react';
import { SiBmw, SiAudi, SiVolkswagen, SiKia, SiFord, SiMercedes } from "react-icons/si";

const ExploreBrands = () => {
  const brands = [
    { name: "BMW", icon: <SiBmw className="w-16 h-16" /> },
    { name: "Audi", icon: <SiAudi className="w-16 h-16" /> },
    { name: "Volkswagen", icon: <SiVolkswagen className="w-16 h-16" /> },
    { name: "Kia", icon: <SiKia className="w-16 h-16" /> },
    { name: "Ford", icon: <SiFord className="w-16 h-16" /> },
    { name: "Mercedes", icon: <SiMercedes className="w-16 h-16" /> },
  ];

  return (
    <section className="py-20 mx-4 lg:mx-16 rounded-lg bg-[#F9FBFC] text-center">
      <div className="w-full mb-10">
        <h3 className="text-3xl font-bold mb-4">Explore Our Premium Brands</h3>
        <p className="text-base text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="flex justify-center mt-6">
          <Button variant="default">
            Show All Brands <MoveUpRight className="pl-1 w-6 h-6" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center">
            {brand.icon}
            <span className="mt-2 text-lg font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreBrands;
