import Image from "next/image";
import React from "react";

const GlobalPromotion = () => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-16">
      <div className="flex flex-col text-center items-center justify-center mx-auto space-y-6">
        <h2 className="text-h2 font-bold text-center mx-auto">
          <svg
            className="p-1 ml-44 -mb-6"
            width="46"
            height="23"
            viewBox="0 0 46 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41 23C41 18.2261 39.1036 13.6477 35.7279 10.2721C32.3523 6.89642 27.7739 5 23 5C18.2261 5 13.6477 6.89642 10.2721 10.2721C6.89642 13.6477 5 18.2261 5 23"
              stroke="#00E5CC"
              strokeWidth="10"
            />
          </svg>
          Global Promotion
        </h2>
        <p className="max-w-[500px] text-center">
          Businesses generally promote their brand, products, and services by
          identifying audience. No wonder that promotion strategy is one of the
          most important processes in marketing.
        </p>
      </div>
      <div className="mt-10">
        <Image
          src={"/assets/globalPromotion.png"}
          alt="dd"
          width={920}
          height={430}
        />
      </div>
    </div>
  );
};

export default GlobalPromotion;
