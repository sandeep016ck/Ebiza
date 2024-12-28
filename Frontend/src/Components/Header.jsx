import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import StyleButton from "./Buttons/styleButton";
import logo2 from "../assets/logo2.png";
import "tailwindcss/tailwind.css";

const Header = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex flex-col sticky top-0 z-20 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 p-4 text-white ${
        isScrolled ? "shadow-xl" : ""
      }`}
    >
      {/* Top Section: Logo and Buttons */}
      <div className="flex justify-between items-center mb-4">
        {/* Logo */}
        <div className="text-2xl w-16 h-16 rounded-full scale-105">
          <img
            src={logo2}
            alt="Logo"
            className="w-full h-full rounded-full scale-105 hover:scale-125 transition-all ease-in-out delay-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-3 mr-4">
          <StyleButton text="SignUp" onClick={() => onNavigate("sign_up")} />
          <StyleButton text="Login" onClick={() => onNavigate("sign_in")} />
        </div>
      </div>

      {/* Bottom Section: Navigation Links and Search Bar */}
      <div className="flex justify-evenly items-center">
        {/* Navigation Links */}
        <div className="flex space-x-6 gap-4">
          <a
            href="#home"
            className="hover:text-[#7193f1] transition ease-in text-xl font-bold"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-[#7193f1] transition text-xl font-bold"
          >
            Projects
          </a>
          <a
            href="#your-projects"
            className="hover:text-[#7193f1] transition text-xl font-bold"
          >
            Your Projects
          </a>
          <a
            href="#investment-history"
            className="hover:text-[#7193f1] transition text-xl font-bold"
          >
            Investment History
          </a>
        </div>

        {/* Dynamic Search Bar */}
        <div className="flex items-center space-x-2 bg-white rounded px-2 py-1 text-gray-800 focus-within:ring-2 focus-within:ring-purple-500">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="px-2 py-1 bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
