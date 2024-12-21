

import React from "react";
import StyleButton from "./Buttons/styleButton";
import BackProjectButton from "./Buttons/BackProjectButton";

function ProjectD({ productHed, productDesc, productImg, fundTobeRaised, fundRaised, backers, }) {
    return (
        <div className='w-full flex justify-center text-white'>
            <div className='w-[80vw] p-3'>
                <div className='text-lg text-white font-bold text-center'>
                    {productHed}
                </div>
                <div className="text-base text-gray-300 text-center">
                    {productDesc}
                </div>

                <div className="flex  gap-7 h-[500px]">

                    <div className="w-[60vw] flex justify-center items-center">
                        <img src={productImg} className="h-[300px]" />
                    </div>

                    <div className="w-[40vw]  p-9  flex flex-col justify-center items-start gap-6 text-xl font-bold">

                        <div className=" felx flex-col gap justify-center items-start text-4xl text-[#b2ecff]  ">
                            <span> Rs.{fundRaised}</span> <br />
                            <span className="text-sm text-slate-300">pledged of Rs.{fundTobeRaised} goal</span>
                            
                        </div>
                        <div className="text-base text-white">

                        </div>
                        <div className="flex flex-col text-2xl text-[#b2ecff]">
                            <span className="">
                                1,427
                            </span>
                            <span className="text-sm text-slate-300">backers</span>
                        </div>

                        <div className="flex flex-col justify-center items-start text-[#b2ecff]">
                            
                            <span className="">
                                11
                            </span>
                            <span className="text-sm text-slate-300">days to go </span>
                        </div>
                        <div className=" w-[70%] flex flex-row justify-start items-center py-3  ">
                            <BackProjectButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ProjectD;