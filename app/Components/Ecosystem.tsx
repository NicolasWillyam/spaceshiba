import React from "react";
import EcosysCard from "./EcosysCard";
import Image from "next/image";
import planet from "./image/planet.png";
import shiba1 from "./image/shiba1.png";
import shiba4 from "./image/shiba4.png";
import shiba3 from "./image/shiba3.png";

function Ecosystem() {
  return (
    <div className="w-full sm:p-20  p-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid sm:grid-cols-2 sm:gap-32 gap-16 items-center">
          <div className="block">
            <p className="text-[54px] font-bold text-[#333962]">Ecosystem</p>
            <p className="text-[24px] sm:text-[32px] font-bold text-white -mt-4">
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

          <div
            style={{
              backgroundImage: `url(${planet.src})`,
            }}
            className="sm:w-[400px] sm:h-[400px] w-[320px]  h-[320px] rounded-t-[10px] mx-auto bg-center bg-cover bg-no-repeat "
          ></div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-10 mx-auto">
          <EcosysCard
            img={shiba1.src}
            title="Market"
            discriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
        suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magma."
          />

          <EcosysCard
            img={shiba4.src}
            title="Community"
            discriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
        suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magma."
          />

          <EcosysCard
            img={shiba3.src}
            title="Security"
            discriptions="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
        suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magma."
          />
        </div>

        <div className="text-center">
          <p className="text-[#4661D6] font-bold mt-20 tracking-widest">
            LISTED ON
          </p>
          <div className="mt-5 grid sm:grid-cols-3 w-2/3 mx-auto gap-10 sm:gap-0">
            <div className=" mx-auto">
              <img
                src="https://loudchain.co/wp-content/uploads/2021/11/coinmarketcap-logo.png"
                alt=""
                className="h-12"
              />
            </div>
            <div className=" mx-auto">
              <img
                src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"
                alt=""
                className="h-12"
              />
            </div>
            <div className=" mx-auto">
              <img
                src="https://www.pngall.com/wp-content/uploads/10/PancakeSwap-Crypto-Logo-PNG-Pic.png"
                alt=""
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;
