import Content from "@/components/dashboardComponent/Content";
import Card from "@/components/profileComponent/Card";
import { Particles } from "@/components/ui/particles";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative">
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="fixed top-5 left-5 border border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-200 cursor-pointer">
        <ArrowLeft className="w-6 h-6" onClick={() => window.history.back()} />
      </div>
      <Card user={user} />
      <Content />
    </div>
  );
};

export default Profile;
