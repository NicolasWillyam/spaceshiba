import React from "react";
import Navbar from "../Components/Navbar";
import { BsArrowDownCircle } from "react-icons/bs";
import Ecosystem from "../Components/Ecosystem";
import Tokenomics from "../Components/Tokenomics";
import BuySection from "../Components/BuySection";

/* bg-[url('https://img.freepik.com/free-vector/gradient-galaxy-background_52683-65386.jpg?w=1800&t=st=1689500305~exp=1689500905~hmac=74c406ed049a2b8e0654a6664faf74ca9a7de4c8be80bfeabad9b95ea5c217f4')] */

function HomeScreen() {
  return (
    <div className="">
      <div className="h-screen relative w-full bg-cover bg-no-repeat bg-[#59BFFF]">
        <Navbar />
        <div className="text-center w-full absolute top-[35%] mx-auto">
          <p className="text-[42px] text-[#004E7F] font-bold leading-[42px]">
            A Decentralized Meme Token <br /> that evolved into a galactic
            ecosystem
          </p>
          <p className="text-[18px] text-[#fff] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt <br />
            ut labore et dolore magma aliqua. Quis ipsum suspendisse ultrices
            gravida.
          </p>
          <div className="grid grid-cols-2 w-fit mx-auto mt-10 gap-5">
            <button className="rounded-[16px] text-[18px] font-medium py-3 px-9 bg-[#004E7F]">
              How to Buy
            </button>
            <button className="border-[#004E7F] text-[#004E7F] border-[2px] rounded-[16px] text-[18px] font-medium py-3 px-9">
              Woofpaper v2.0
            </button>
          </div>
        </div>
        <BsArrowDownCircle
          size={30}
          className="mx-auto absolute w-full animate-bounce  bottom-10 text-gradient-to-r from-[#EC9471] to-[#B330C9]"
        />
      </div>
      <div className="bg-[#222855]">
        <Ecosystem />
        <Tokenomics />
        <BuySection />
      </div>
    </div>
  );
}

export default HomeScreen;
