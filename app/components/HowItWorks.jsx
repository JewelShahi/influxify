import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-auto">
      <div>
        <div className="flex justify-center flex-col items-center mb-10">
          <h1 className="text-h1">How it works</h1>
          <p>
            Businesses generally promote their brand, products, and services by
            identifying audience.
          </p>
        </div>
        <div className="flex justify-center m-auto gap-10 w-[70%]">
          <div className="w-[200px] p-5">
            <p className="mb-10">Image</p>
            <h4 className="text-h4">Something</h4>
            <p>Paragraph</p>
          </div>
          <div className="w-[200px] p-5">
            <p className="mb-10">Image</p>
            <h4 className="text-h4">Something</h4>
            <p>Paragraph</p>
          </div>
          <div className="w-[200px] p-5">
            <p className="mb-10">Image</p>
            <h4 className="text-h4">Something</h4>
            <p>Paragraph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
