import Content from "@/components/dashboardComponent/Content";
import Navbar from "@/components/dashboardComponent/Navbar";
import UserContext from "@/contexts/UserContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const {userid}  = useParams();
  const {setUserId} = useContext(UserContext);
  setUserId(userid);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Navbar />
      <Content />
    </div>
  );
};

export default Dashboard;
