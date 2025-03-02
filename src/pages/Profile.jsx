import Card from "@/components/profileComponent/Card";
import { Particles } from "@/components/ui/particles";
import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative">
      <Particles
        className="absolute inset-0"
        quantity={900}
        ease={80}
        color="#ffffff"
        refresh
      />
      <Card user={user} />

    </div>
  );
};

export default Profile;
