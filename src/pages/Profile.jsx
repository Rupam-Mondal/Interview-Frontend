import Card from "@/components/profileComponent/Card";
import { Particles } from "@/components/ui/particles";
import { ArrowLeft, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const storedInterviews = JSON.parse(localStorage.getItem("interviews")) || [];
    setInterviews(storedInterviews);
  }, []);

  const [expandedInterview, setExpandedInterview] = useState(null);

  // Function to delete an interview
  const handleDelete = (index) => {
    const updatedInterviews = interviews.filter((_, i) => i !== index);
    setInterviews(updatedInterviews);
    localStorage.setItem("interviews", JSON.stringify(updatedInterviews));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 h-full"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Back Button */}
      <button
        className="fixed top-5 left-5 border border-white rounded-full p-3 hover:bg-white hover:text-black transition-all duration-200"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* User Profile Content */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        <div className="overflow-hidden w-full">
          <Card user={user} />
        </div>

        {/* Stored Interviews Section */}
        <div className="w-full bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Interviews</h2>

          {interviews.length === 0 ? (
            <p className="text-gray-400">No interviews found.</p>
          ) : (
            <div className="space-y-4">
              {interviews.map((interview, index) => {
                const response = interview.response || [];
                const topic = response.length > 0 ? response[response.length - 1] : "N/A";
                const score = response.length > 1 ? response[response.length - 2] : "N/A";
                const details = response.slice(0, -2); // Exclude topic & score

                return (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg">
                    {/* Header Section with Topic, Score & Delete Button */}
                    <div className="flex justify-between items-center">
                      <div
                        className="cursor-pointer flex-grow"
                        onClick={() =>
                          setExpandedInterview(expandedInterview === index ? null : index)
                        }
                      >
                        <h3 className="text-lg font-medium">{topic}</h3>
                        <span className="text-sm bg-blue-600 px-3 py-1 rounded">
                          Score: {score}
                        </span>
                      </div>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(index)}
                        className="ml-4 text-red-400 hover:text-red-600 transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Expandable Interview Details */}
                    {expandedInterview === index && (
                      <div className="mt-3 bg-gray-700 p-3 rounded space-y-2">
                        {details.length > 0 ? (
                          details.map((item, idx) => (
                            <p key={idx} className="text-gray-300 text-sm">
                              - {item}
                            </p>
                          ))
                        ) : (
                          <p className="text-gray-400 text-sm">No details available.</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
