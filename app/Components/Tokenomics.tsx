import React from "react";
import { RxCopy } from "react-icons/rx";

function Tokenomics() {
  return (
    <div className="w-full p-20  bg-[#222855]">
      <div className="max-w-[1280px] mx-auto">
        <div className="">
          <div className="block text-center">
            <p className="text-[54px] font-bold text-[#333962]">Tokenomiccs</p>
            <p className="text-[32px] font-bold text-white -mt-5">
              <span className="text-white">Tokenomiccs</span>
            </p>
          </div>
        </div>

        <div className="p-6 w-fit mx-auto rounded-[20px] mt-10 bg-gradient-to-l from-[#2D2A6A] to-[#3A3A9D] flex items-center drop-shadow-lg">
          <div className="h-20 w-20 rounded-full bg-[url('https://crypto.news/app/uploads/2023/02/shiba-inu-on-the-rise.jpeg')] bg-center bg-cover bg-no-repeat border-[#4661D6] border-[2px]"></div>
          <div className="ml-5">
            <p className="text-gray-200 text-[18px]">Token contract address</p>
            <p className="text-gray-400 mt-2">0xFJSBVFBHVDFVBSJ34B...</p>
          </div>
          <div className="ml-10">
            <button className="text-[14px] flex items-center border-[#4661D6] font-medium border-[2px] p-3 px-4 rounded-[16px]">
              <RxCopy size={20} />
              <p className="ml-1">Copy to clipboard</p>
            </button>
          </div>
        </div>

        <div className="p-8 px-16 w-fit mx-auto rounded-[20px] mt-10 bg-gradient-to-t from-[#2D2A6A] to-[#3A3A9D] flex items-center drop-shadow-lg">
          <div className="h-72 w-96 rounded-[20px] bg-[url('https://crypto.news/app/uploads/2023/02/shiba-inu-on-the-rise.jpeg')] bg-center bg-cover bg-no-repeat border-[#4661D6] border-[2px]"></div>
          <div className="ml-24 w-96">
            <p className="uppercase font-semibold text-[24px] text-white">
              space shiba metrics
            </p>
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <p className="text-gray-400">Supply</p>
                <p className="text-white "> 1 Trillion $SHIBSPC</p>
              </div>
              <hr className="my-4 border-[0.5px] border-gray-500" />
              <div className="flex items-center justify-between">
                <p className="text-gray-400">Price</p>
                <p className="text-white "> $ 0.00000129</p>
              </div>
              <hr className="my-4 border-[0.5px] border-gray-500" />
              <div className="flex items-center justify-between">
                <p className="text-gray-400">Market Cap</p>
                <p className="text-white "> $ 1,987,436,041</p>
              </div>
              <hr className="my-4 border-[0.5px] border-gray-500" />
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400">Total Burned</p>
                <p className="text-white"> 37,845,301</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
