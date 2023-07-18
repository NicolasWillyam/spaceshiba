import React from "react";
import EcosysCard from "./EcosysCard";

function Ecosystem() {
  return (
    <div className="w-full p-20  ">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 gap-32">
          <div className="block">
            <p className="text-[54px] font-bold text-[#333962]">Ecosystem</p>
            <p className="text-[32px] font-bold text-white -mt-4">
              Space Shiba <span className="text-[#4661D6]">Ecosystem</span>
            </p>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magma aliqua. Quis
              ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magma aliqua. Quis ipsum suspendisse ultrices
              gravida.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3  gap-10 mt-20 px-10">
          <EcosysCard />
          <EcosysCard />
          <EcosysCard />
        </div>

        <div className="text-center">
          <p className="text-[#4661D6] font-bold mt-20 tracking-widest">
            LISTED ON
          </p>
          <div className="mt-5 grid grid-cols-3 w-2/3 mx-auto">
            <div className=" mx-auto">
              <img
                src="https://loudchain.co/wp-content/uploads/2021/11/coinmarketcap-logo.png"
                alt=""
                className="h-12"
              />
            </div>
            <div className=" mx-auto">
              <img
                src="https://loudchain.co/wp-content/uploads/2021/11/coinmarketcap-logo.png"
                alt=""
                className="h-12"
              />
            </div>
            <div className=" mx-auto">
              <img
                src="https://loudchain.co/wp-content/uploads/2021/11/coinmarketcap-logo.png"
                alt=""
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
