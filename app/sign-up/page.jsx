"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields here
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(typeof formData);
    // Send a POST request with the form data
    const response = await fetch("http://localhost:8000/sign-up/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        username: formData.username,
      }),
    }).then((response) => {
      console.log(response);
      return response;
    });

    // Handle the response as needed
    //const data = await response.json();
    //console.log(data);
  };
  return (
    <div className="h-auto w-full flex justify-center items-center p-5 bg-secondary/30">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly mt-24">
        <div>
          <h3 className="text-[35px] text-center font-bold">
            Create an account
          </h3>
          <form className="flex flex-col justify-center items-start gap-3 mt-3">
            <div className="flex flex-row gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="John"
                title="Your first name."
                className="inside-input border-animation"
                required
                onChange={handleInputChange}
                value={formData.firstName}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                title="Your last name."
                className="inside-input border-animation"
                required
                onChange={handleInputChange}
                value={formData.lastName}
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              title="Your username."
              className="input border-animation w-full"
              required
              onChange={handleInputChange}
              value={formData.username}
            />
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              title="Your e-mail."
              className="input border-animation w-full"
              required
              onChange={handleInputChange}
              value={formData.email}
            />
            <div className="flex flex-row gap-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                title="Your password."
                className="inside-input border-animation"
                required
                onChange={handleInputChange}
                value={formData.password}
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
              onClick={handleSubmit}
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
