import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const JoinCarBox = () => {
  return (
    <section className="py-20  text-center">
      <h3 className="text-2xl font-bold">Join BoxCar</h3>
      <p className="text-muted-foreground mt-4">
        Receive pricing updates, shopping tips {'&'} more!
      </p>
      <form className="mt-8 flex justify-center">
        <Input type="email" placeholder="Your email address" className="w-64" />
        <Button variant="default" className="ml-4">
          Sign Up
        </Button>
      </form>
    </section>
  );
};

export default JoinCarBox;
