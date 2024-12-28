import React, { useState } from "react";
import { use } from "react";

function ProjectCard({ projectImg, ProfileImg, ProfileName, date, children }) {

  
  return (
    <div className="group flex flex-col gap-2 p-2 rounded-md h-[228px] w-[300px]  bg-[#ebe9e6]  transition-transform duration-300 transform hover:scale-y-105 origin-top overflow-hidden hover:overflow-visible transition-all ease-in-out hover:relative hover:z-10 hover:cursor-pointer" >
      {/* Project Image */}
      <img
        src={projectImg}
        alt="Project"
        className="rounded-md h-[148px] w-full object-cover shadow-lg"
      />

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-2  w-full">

        <div className="flex flex-row justify-start  w-full gap-2">
          <img
            src={ProfileImg}
            alt="Profile"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <span className="text-sm font-medium font-semibold">{ProfileName}</span>
            <span className="block text-xs text-gray-600">Created on {date}</span>

          </div>
        </div>

        <div className=" felx flex-row justify-center items-center bg-[#ebe9e6] px-3 w-[300px] 
         rounded-b-lg">
          <p className="text-md text-gray-700 mt-2  w-full">{children}</p>
        </div>



      </div>
    </div>

  );
}

export default ProjectCard;
