import React, { useContext, useState, useEffect, useRef } from "react";
import UserContext from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userId } = useContext(UserContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed z-10 top-0 right-0 w-full bg-black/30 backdrop-blur-lg shadow-lg px-5 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-white">UserName: {userId}</div>

      <div className="relative" ref={dropdownRef}>
        <div
          className="bg-gray-700 py-1 px-2 rounded-full cursor-pointer text-white"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          SS
        </div>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            <ul className="py-2 text-sm">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={()=>{
                navigate("/")
              }}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
