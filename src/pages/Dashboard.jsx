import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const user = useParams();
  return (
    <div>
      <h1>Dashboard</h1>'<p>Welcome to the dashboard</p>'
        <p>User ID: {user.userid}</p>
    </div>
  );
};

export default Dashboard;
