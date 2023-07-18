import React from "react";
import BuyStep from "./BuyStep";

function BuySection() {
  return (
    <div className="w-full p-20  ">
      <div className="max-w-[1280px] mx-auto">
        <div className="block">
          <p className="text-[54px] font-bold text-[#333962]">Buy</p>
          <p className="text-[32px] font-bold text-white -mt-4">How to Buy</p>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div className="block">
            <BuyStep />
            <BuyStep />
            <BuyStep />
            <BuyStep />
          </div>
          <div className="">
            <img
              src="https://www.blockchainx.tech/assets-new/images/product/cryptocurrency-wallet-development-company.png"
              alt=""
              className="w-full"
            />
          </div>
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

export default BuySection;
