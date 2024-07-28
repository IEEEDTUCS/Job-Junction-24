import React from "react";
import Navbar from "../components/Navbar";

export default function LandingPage(){
    return(
        <div className="">
            <img src="src/assets/Desktop.png" className="bg-cover bg-center h-screen flex flex-col items-center absolute w-screen z-[-1]"></img>

            <div className="justify-center items-center"> <Navbar/></div>

            <div className="w-[30%]  ml-[124px] h-[27rem] flex flex-col justify-between">
                <p className="text-[#25324B] text-[50px] font-bold">Discover more than </p>
                <p className="text-[#239852] text-[60px] font-bold">5000+ Jobs</p>
                <img src="src/assets/BrushStroke.png"></img>
                <p className="text-[#515B6F]">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
                </p>
                <div className="flex   " >
                    <img src="src/assets/SearchIcon.png"></img>
                    <input placeholder="Job title or keyword" className="w-[1000px] bg-transparent border-b border-[#D6DDEB]"></input>
                    <button className="bg-[#239852] text-white ">Search my job</button>

                </div>
                <div>
                <span className="text-[#202430] ">Popular : </span>
                <span className="text-[#202430] font-semibold">UI Designer, UX Researcher, Android, Admin</span>
                </div>
                
            </div>
            
        </div>
    );
}