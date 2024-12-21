import React from "react";

function ProjectCard({ projectImg, ProfileImg, ProfileName, date, children }) {
  return (
    <div className="group flex flex-col gap-2 p-2 rounded-md h-[300px] w-[300px] bg-white shadow-md transition-transform duration-300 transform hover:scale-y-105 origin-top">
      {/* Project Image */}
      <img
        src={projectImg}
        alt="Project"
        className="rounded-md h-[200px] w-full object-cover"
      />

      {/* Profile Section */}
      <div className="flex items-center gap-2">
        <img
          src={ProfileImg}
          alt="Profile"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <span className="text-sm font-medium">{ProfileName}</span>
          <span className="block text-xs text-gray-500">Created on {date}</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0 group-hover:max-h-40 px-2">
        <p className="text-md text-gray-700 mt-2">{children}</p>
      </div>
      <p>sujit </p>
    </div>
    
  );
}

export default ProjectCard;
