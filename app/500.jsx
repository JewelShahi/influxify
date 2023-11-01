import React from "react";

const InternalServerError = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-heroBg px-3">
      <img
        src="/assets/500.svg"
        alt="500 internal server error"
        width="500px"
        className="w-[30%] min-w-[270px] my-[15px]"
        loading="lazy"
      />
      <h2 className="text-[30px] sm:text-[50px] font-bold">
        Internal Server Error
      </h2>
      <h5 className="text-[20px] sm:text-[25px] w-[70%]">
      The server encountered an internal error or misconfiguration and was unable to complete your request
      </h5>
    </div>
  );
};

export default InternalServerError;
