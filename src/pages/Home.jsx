import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Background from "@/components/ParticleBackground/Background";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-gray-300 w-screen min-h-fit flex flex-col font-poppins">
      <Navbar />
      <Background />
      <Footer />
    </div>
  );
};

export default Home;
