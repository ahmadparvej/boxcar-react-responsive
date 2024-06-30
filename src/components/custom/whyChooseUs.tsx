import React from 'react';
import { CreditCardIcon, FactoryIcon, ServerIcon, ShoppingCartIcon } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="px-4 lg:px-16 py-20 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center bg-white rounded-lg p-6">
          <CreditCardIcon className="h-12 w-12 mx-auto mb-4" />
          <h4 className="font-bold">Special Financing Offers</h4>
          <p className="text-sm text-muted-foreground">
            Get the best finance department that can help financial solutions to save you money.
          </p>
        </div>
        <div className="text-center bg-white rounded-lg p-6">
          <FactoryIcon className="h-12 w-12 mx-auto mb-4" />
          <h4 className="font-bold">Trusted Car Dealership</h4>
          <p className="text-sm text-muted-foreground">
            Providing the best car dealership experience with our trusted services.
          </p>
        </div>
        <div className="text-center bg-white rounded-lg p-6">
          <ShoppingCartIcon className="h-12 w-12 mx-auto mb-4" />
          <h4 className="font-bold">Transparent Pricing</h4>
          <p className="text-sm text-muted-foreground">
            Offering transparent pricing to ensure fairness and trust with our customers.
          </p>
        </div>
        <div className="text-center bg-white rounded-lg p-6">
          <ServerIcon className="h-12 w-12 mx-auto mb-4" />
          <h4 className="font-bold">Expert Car Service</h4>
          <p className="text-sm text-muted-foreground">
            Providing expert car services to keep your vehicle in top condition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
