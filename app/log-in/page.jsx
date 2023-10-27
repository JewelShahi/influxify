import Image from "next/image";
import React from "react";

function LogIn() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-evenly bg-secondary/30 ">
      <Image src={"/assets/heroMain.png"} width={300} height={300} alt="" />
      <div>
        <h1>Log In to your account</h1>
        <div>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              placeholder="E-mail..."
              name="email"
              className="input"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password..."
              name="password"
              className="input"
            />
            <br />
            <input type="checkbox" name="agree" />
            <label htmlFor="agree">Remember me</label>
            <br />
            <input type="submit" value="LogIn" />
          </form>
        </div>
        <div>
          <hr />
          Log in with
          <button>Google</button>
          <button>Facebook</button>
          <button>Apple</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
