

// import React from "react";

// function ProjectCard({projectImg,ProfileImg,ProfileName,date,children}){
//     return (
//         <div className="flex flex-col gap-1 p-1 rounded-md h-[270px] w-[300px] bg-white shadow-md hover:h-[400px]">
//             projectt
//             <img src={img} className="rounded-md h-[100px] w-full" />
//             <div className="flex gap-1">
//                 <img src={ProfileImg} className='rounded-full h-8 w-8 object-cover' />
//                 <div>
//                     <div>
//                         {ProfileName}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProjectCard


//https://hearingsense.com.au/wp-content/uploads/2022/01/8-Fun-Facts-About-Your-Dog-s-Ears.webp
import React from "react";

function ProjectCard({ projectImg, ProfileImg, ProfileName, Date, children }) {
  return (
    <div className="group flex flex-col gap-2 p-2 rounded-md h-[300px] w-[300px] bg-white shadow-md transition-all duration-300 overflow-hidden hover:h-[400px]">
      {/* Project Image */}
      <img src={projectImg} alt="Project" className="rounded-md h-[200px] w-full object-cover" />

      {/* Profile Section */}
      <div className="flex items-center gap-2">
        <img
          src={ProfileImg}
          alt="Profile"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <span className="text-sm font-medium">{ProfileName}</span>
          <span className="block text-xs text-gray-500">{Date}</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="relative overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0 group-hover:max-h-40">
        <p className="text-sm text-gray-700 mt-2">{children}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
