import React from "react";
import BuyStep from "./BuyStep";

function BuySection() {
  return (
    <div className="w-full sm:p-20 p-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="block">
          <p className="text-[54px] font-bold text-[#333962]">Buy</p>
          <p className="text-[32px] font-bold text-white -mt-4">How to Buy</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-20">
          <div className="block">
            <BuyStep
              id="01"
              title="Creat Metamask Wallet"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
              suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magma aliqua."
            />

            <BuyStep
              id="02"
              title="Creat Metamask Wallet"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
              suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magma aliqua."
            />

            <BuyStep
              id="03"
              title="Creat Metamask Wallet"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
              suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magma aliqua."
            />

            <BuyStep
              id="04"
              title="Creat Metamask Wallet"
              discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magma aliqua. Quis ipsum
              suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magma aliqua."
            />
          </div>
          <div className="">
            <img
              src="https://www.blockchainx.tech/assets-new/images/product/cryptocurrency-wallet-development-company.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySection;
