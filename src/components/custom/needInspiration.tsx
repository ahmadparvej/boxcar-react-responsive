import React from "react";
import { Button } from '@/components/ui/button';

const NeedInspiration = () => {
  return (
    <section className="py-20 text-center">
      <h3 className="text-2xl font-bold">Need Some Inspiration?</h3>
      <div className="flex justify-center mt-8 flex-wrap space-x-4">
        {[
          "Automatic Cars",
          "SUVs",
          "Electric Cars",
          "New In Stock",
          "Petrol",
          "Diesel",
        ].map((type) => (
          <Button key={type} variant="outline" className="py-2 px-4 md:py-3 md:px-6 border border-gray-300 hover:bg-gray-100 text-gray-700">
            {type}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default NeedInspiration;
