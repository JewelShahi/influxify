"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-heroBg/80">
      {/* bg-heroBg */}
      <div className="flex flex-col lg:flex-row items-center justify-around md:justify-center md:w-[100%] flex-wrap relative top-[140px]">
        <div className="px-3 py-2 items-center">
          <h2 className="text-h2 max-w-xl p-2 font-bold">
            Perfect place for your business promotion
          </h2>
          <p className="w-[450px] p-2 ">
            Businesses generally promote their brand, products, and services by
            identifying audience.
          </p>
          {/* Button for getting started and a videoplayer */}
          <div className="items-center justify-center inline-flex ">
            <button className="text-white transition ease-in-out delay-[50ms] bg-black hover:bg-primary-hover duration-[150ms] h-14 p-2 -mt-4 rounded-standard">
              Get Started
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <g filter="url(#filter0_d_1_3034)">
                <rect
                  x="30"
                  y="20"
                  width="60"
                  height="60"
                  rx="30"
                  fill="white"
                />
                <path
                  d="M68.5 49.134C69.1667 49.5189 69.1667 50.4811 68.5 50.866L56.5 57.7942C55.8333 58.1791 55 57.698 55 56.9282L55 43.0718C55 42.302 55.8333 41.8209 56.5 42.2058L68.5 49.134Z"
                  fill="#00E5CC"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_3034"
                  x="0"
                  y="0"
                  width="120"
                  height="120"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="15" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.898039 0 0 0 0 0.8 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_3034"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_3034"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          {/* comment/quote */}
          <div className="flex flex-col w-[350px] gap-5 p-3 pl-5 pr-5 bg-white rounded-standard">
            {/* rating and the quote svg */}
            <div className="flex flex-row justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path d="M0 4V28L12 16V4H0Z" fill="#00E5CC" />
                <path d="M20 4V28L32 16V4H20Z" fill="#00E5CC" />
              </svg>
              {/* star and rating text */}
              <div className="flex flex-row justify-between gap-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g id="vuesax/bold/star">
                    <g id="star">
                      <path
                        id="Vector"
                        d="M12.825 4.34169L14 6.69169C14.1583 7.01669 14.5833 7.32503 14.9417 7.39169L17.0667 7.74169C18.425 7.96669 18.7417 8.95003 17.7667 9.93336L16.1083 11.5917C15.8333 11.8667 15.675 12.4084 15.7667 12.8L16.2417 14.85C16.6167 16.4667 15.75 17.1 14.325 16.25L12.3333 15.0667C11.975 14.85 11.375 14.85 11.0167 15.0667L9.025 16.25C7.6 17.0917 6.73334 16.4667 7.10834 14.85L7.58334 12.8C7.65834 12.4 7.5 11.8584 7.225 11.5834L5.56667 9.92503C4.59167 8.95003 4.90834 7.96669 6.26667 7.73336L8.39167 7.38336C8.75 7.32503 9.175 7.00836 9.33334 6.68336L10.5083 4.33336C11.15 3.06669 12.1833 3.06669 12.825 4.34169Z"
                        fill="#FFBF00"
                      />
                      <path
                        id="Vector_2"
                        d="M6.66667 4.79163H1.66667C1.32501 4.79163 1.04167 4.50829 1.04167 4.16663C1.04167 3.82496 1.32501 3.54163 1.66667 3.54163H6.66667C7.00834 3.54163 7.29167 3.82496 7.29167 4.16663C7.29167 4.50829 7.00834 4.79163 6.66667 4.79163Z"
                        fill="#FFBF00"
                      />
                      <path
                        id="Vector_3"
                        d="M4.16667 16.4584H1.66667C1.32501 16.4584 1.04167 16.175 1.04167 15.8334C1.04167 15.4917 1.32501 15.2084 1.66667 15.2084H4.16667C4.50834 15.2084 4.79167 15.4917 4.79167 15.8334C4.79167 16.175 4.50834 16.4584 4.16667 16.4584Z"
                        fill="#FFBF00"
                      />
                      <path
                        id="Vector_4"
                        d="M2.50001 10.625H1.66667C1.32501 10.625 1.04167 10.3417 1.04167 10C1.04167 9.65833 1.32501 9.375 1.66667 9.375H2.50001C2.84167 9.375 3.12501 9.65833 3.12501 10C3.12501 10.3417 2.84167 10.625 2.50001 10.625Z"
                        fill="#FFBF00"
                      />
                    </g>
                  </g>
                </svg>
                <h5 className="font-bold">4.9</h5>
              </div>
            </div>
            <p className="text-gray">
              There's no shortage of ideas, what's missing is the will to
              execute them - <b>Seth Godin</b>
            </p>
          </div>
        </div>
        <div className="hidden sxl:flex flex-col w-auto px-4 py-2 items-center">
          <div>
            <Image
              src="/assets/heroMain.png"
              alt="s"
              width={600}
              height={600}
            />
          </div>
          <div className="-mt-[340px] -ml-8">
            <Image src="/assets/Group15.png" alt="s" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
