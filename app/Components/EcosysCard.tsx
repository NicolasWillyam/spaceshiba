import Image from "next/image";
import React from "react";

function EcosysCard({
  img,
  title,
  discriptions,
}: {
  img: string;
  title: string;
  discriptions: string;
}) {
  return (
    <div className="relative bg-gradient-to-t from-[#2D2A6A] to-[#3A3A9D] w-full h-auto rounded-[20px] rounded-tr-[10px] py-8 px-8 drop-shadow-lg">
      <div className="h-24 w-24 mx-auto rounded-full bg-[#3A3A9D] flex items-center justify-center absolute -top-10 right-0">
        <Image src={img} width={60} height={60} alt="image" />
      </div>
      <p className="text-[24px] font-extrabold uppercase">{title}</p>
      <hr className="border-t-[3px] border-[#4661D6] w-[150px] my-2" />

      <p className="text-gray-400 mt-2   text-[14px] ">{discriptions}</p>
    </div>
  );
}

export default EcosysCard;
