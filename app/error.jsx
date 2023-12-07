"use client";
import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-heroBg px-3">
      <Image
        src={"/assets/500.svg"}
        alt="500 internal server error"
        width={500}
        height={500}
        className="w-[40%] max-w-[500px] min-w-[270px] my-[15px]"
      />
      <h2 className="text-[30px] sm:text-[50px] font-bold">
        Internal Server Error
      </h2>
      <h5 className="text-[20px] sm:text-[25px] w-[70%]">
        The server encountered an internal error or misconfiguration and was
        unable to complete your request
      </h5>
    </div>
  );
};

export default Error;
