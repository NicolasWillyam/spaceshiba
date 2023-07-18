import React from "react";
import { BiTransferAlt } from "react-icons/bi";

function Navbar() {
  return (
    <div className="w-full">
      <div className="max-w-[1280px] h-10 mx-auto flex items-center justify-between pt-12">
        <div className="Logo">
          <p className="uppercase text-[#004E7F] text-[24px] font-bold tracking-wider">
            Space Shiba
          </p>
        </div>

        <div className="Menu">
          <ul className="flex text-[16px] font-medium">
            <li className="mr-12">Home</li>
            <li className="mr-12">Buy</li>
            <li className="mr-12">Ecosystem</li>
            <li className="mr-12">Community</li>
          </ul>
        </div>

        <div className="">
          <button className="text-[14px] flex items-center border-[#004E7F] font-medium border-[2px] p-3 px-4 rounded-[16px]">
            <BiTransferAlt size={20} className="" color="#004E7F" />
            <p className="ml-1 text-[#004E7F]">SpaceShib Swap</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
