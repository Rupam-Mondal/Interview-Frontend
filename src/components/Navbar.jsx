import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Navbar = () => {

  const navigate = useNavigate();

  const { auth,setAuth } = useContext(UserContext);

  return (
    <div className="fixed top-0 right-0 w-full bg-black/30 backdrop-blur-lg shadow-lg px-5 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-white">Nav.</div>

      {/* Buttons */}
      <div className="flex gap-4 sm:gap-8">
        <button
          className="text-white border border-white px-4 py-2 rounded-md transition duration-300 hover:bg-white hover:text-black hover:shadow-lg"
          onClick={() => {
            setAuth("login");
            navigate("/auth");
          }}
        >
          Login
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded-md transition duration-300 hover:bg-gray-500 hover:shadow-lg"
          onClick={() => {
            setAuth("signup");
            navigate("/auth");
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
