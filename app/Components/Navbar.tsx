import React from "react";
import { BiTransferAlt } from "react-icons/bi";
import shiba5 from "./image/shiba5.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="w-full px-4 sm:px-0">
      <div className="max-w-[1280px] h-10 mx-auto flex items-center justify-between pt-8 sm:pt-12">
        <div className="Logo flex items-center">
          <Image src={shiba5.src} width={40} height={40} alt="image" />
          <p className="uppercase text-[#222855] text-[24px] ml-1.5 font-extrabold tracking-wide ">
            Space Shiba
          </p>
        </div>

        <div className="Menu sm:block hidden">
          <ul className="flex text-[16px] font-medium text-[#222855]">
            <li className="mr-12">Home</li>
            <li className="mr-12">Buy</li>
            <li className="mr-12">Ecosystem</li>
            <li className="mr-12">Community</li>
          </ul>
        </div>

        <div className="">
          <button className="text-[14px] flex items-center border-[#222855] font-medium border-[2px] p-3 px-4 rounded-[16px]">
            <BiTransferAlt size={20} className="" color="#222855" />
            <p className="ml-1 text-[#222855] sm:block hidden">
              SpaceShib Swap
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
