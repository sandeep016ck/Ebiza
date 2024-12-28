import React from 'react';

const BackProjectButton = () => {
  return (
    <button
      className=" w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transform hover:scale-105 active:scale-95 transition-transform ease-in-out duration-300"
    >
      Back this project
    </button>
  );
};

export default BackProjectButton;
