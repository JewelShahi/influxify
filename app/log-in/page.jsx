import Image from "next/image";
import React from "react";

function LogIn() {
  return (
    <div className="h-auto w-full flex justify-center items-center p-5 bg-secondary/30">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly mt-24">
        <Image src={"/assets/heroMain.png"} width={300} height={300} alt="" />
        <div>
          <h3 className="text-[35px] text-center font-bold">Log In to your account</h3>
          <form
            action=""
            className="flex flex-col justify-center items-start gap-3 mt-3"
          >
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              title="Your e-mail."
              className="input border-animation w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              title="Your password."
              className="input border-animation w-full"
              required
            />
            <div>
              <input type="checkbox" name="agree" className="mr-2"/>
              <label htmlFor="agree">Remember me</label>
            </div>
            <input
              type="submit"
              value="Log In"
              className="submit bg-secondary click-animation hover:bg-secondary-hover w-full"
            />
          </form>
          <br />
          <hr className="border-[2px] rounded-standard border-black/70"/>
          <div className="flex flex-col justify-center items-start gap-2 mt-2">
            <button className="submit bg-black/95 click-animation hover:bg-black/80 w-full">
              Google
            </button>
            <button className="submit bg-black/95 click-animation hover:bg-black/80 w-full">
              Facebook
            </button>
            <button className="submit bg-black/95 click-animation hover:bg-black/80 w-full">
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
