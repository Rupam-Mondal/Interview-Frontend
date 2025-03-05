import React, { useContext, useEffect } from "react";
import { Particles } from "../ui/particles";
import { useNavigate } from "react-router-dom";
import { ScrollProgress } from "../magicui/scroll-progress";
import UserContext from "@/contexts/UserContext";
import Features from "../Features/Feature";
import Heroimage from "../Heroimage/Heroimage";

const Background = () => {
  const {user, setUser} =useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Convert string to object
      }
    }
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <ScrollProgress className="top-[75px]" />
      <Particles
        className="absolute min-h-[250vh] inset-2"
        quantity={500}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div>
        {/* Main Content */}
        <div className="min-h-[100vh] flex flex-col justify-center gap-5 items-center text-center px-6 space-y-6">
          
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl md:text-6xl font-semibold leading-none text-transparent">
              Welcome to{"\n"}Our{" "}
              <span className="text-4xl md:text-8xl text-[#38BDF8]">
                InterView
              </span>{" "}
              Website
            </span>

          <button
            className="hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 border border-white text-white/50 hover:shadow-xl"
            onClick={() => {
              if(localStorage.getItem("token")){
                navigate(`/dashboard/${user.id}`);
              }
              else{
                navigate("/auth");
              }
            }}
          >
            Get Started for Free
          </button>
        </div>

        <hr className="w-3/4 mx-auto border-t-2 border-gray-600 mb-6" />

        <section className="py-16 px-8 text-center">
          <h2 className="text-4xl font-bold text-[#38BDF8]">About Us</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            We aim to provide the best platform to help individuals prepare for
            interviews with ease. Our resources, guidance, and interactive tools
            make interview preparation seamless.
          </p>
        </section>


        {/* Features Section */}
        <Features/>

        <Heroimage/>
      </div>
    </>
  );
};

export default Background;
