import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Chat1 from "./pages/Chat1";
import InterViewQuestions from "./pages/InterViewQuestions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/:userid" element={<Dashboard />} />
        <Route path="/StartInterview/:chatid" element={<Chat1 />} />
        <Route path="/InterView" element={<InterViewQuestions />} />
      </Routes>
    </>
  );
}

export default App;
