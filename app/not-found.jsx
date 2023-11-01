import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center bg-heroBg px-3">
      <img src="/assets/404.svg" alt="404 page not found" width="500px" className="w-[40%] min-w-[270px] my-[15px]" loading="lazy"/>
      <h2 className="text-[30px] sm:text-[50px] font-bold">Ooops! Page Not Found.</h2>
      <h5 className="text-[20px] sm:text-[25px]">
        The page you are looking for doesn't exist or another error has occured.
      </h5>
    </div>
  );
};

export default NotFound;
