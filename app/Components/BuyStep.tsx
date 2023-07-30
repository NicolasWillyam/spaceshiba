import React from "react";

function BuyStep({
  id,
  title,
  discription,
}: {
  id: string;
  title: string;
  discription: string;
}) {
  return (
    <div className="bg-gradient-to-l from-[#2D2A6A] to-[#3A3A9D] p-4 px-6 mt-10 rounded-[20px] drop-shadow-lg">
      <div className="flex items-center">
        <span className="text-[20px] font-medium text-gray-400">{id}</span>
        <span className="text-[16px] ml-2 font-medium text-white">{title}</span>
      </div>
      <p className="text-[14px] text-gray-400 mt-2">{discription}</p>
    </div>
  );
}

export default BuyStep;
