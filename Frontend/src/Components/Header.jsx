import React from "react";
import StyleButton from "./Buttons/styleButton";


const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4  text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Buttons */}
      <div className="flex flex-row gap-3   mr-4">
        <StyleButton text='SignUp'/>
        <StyleButton  text='Login' />
      </div>
    </nav>
  );
};

export default Header;