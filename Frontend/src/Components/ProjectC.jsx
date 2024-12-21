
import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectC(){
    return (
        <div className='w-full flex justify-center bg-slate-100 h-[500px]'>
                <div className="w-[80%] bg-slate-300 p-2">
                    list of projectss
                        <ProjectCard                
                            projectImg='https://hearingsense.com.au/wp-content/uploads/2022/01/8-Fun-Facts-About-Your-Dog-s-Ears.webp' ProfileImg='https://hearingsense.com.au/wp-content/uploads/2022/01/8-Fun-Facts-About-Your-Dog-s-Ears.webp' ProfileName='doggy' date='21-12-2024' 
                        >
                            this is description
                        </ProjectCard>
                        
                </div>
        </div>
    )
}

export default ProjectC;