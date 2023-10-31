import Image from "next/image";
import React from "react";

const PackageCard = ({ title, users, price, image }) => (
  <div className="inline-block px-3 py-1">
    <div className="w-[300px] h-[350px] bg-[white] rounded-standard px-2 py-3 flex flex-col items-stretch justify-between">
      <div className="w-[100%] h-[200px] bg-secondary p-2 rounded-standard">
        <Image src={image} width={200} height={200} />
      </div>
      <h5 className="text-h5 w-[100%]">{title}</h5>
      <div className="flex flex-row justify-between mt-auto p-2">
        <div className="flex flex-row gap-1">
          <p>users </p>
          <p>{users}</p>
        </div>
        <p className="text-secondary">{price}</p>
      </div>
    </div>
  </div>
);

const Packages = () => {
  const packageData = [
    {
      title: "The basic package to start your promotion",
      users: "100+ users",
      price: "$79.00",
      image: '/assets/heroMain.png',
    },
    {
      title: "The basic package to start your promotion",
      users: "200+ users",
      price: "$89.00",
      image: '/assets/heroMain.png',
    },
    {
      title: "Another package title",
      users: "300+ users",
      price: "$99.00",
      image: '/assets/heroMain.png',
    },
    {
      title: "Yet another package title",
      users: "400+ users",
      price: "$109.00",
      image: '/assets/heroMain.png',
    },
    {
      title: "One more package title",
      users: "500+ users",
      price: "$119.00",
      image: '/assets/heroMain.png',
    },
    {
      title: "One more package title",
      users: "600+ users",
      price: "$129.00",
      image: '/assets/heroMain.png',
    },
  ];

  return (
    <div className="bg-[#ECF9FF] py-20 flex flex-col">
      <div className="flex justify-center flex-row mb-2">
        <div className="flex justify-center items-center">
          <h2 className="text-h2 font-bold flex w-[500px]">
            <svg
              className="-mr-[104px]"
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
            Popular Packages
          </h2>
        </div>
        {/* arrow container div */}
        <div className="flex flex-row gap-1">
          {/* left arrow */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white bg-primary hover:bg-secondary transition-all duration-300 ease-in-out p-2 w-[40px] h-auto rounded-[5px]"
            >
              <g id="vuesax/outline/arrow-left">
                <g id="arrow-left">
                  <path
                    id="Vector"
                    d="M15 3.33C14.81 3.33 14.62 3.4 14.47 3.55L7.95 10.07C6.89 11.13 6.89 12.87 7.95 13.93L14.47 20.45C14.76 20.74 15.24 20.74 15.53 20.45C15.82 20.16 15.82 19.68 15.53 19.39L9.01 12.87C8.53 12.39 8.53 11.61 9.01 11.13L15.53 4.61C15.82 4.32 15.82 3.84 15.53 3.55C15.38 3.41 15.19 3.33 15 3.33Z"
                    fill="white"
                  />
                </g>
              </g>
            </svg>
          </button>
          {/* right arrow */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white bg-primary hover:bg-secondary transition-all duration-300 ease-in-out p-2 w-[40px] h-auto rounded-[5px]"
            >
              <g id="vuesax/outline/arrow-right">
                <g id="arrow-right">
                  <path
                    id="Vector"
                    d="M9 3.33C9.19 3.33 9.38 3.4 9.53 3.55L16.05 10.07C17.11 11.13 17.11 12.87 16.05 13.93L9.53 20.45C9.24 20.74 8.76 20.74 8.47 20.45C8.18 20.16 8.18 19.68 8.47 19.39L14.99 12.87C15.47 12.39 15.47 11.61 14.99 11.13L8.47 4.61C8.18 4.32 8.18 3.84 8.47 3.55C8.62 3.41 8.81 3.33 9 3.33Z"
                    fill="white"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      {/* container for the cards */}
      <div className="overflow-x-scroll ml-3 flex w-[100%] items-end justify-start">
        {packageData.map((item, index) => (
          <PackageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
