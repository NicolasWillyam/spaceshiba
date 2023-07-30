import React from "react";
import { IoShareSocial } from "react-icons/io5";
import Image from "next/image";

function TeamMember({
  imgUrl,
  name,
  job,
}: {
  imgUrl: string;
  name: string;
  job: string;
}) {
  return (
    <div className="w-full rounded-[10px] mt-2 bg-gradient-to-t from-[#2D2A6A] to-[#3A3A9D] items-center drop-shadow-lg">
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        className="h-44 sm:h-64 w-full rounded-t-[10px] mx-auto bg-center bg-cover bg-no-repeat "
      ></div>
      <div className="w-full flex justify-between items-center sm:py-3 sm:px-4 py-2 px-3">
        <div className="">
          <p className="text-white font-semibold">Sophia Munn</p>
          <p className="text-gray-400 font-medium text-[12px]">
            FrontEnd Developer
          </p>
        </div>
        <IoShareSocial className="cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default TeamMember;
