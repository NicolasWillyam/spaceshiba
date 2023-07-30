import React from "react";
import TeamMember from "./TeamMember";
import Author1 from "./image/author1.jpeg";
import Author2 from "./image/author2.jpeg";
import Author3 from "./image/author3.png";
import Author4 from "./image/author4.jpeg";
import Author5 from "./image/author5.jpeg";

function Roadmap() {
  return (
    <div className="hidden sm:block w-full sm:p-20 p-6 relative">
      <div className="block">
        <p className="text-[54px] font-bold text-[#333962]">Road Map</p>
        <p className="text-[32px] font-bold text-white -mt-4">Road Map</p>
      </div>
      <div className="max-w-6xl mx-auto mt-40">
        <div className="w-full flex">
          <div className="w-1/2 h-[240px] border-t-[30px] border-[#333962] absolute left-0">
            <p className="text-[52px] font-extrabold text-[#4661D6] -mt-[110px] ml-20 uppercase">
              Start
            </p>
          </div>
          <div className="w-[320px] h-[240px] border-t-[30px] border-[#333962] border-l-[0px] border-r-[0px] "></div>
          <div className="w-full h-[240px] text-right border-y-[30px] border-[#333962] py-2 px-10">
            <div className="w-[80%] text-right ml-auto">
              <p className="text-[32px] font-extrabold text-white uppercase">
                Concept
              </p>
              <p className="text-gray-400 font-meidum text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magma aliqua. Quis
                ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magma aliqua. Quis ipsum suspendisse ultrices
                gravida.Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[240px] border-[30px] border-[#333962] flex items-center border-l-[0px] rounded-r-full ">
            <p className="text-[100px] font-bold text-white uppercase">01</p>
          </div>
        </div>

        <div className="w-full flex -mt-[30px]">
          <div className="w-[320px] h-[240px] border-[30px] border-[#333962] border-r-[0px] rounded-l-full flex items-center text-right">
            <p className="text-[100px] font-bold text-white uppercase text-right ml-auto">
              02
            </p>
          </div>
          <div className="w-full h-[240px] border-y-[30px] border-[#333962] py-2 px-10">
            <div className="w-[80%]">
              <p className="text-[32px] font-extrabold text-white uppercase">
                Research
              </p>
              <p className="text-gray-400 font-meidum text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magma aliqua. Quis
                ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magma aliqua. Quis ipsum suspendisse ultrices
                gravida.Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[240px] "></div>
        </div>

        <div className="w-full flex -mt-[30px]">
          <div className="w-[320px] h-[240px]  border-[#333962] border-l-[0px] border-r-[0px] "></div>
          <div className="w-full h-[240px] border-y-[30px] border-[#333962]">
            <div className="w-[80%] text-right ml-auto py-2 px-10">
              <p className="text-[32px] font-extrabold text-white uppercase">
                Team Work
              </p>
              <p className="text-gray-400 font-meidum text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magma aliqua. Quis
                ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magma aliqua. Quis ipsum suspendisse ultrices
                gravida.Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[240px] border-[30px] border-[#333962] border-l-[0px] rounded-r-full flex items-center">
            <p className="text-[100px] font-bold text-white uppercase">03</p>
          </div>
        </div>

        <div className="w-full flex -mt-[30px]">
          <div className="w-[320px] h-[240px] border-[30px] border-[#333962] border-r-[0px] rounded-l-full flex items-center">
            <p className="text-[100px] font-bold text-white uppercase ml-auto">
              04
            </p>
          </div>
          <div className="w-full h-[240px] border-y-[30px] border-[#333962] py-2 px-10">
            <div className="w-[80%]">
              <p className="text-[32px] font-extrabold text-white uppercase">
                Market
              </p>
              <p className="text-gray-400 font-meidum text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magma aliqua. Quis
                ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magma aliqua. Quis ipsum suspendisse ultrices
                gravida.Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
          </div>
          <div className="w-[320px] h-[240px] border-b-[30px] border-[#333962]"></div>
          <div className="w-1/2 h-[240px] border-b-[30px] border-[#333962] absolute right-0   flex  items-end justify-end">
            <p className="text-[52px] font-extrabold text-[#4661D6] mr-20 uppercase">
              GOAL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
