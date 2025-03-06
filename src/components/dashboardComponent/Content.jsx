import UserContext from "@/contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const Content = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Hardcoded Data (No Real-time Updates)
  const totalInterviews = 20; // Fixed total interviews count

  const interviewsByTopic = [
    { topic: "DSA", count: 7 },
    { topic: "Web Dev", count: 5 },
    { topic: "AI/ML", count: 3 },
    { topic: "System", count: 5 },
  ];

  const avgMarksData = [
    { date: "Mon", avgMarks: 3.5 },
    { date: "Tue", avgMarks: 4.0 },
    { date: "Wed", avgMarks: 4.2 },
    { date: "Thu", avgMarks: 4.5 },
    { date: "Fri", avgMarks: 4.3 },
  ];

  const interviewTrend = [
    { day: "Mon", count: 2 },
    { day: "Tue", count: 3 },
    { day: "Wed", count: 4 },
    { day: "Thu", count: 5 },
    { day: "Fri", count: 6 },
  ];

  // Fetch user data on mount
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
      className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full text-center cursor-pointer transition-transform"
      onClick={() =>
        navigate(`/StartInterview/${Math.floor(Math.random() * 10000)}`)
      }
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>

      {/* Total Interviews Done */}
      <div className="mt-4 text-lg font-semibold text-gray-700">
        <p>
          Total Interviews Done:{" "}
          <span className="text-indigo-600">{totalInterviews}</span>
        </p>
      </div>

      {/* Small Graphs - Side by Side */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Graph 1: Interviews by Topic */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Interviews by Topic
          </h2>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={interviewsByTopic}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="topic" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Graph 2: Average Marks */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Average Marks Over Time
          </h2>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={avgMarksData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#333" />
              <YAxis stroke="#333" domain={[3, 5]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="avgMarks"
                stroke="#E63946"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Graph 3: Interview Completion Trend */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Interview Completion Trend
          </h2>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={interviewTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#1D4ED8"
                strokeWidth={2}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Content;
