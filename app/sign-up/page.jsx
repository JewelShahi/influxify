import Image from "next/image";
import React from "react";

function SignUp() {
  return (
    <div className="h-auto w-full flex justify-center items-center p-5 bg-secondary/30">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly mt-24">
        <div>
          <h3 className="text-[35px] text-center font-bold">
            Create an account
          </h3>
          <form
            action=""
            className="flex flex-col justify-center items-start gap-3 mt-3"
          >
            <div className="flex flex-row gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="John"
                title="Your first name."
                className="inside-input border-animation"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                title="Your last name."
                className="inside-input border-animation"
                required
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              title="Your username."
              className="input border-animation w-full"
              required
            />
            <input
              type="email"
              name="e-mail"
              placeholder="example@example.com"
              title="Your e-mail."
              className="input border-animation w-full"
              required
            />
            <div className="flex flex-row gap-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                title="Your password."
                className="inside-input border-animation"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                title="Confirm your password."
                className="inside-input border-animation"
                required
              />
            </div>
            <div>
              <input type="checkbox" name="agree" className="mr-2" />
              <label htmlFor="agree">I agree with the Terms and Privacy</label>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="submit bg-secondary click-animation hover:bg-secondary-hover w-full"
            />
          </form>
          <br />
          <hr className="border-[2px] rounded-standard border-black/70" />
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
        <Image
          src={"/assets/heroMain.png"}
          width={300}
          height={300}
          alt="sign-up image"
        />
      </div>
    </div>
  );
}

export default SignUp;
