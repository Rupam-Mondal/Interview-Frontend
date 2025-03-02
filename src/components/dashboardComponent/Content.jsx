import UserContext from "@/contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setLoading(false);
  }, [setUser]);

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center"
      onClick={() => {
        navigate(`/StartInterview/${Math.floor(Math.random() * 10000)}`);
      }}
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="mt-4 text-lg text-indigo-600 font-semibold">
        {loading ? "Loading..." : `User ID: ${user?.id || "N/A"}`}
      </p>
    </div>
  );
};

export default Content;