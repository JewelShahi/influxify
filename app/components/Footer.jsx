import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-10 items-center justify-center">
      {/* Main*/}
      <div className="flex flex-col md:flex-row space-y-10 justify-evenly px-4 py-12 bg-primary text-white text-center md:text-left items-center ">
        {/* Influxify Logo */}
        <div className="space-y-5">
          <div className="flex row gap-2 items-center justify-center">
            <img
              src="/influxify-logo.png"
              alt="influxify website logo"
              width="50px"
            />
            <h2 className="font-bold text-[50px] xs:text-[35px]">
              Influxi<span className="text-secondary">fy</span>
            </h2>
          </div>
          <p className="font-thin max-w-[300px] text-center">
            This is a big one and i consider it one of the most important things
            for a business.
          </p>
          <ul className="flex space-x-2 justify-center">
            <li>
              <button>
                <Image
                  src={"/assets/Facebook.png"}
                  width={30}
                  height={30}
                />
              </button>
            </li>
            <li>
              <button>
                <Image
                  src={"/assets/Instagram.png"}
                  width={30}
                  height={30}
                />
              </button>
            </li>
            <li>
              <button>
                <Image
                  src={"/assets/et_twitter.png"}
                  width={30}
                  height={30}
                />
              </button>
            </li>
            <li>
              <button>
                <Image
                  src={"/assets/LinkedIn.png"}
                  width={30}
                  height={30}
                />
              </button>
            </li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="flex flex-1 flex-row justify-evenly max-w-[600px] items-start gap-5 xs:flex-col xs:items-center">
          <div className="text-center">
            <h4 className="font-bold text-[18px] py-3">Quick Links</h4>
            <ul className="font-thin space-y-3 text-[15px]">
              <li>Home</li>
              <li>About</li>
              <li>Appointment</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Company */}
          <div className="text-center">
            <h4 className="font-bold text-[18px] py-3">Company</h4>
            <ul className="font-thin space-y-3 text-[15px]">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          {/* Information */}
          <div className="text-center">
            <h4 className="font-bold text-[18px] py-3 ">Information</h4>
            <ul className="font-thin space-y-3 text-[15px]">
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQ</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Under*/}
      <div className="bg-[#000020] text-white text-[16px] font-light flex justify-around py-4 px-2">
        <h5>Copyright &copy; 2023 Influxify</h5>
        <h6>All rights reserved</h6>
      </div>
    </div>
  );
};

export default Footer;
