

import React from "react";
import StyleButton from "./Buttons/styleButton";
import logo2 from "../assets/logo2.png";

const Header = ({ onNavigate }) => {
  return (
    <nav className="flex justify-between items-center p-4 text-white sticky top-0 z-20 bg-[#00395a]">
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
    </nav>
  );
};

export default Header;