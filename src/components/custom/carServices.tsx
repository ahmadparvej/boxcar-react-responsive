import React from "react";
import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CarServices = () => {
  return (
    <section className="py-20 px-4 lg:px-16 bg-gray-50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-blue-100 p-8 md:p-16">
          <CardHeader>
            <CardTitle>Are You Looking For a Car ?</CardTitle>
            <CardDescription>
              We are committed to providing our customers with exceptional
              service.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="default">Get Started</Button>
          </CardContent>
        </Card>
        <Card className="bg-pink-100 p-8 md:p-16">
          <CardHeader>
            <CardTitle>Do You Want to Sell a Car ?</CardTitle>
            <CardDescription>
              We are committed to providing our customers with exceptional
              service.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="default">Get Started</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CarServices;
