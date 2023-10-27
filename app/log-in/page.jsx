import Image from "next/image";
import React from "react";

function LogIn() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-evenly bg-secondary/30 ">
      <Image src={"/assets/heroMain.png"} width={300} height={300} alt="" />
      <div>
        <h1>Log In to your account</h1>
        <div>
          <div>
            <h6>Email</h6>
            <input type="text" placeholder="" />
          </div>
          <div>
            <h6>Password</h6>
            <input type="password" placeholder="" />
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <button>Log In</button>
          </div>
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
