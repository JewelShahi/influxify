import React from "react";

const About = () => {
  return (
    <div className="flex flex-row my-10">
      <div className="flex-1 flex-col">
        <h1 className="text-h1">About us</h1>
        <p>
          No wonder that promotion strategy is one of the most important
          processes in marketing. In fact, it supports your marketing voices to
          reach your target audience, creates interest, and helps you to engage
          with them.
        </p>
        <div className="flex flex-row gap-5 mt-5">
          <p>Image</p>
          <div className="flex flex-col">
            <h4 className="text-h4">Safe and security</h4>
            <p className="w-[400px]">
              Safe and secured promotion strategy is one of the most important
              processes in marketing.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <p>Image</p>
          <div className="flex flex-col">
            <h4 className="text-h4">Highly expert team</h4>
            <p className="w-[400px]">
              We supports your marketing voices to reach your target audience,
              creates interest.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-2">
        <p>Image</p>
      </div>
    </div>
  );
};

export default About;
