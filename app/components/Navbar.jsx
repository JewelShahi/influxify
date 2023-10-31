"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex justify-center sticky z-50">
      {/* desktop nav */}
      <div className="flex px-4 py-2 absolute bg-white items-center mx-auto justify-between w-[90%] rounded-standard top-10 basis-[250px]">
        <div>
          <Link href={"/"} className="flex row gap-1 items-center">
            <Image
              src="/influxify-logo.png"
              alt="website logo influxify"
              width={30}
              height={30}
            />
            <h2 className="text-h3 font-bold logo">
              Influxi<span className="text-secondary logo">fy</span>
            </h2>
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center space-x-10">
          <div className="flex w-auto flex-row">
            <ul className="flex flex-row gap-4 font-medium font-[Arial]">
              <Link
                href={"/"}
                className="text-gray transition hover:text-secondary duration-150"
              >
                <li>Home</li>
              </Link>
              <a
                href={"/#about"}
                className="text-gray transition hover:text-secondary duration-150"
              >
                <li>About</li>
              </a>
              <Link
                href={"/services"}
                className="text-gray transition hover:text-secondary duration-150"
              >
                <li>Services</li>
              </Link>
              <Link
                href={"/reviews"}
                className="text-gray transition hover:text-secondary duration-150"
              >
                <li>Reviews</li>
              </Link>
              <Link
                href={"/support"}
                className="text-gray transition hover:text-secondary duration-150"
              >
                <li>Support</li>
              </Link>
            </ul>
          </div>
          <div>
            <button className="text-white transition ease-in-out delay-[50ms] bg-secondary hover:bg-secondary-hover duration-[150ms] p-[10px] m-[2px] rounded-standard">
              <Link href={"/log-in"}>Log In</Link>
            </button>
            <button className="text-white transition ease-in-out delay-[50ms] bg-black hover:bg-primary-hover duration-[150ms] p-[10px] m-[2px] rounded-standard">
              <Link href={"/sign-up"}>Sign Up</Link>
            </button>
          </div>
        </div>
        <button
          className="block md:hidden"
          onClick={() => setClicked(!clicked)}
        >
          {!clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Nav */}
      <div
        className={
          clicked
            ? "flex flex-col h-screen md:hidden m-auto items-center justify-center bg-primary w-full "
            : "hidden"
        }
      >
        <div className="text-center">
          <ul className="py-12">
            <Link href={"/"}>
              <li className="text-h3 font-semibold text-white py-4 transition hover:text-secondary duration-150">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="text-h3 font-semibold text-white py-4 transition hover:text-secondary duration-150">About</li>
            </Link>
            <Link href={"/services"}>
              <li className="text-h3 font-semibold text-white py-4 transition hover:text-secondary duration-150">Services</li>
            </Link>
            <Link href={"/reviews"}>
              <li className="text-h3 font-semibold text-white py-4 transition hover:text-secondary duration-150">Reviews</li>
            </Link>
            <Link href={"/support"}>
              <li className="text-h3 font-semibold text-white py-4 transition hover:text-secondary duration-150">Support</li>
            </Link>
          </ul>
        </div>
        <div className="space-x-5">
          <Link href={"/log-in"} className="py-2 px-3 rounded-standard bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 border border-white">Log In</Link>
          <Link href={"/sign-up"} className="py-2 px-3 rounded-standard bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 border border-white">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;