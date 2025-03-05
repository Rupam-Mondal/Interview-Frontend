import React, { useContext, useEffect } from "react";
import { Particles } from "../ui/particles";
import { useNavigate } from "react-router-dom";
import { ScrollProgress } from "../magicui/scroll-progress";
import UserContext from "@/contexts/UserContext";
import Features from "../Features/Feature";
import Heroimage from "../Heroimage/Heroimage";

const Background = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
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

      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 space-y-6">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
          Elevate Your <span className="text-[#38BDF8]">Interview</span> Skills
        </h1>

        <p className="text-lg md:text-xl text-white max-w-3xl">
          Unlock AI-powered guidance, real-time feedback, and expert-curated
          resources to ace your next interview with confidence.
        </p>

        <button
          className="mt-4 bg-[#38BDF8] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-[#38BDF8] hover:shadow-xl"
          onClick={() => {
            if (localStorage.getItem("token")) {
              navigate(`/dashboard/${user.id}`);
            } else {
              navigate("/auth");
            }
          }}
        >
          Get Started for Free
        </button>
      </div>

      {/* Features Section */}
      <Features />

      {/* About us */}
      {/* About Section */}
      <section className="py-20 px-8 text-center relative">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
          <h2 className="text-5xl font-extrabold text-[#38BDF8] drop-shadow-md">
            About Us
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            We are revolutionizing interview preparation with
            <span className="text-[#38BDF8] font-semibold"> AI-driven insights</span>,
            personalized mock interviews, and expert-curated tips.
            Our goal is to empower you with the
            <span className="text-[#38BDF8] font-semibold"> confidence and skills</span>
            needed to succeed in any interview.
          </p>
        </div>
      </section>



      {/* Image section */}
      <div className="relative">
        <Heroimage />
      </div>
    </>
  );
};

export default Background;
