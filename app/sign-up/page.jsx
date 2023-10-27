import Image from "next/image";
import React from "react";

function LogIn() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-evenly bg-secondary/30 ">
      <Image
        src={"/assets/heroMain.png"}
        width={300}
        height={300}
        alt="sign-up image"
      />
      <div>
        <h1>Create an account</h1>
        <form action="">
          <div>
            <label htmlFor="firstName">Full Name</label> <br />
            <div className="flex flex-row gap-2">
              <input
                type="text"
                placeholder="First Name..."
                name="firstName"
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name..."
                name="lastName"
                className="input"
              />
            </div>
          </div>
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            placeholder="Username..."
            name="username"
            className="input"
          />{" "}
          <br />
          <label htmlFor="">E-mail</label> <br />
          <input
            type="email"
            placeholder="E-mail..."
            name="e-mail"
            className="input"
          />
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            placeholder="Password..."
            name="password"
            className="input"
          />
          <br />
          <label htmlFor="changePassword">Change password</label> <br />
          <input
            type="password"
            placeholder="Change password..."
            name="changePassword"
            className="input"
          />
          <br />
          <input type="checkbox" name="agree" />
          <label htmlFor="agree">I agree with the Terms and Privacy</label>
          <br />
          <input type="submit" value="Sign Up" />
          <br />
        </form>
        <div>
          <hr />
          Sign up with
          <button>Google</button>
          <button>Facebook</button>
          <button>Apple</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
