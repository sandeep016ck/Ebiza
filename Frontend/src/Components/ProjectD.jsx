

import React from "react";

function ProjectD({productHed,productDesc,productImg,fundTobeRaised,fundRaised,backers,}){
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[80vw] p-3'>
                <div className='text-lg text-white font-bold text-center'>
                    {productHed}
                </div>
                <div className="text-base text-gray-300 text-center">
                    {productDesc}
                </div>

                <div className="flex gap-7 h-[500px]">
                    <div className="w-[60vw] flex justify-center items-center">
                      <img src={productImg} className="h-[300px]" />
                    </div>
                    <div className="w-[40vw] p-9">
                        <div className="text-4xl text-[#b2ecff]">
                           Rs.{fundRaised}
                        </div>
                        <div className="text-base text-white">
                            pledged of Rs.{fundTobeRaised} goal
                        </div>
                        <div>
                            <span>
                                1,427
                            </span><br></br>
                            backers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProjectD;