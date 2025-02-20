import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import assets from "../assets/assest";
import { useNavigate } from "react-router-dom";
import { Particles } from "@/components/ui/particles";

const Auth = () => {
  const { auth, setAuth } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black text-gray-300 w-screen h-screen flex flex-col justify-center items-center px-4">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
      <button
        onClick={() => navigate("/")}
        className="absolute top-10 right-10  p-2 rounded-full transition duration-300"
      >
        <img src={assets.crossicon} alt="Close" className="w-6 h-6" />
      </button>

      <div className="border border-white bg-gray-900/50  p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-[#38BDF8] mb-6">
          {auth === "login" ? "Welcome Back!" : "Create an Account"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {auth !== "login" && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            />
          )}
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          />
          <button
            type="submit"
            className="w-full bg-[#38BDF8] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#2a5cc8] transition duration-300"
          >
            {auth === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-gray-400">
          {auth === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            onClick={() => setAuth(auth === "login" ? "signup" : "login")}
            className="text-[#38BDF8] font-semibold hover:underline"
          >
            {auth === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
