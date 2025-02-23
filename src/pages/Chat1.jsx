import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Particles } from "@/components/ui/particles";
import assets from "@/assets/assest";
import UserContext from "@/contexts/UserContext";

const Chat1 = () => {
  const navigate = useNavigate();
  const { chatid } = useParams();
  const { userId, course, setCourse, level, setLevel } =
    useContext(UserContext);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center relative">
      {/* Particle Effect */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Header */}
      <div className="w-full p-4 text-xl fixed top-0 left-0 right-0 bg-gray-900/70 flex items-center justify-between shadow-md z-50">
        <p className="text-lg md:text-xl font-bold">Chat ID: {chatid}</p>
        <button
          onClick={() => navigate(`/dashboard/${userId}`)}
          className="p-2 rounded-full bg-red-600 hover:bg-red-500 transition duration-300 shadow-lg"
          title="Close Chat"
        >
          <img
            src={assets.crossicon}
            alt="Close"
            className="w-5 h-5 md:w-6 md:h-6"
          />
        </button>
      </div>

      {/* Course Selection Section */}
      <div className="flex justify-center items-center w-full h-screen px-6">
        <div className="flex flex-col items-center gap-6 bg-gray-900/70 p-8 rounded-2xl shadow-lg max-w-lg w-full">
          <h2 className="text-2xl md:text-3xl font-bold">Select Your Course</h2>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            {/* Course Dropdown */}
            <div className="flex flex-col items-start w-full">
              <label htmlFor="course" className="text-sm text-gray-400 mb-1">
                Choose a Course
              </label>
              <select
                id="course"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer w-full"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="Data Science">Data Science</option>
                <option value="AI">AI</option>
                <option value="UI/UX">UI/UX</option>
                <option value="MERN Stack">MERN Stack</option>
                <option value="Macine Learning">Machine Learning</option>
              </select>
            </div>

            {/* Level Dropdown */}
            <div className="flex flex-col items-start w-full">
              <label htmlFor="level" className="text-sm text-gray-400 mb-1">
                Choose Difficulty
              </label>
              <select
                id="level"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer w-full"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Medium">Medium</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Start Course Button */}
          <button
            className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 w-full text-center"
            onClick={() => {
              navigate(`/InterView/${course}/${level}`);
            }}
          >
            Start Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat1;
