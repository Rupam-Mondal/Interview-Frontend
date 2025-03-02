import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 bg-white/20 text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm w-full">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-28 h-28 rounded-full object-cover border-4 border-black shadow-lg"
      />

      <h1 className="mt-4 text-2xl font-bold">
        {user.username.charAt(0).toUpperCase() + user.username.slice(1) ||
          "Guest"}
      </h1>

      <p className="mt-2 text-lg text-gray-300">{user.email}</p>

      <button
        className="mt-5 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-semibold transition-all duration-200"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Card;
