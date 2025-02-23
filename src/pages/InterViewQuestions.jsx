import { Particles } from "@/components/ui/particles";
import React from "react";

const InterViewQuestions = () => {
  return (
    <div className="bg-black w-screen min-h-screen">
      <Particles
        className="absolute inset-0"
        quantity={900}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div>
      </div>
    </div>
  );
};

export default InterViewQuestions;
