import React from "react";
import StyleButton from "./Buttons/styleButton";

import logo from '../assets/logo.png'


const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4  text-white sticky top-0 z-20 bg-[#00395a] ">
      {/* Logo */}
      <div className="text-2xl  w-16 h-16 rounded-full scale-105">
        <img src={logo} alt="" className="w-full h-full rounded-full scale-105 hover:scale-125 transition-all ease-in-out delay-100" />
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-3   mr-4">
        <StyleButton text='SignUp'/>
        <StyleButton  text='Login' />
      </div>
    </nav>
  );
};

export default Header;