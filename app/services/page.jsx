import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-evenly items-center mt-10 p-1">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-start justify-center p-1 shadow">
          <i>icon</i>
          <h3>Custommer support Call</h3>
          <p>Phone number</p>
        </div>
        <div className="flex flex-col items-start justify-center p-1 shadow">
          <i>icon</i>
          <h3>Custommer support Call</h3>
          <p>Phone number</p>
        </div>
        <div className="flex flex-col items-start justify-center p-1 shadow">
          <i>icon</i>
          <h3>Custommer support Call</h3>
          <p>Phone number</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-center justify-center">
          <h1>Some text</h1>
          <p>Some plain text</p>
          <form action="" id="usrform" className="flex flex-col justify-start">
            <input type="text" placeholder="Full Name..." required />
            <input type="tel" placeholder="Phone Number..." required />
            <input type="email" placeholder="E-mail" required />
            <input type="text" />
            <textarea
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
              placeholder="Describe your problem..."
              className="outline-none border border-gray"
            ></textarea>
            <input type="submit" value="Send Request" />
          </form>
        </div>
        <Image
          src={"/assets/heroMain.png"}
          alt="service image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Services;
