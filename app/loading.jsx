import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <div className="w-24 h-24 relative flex items-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center">
          <svg
            fill="#000000"
            width="00px"
            height="100px"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-indigo-500 animate-spin"
          >
            <path
              fill="#0fba34"
              d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-primary text-[20px] font-semibold mt-4">
        Loading...
      </h2>
    </div>
  );
};

export default Loading;
