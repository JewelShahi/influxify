import React from "react";

const Footer = () => {
  return (
    <div className="w-full pt-10 items-center justify-center">
      {/* Main*/}
      <div className="flex flex-col md:flex-row space-y-10 justify-evenly px-4 py-12 bg-primary text-white text-center md:text-left items-center ">
        {/* Bizpro Logo */}
        <div className="space-y-5">
          <h2 className="font-bold text-[50px]">Influxi<span className="text-secondary">fy</span></h2>
          <p className="font-thin max-w-[350px]">
            This is a big one and i consider it one of the most important things
            for a business.
          </p>
          <ul className="flex space-x-2 justify-center">
            <li>fb</li>
            <li>fb</li>
            <li>fb</li>
            <li>fb</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-medium text-[18px] py-3">Quick Links</h4>
          <ul className="font-thin space-y-3 text-[15px]">
            <li>Home</li>
            <li>About</li>
            <li>Appointment</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="font-medium text-[18px] py-3">Company</h4>
          <ul className="font-thin space-y-3 text-[15px]">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        {/* Information */}
        <div>
          <h4 className="font-medium text-[18px] py-3">Information</h4>
          <ul className="font-thin space-y-3 text-[15px]">
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>FAQ</li>
            <li>...</li>
          </ul>
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
