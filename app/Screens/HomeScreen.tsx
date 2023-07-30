import React from "react";
import Navbar from "../Components/Navbar";
import { BsArrowDownCircle } from "react-icons/bs";
import Ecosystem from "../Components/Ecosystem";
import Tokenomics from "../Components/Tokenomics";
import BuySection from "../Components/BuySection";
import Team from "../Components/Team";
import Roadmap from "../Components/Roadmap";

/* bg-[url('https://img.freepik.com/free-vector/gradient-galaxy-background_52683-65386.jpg?w=1800&t=st=1689500305~exp=1689500905~hmac=74c406ed049a2b8e0654a6664faf74ca9a7de4c8be80bfeabad9b95ea5c217f4')] */

function HomeScreen() {
  return (
    <div className="x-2">
      <div className="h-screen relative w-full bg-cover bg-no-repeat bg-[#59BFFF]">
        <Navbar />
        <div className="sm:w-[50%]  text-center  mt-[60%] sm:mt-0 sm:absolute top-[35%] left-[25%] mx-auto px-4 sm:px-0">
          <p className="text-[30px] sm:text-[42px] text-[#222855] font-bold leading-[32px] sm:leading-[42px]">
            A Decentralized Meme Token that evolved into a galactic ecosystem
          </p>
          <p className="text-[14px] sm:text-[18px] text-[#fff] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magma aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
          <div className="grid grid-cols-2 w-fit mx-auto mt-10 sm:gap-5 gap-2.5 text-[12px] sm:font-[18px]">
            <button className="rounded-[12px] sm:rounded-[16px] font-medium py-3 px-9 bg-[#222855]">
              How to Buy
            </button>
            <button className="border-[#222855] text-[#222855] border-[2px] rounded-[12px] sm:rounded-[16px] font-medium py-3 px-9">
              Woofpaper v2.0
            </button>
          </div>
        </div>
        <BsArrowDownCircle
          size={30}
          className="mx-auto absolute w-full animate-bounce  bottom-10 text-gradient-to-r from-[#EC9471] to-[#B330C9]"
        />
      </div>
      <div className="bg-[#222855] sm:pt-0 pt-10">
        <Ecosystem />
        <Tokenomics />
        <BuySection />

        <Roadmap />
        <Team />
      </div>
    </div>
  );
}

export default HomeScreen;
