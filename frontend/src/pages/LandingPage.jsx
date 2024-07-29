import React from "react";
import Navbar from "../components/Navbar";

export default function LandingPage(){
    return(
        <div className="">
            <img src="src/assets/Desktop.png" className="object-cover object-center h-full w-full absolute z-[-1]"></img>

            <div className="flex justify-center items-center py-5 "  >
                    <div className=" w-[83.4%]  bg-white rounded-lg shadow-2xl  " >
                    <div > <Navbar/></div>
                    </div>
                </div>

            

            <div className="w-[400px]  ml-[124px] h-[27rem] flex flex-col justify-between">
                
                <p className="text-[#25324B] text-[50px] font-bold ">Discover more than </p>
                <p className="text-[#239852] text-[60px] font-bold">5000+ Jobs</p>
                <img src="src/assets/BrushStroke.png"></img>
                <p className="text-[#515B6F] pb-[11px]">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
                </p>

                
                <div className="pb-3"  >
                    <div className="flex justify-between items-center lg:w-[700px] md:w-[526px] sm:w-[438px] p-5  bg-white rounded-lg shadow-2xl  " >
                        <img src="src/assets/SearchIcon.png" className="h-[30px] pr-4"></img>
                        <input placeholder="Job title or keyword" className="w-[1000px] bg-transparent border-b border-[#D6DDEB] py-3"></input>
                        <button className="bg-[#239852] text-white w-[500px] h-12 ">Search my job</button>
                    </div>
                </div>

                <div>
                <span className="text-[#202430] ">Popular : </span>
                <span className="text-[#202430] font-semibold">UI Designer, UX Researcher, Android, Admin</span>
                </div>
                
            </div>
            
        </div>
    );
}