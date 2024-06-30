import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-20 bg-blue-50 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Find Your Dream Car</h2>
      <p className="mt-2 text-base md:text-lg text-muted-foreground text-center">Find cars for sale and rent near you</p>
      <div className="flex items-center mt-6 pl-4 bg-white rounded-full border">
        <Select>
          <SelectTrigger className="w-full md:w-auto border-none mt-0 rounded-s-full">
            <SelectValue placeholder="Used Cars" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="used">Used Cars</SelectItem>
            <SelectItem value="new">New Cars</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-auto border-none rounded-none mt-0">
            <SelectValue placeholder="Any Make" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="toyota">Toyota</SelectItem>
            <SelectItem value="honda">Honda</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-auto border-none rounded-none mt-0 rounded-e-full">
            <SelectValue placeholder="All Prices" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-20k">Under $20k</SelectItem>
            <SelectItem value="20k-50k">$20k - $50k</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="default" className="w-full h-full md:w-auto rounded-full mt-0">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </div>
      <Image src="/audi_main.png" alt="Car" width={500} height={300} className="mt-12"/>
    </section>
  );
};

export default Hero;
