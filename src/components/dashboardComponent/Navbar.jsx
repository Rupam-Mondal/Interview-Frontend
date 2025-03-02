import React, { useContext, useState, useEffect, useRef } from "react";
import UserContext from "@/contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch user from localStorage when the component mounts
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser)); // Convert string to object
  //     }
  //   }
  // }, [setUser]);

  // Close dropdown when clicking outside
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
      <div className="text-xl font-bold text-white">
        <p>
          Welcome{" "}
          {user?.username
            ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
            : "Guest"}
        </p>
      </div>

      <div className="relative" ref={dropdownRef}>
        <div
          className="h-12 w-12 cursor-pointer transition-all duration-200 active:scale-95"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <img className="h-full w-full" src={user?.avatar} alt="" />
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
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  setUser(null);
                  navigate("/");
                }}
              >
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
