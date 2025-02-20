import "./App.css";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/:userid" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
