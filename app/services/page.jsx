import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="h-auto flex flex-col justify-evenly items-center mt-20 p-1">
      <div className="flex flex-row justify-around items-center card:flex-col card:justify-center card:items-center">
        <div className="flex flex-col items-center justify-center p-5 shadow-md h-[150px]">
          <Image
            src={"/assets/phone-icon.svg"}
            alt={"phone number"}
            width={30}
            height={30}
          />
          <h3 className="p-2 text-[20px]">Customer Support</h3>
          <p className="">Call: +359 877 345 675</p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 shadow-md h-[150px]">
          <Image
            src={"/assets/email-icon.svg"}
            alt={"email address"}
            width={30}
            height={30}
          />
          <h3 className="p-2 text-[20px]">General Questions</h3>
          <p>Email: info@influxify.com</p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 shadow-md h-[150px]">
          <Image
            src={"/assets/pin-icon.svg"}
            alt={"address location"}
            width={30}
            height={30}
          />
          <h3 className="p-2 text-[20px]">Address</h3>
          <p>ul. "Jira" 48, g.k. Nova, Lope</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-2 lg:mt-5 lg:w-[100%] p-2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[40px] font-bold">Create a service ticket</h2>
          <p className="text-[18px]">Fill up the blanks to send a request</p>
          <form
            action=""
            id="usrform"
            className="flex flex-col justify-start gap-3 mt-3"
          >
            <div className="flex flex-row gap-2">
              <input
                type="text"
                placeholder="John Doe"
                title="Your name."
                className="inside-input border-animation"
                required
              />
              <input
                type="tel"
                placeholder="+1 234 567890"
                title="Your phone number."
                className="inside-input border-animation"
                required
              />
            </div>
            <input
              type="email"
              placeholder="example@example.com"
              title="Your e-mail."
              className="input border-animation"
              required
            />
            <textarea
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
              placeholder="Describe your problem..."
              title="Problem description."
              className="px-[20px] py-[10px] outline-none border border-gray/100 w-100 min-h-[45px] max-h-[120px] sm:w-full overflow-y-auto border-animation"
            ></textarea>
            <input
              type="submit"
              value="Send Request"
              className="submit bg-secondary click-animation hover:bg-secondary-hover"
            />
          </form>
        </div>
        <div className="flex flex-col justify-center items-center p-4 lg:p-2 lg:w-[70%]">
          <h3 className="text-[26px] font-bold">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.568534342761!2d23.35919807612538!3d42.67049787116577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8587e5b96129%3A0xbbf46b29a556f55d!2z0KHQn9CT0JUg4oCe0JTQttC-0L0g0JDRgtCw0L3QsNGB0L7QsuKAnA!5e0!3m2!1sbg!2sbg!4v1699725857826!5m2!1sbg!2sbg"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            className="lg:w-[100%] w-[520px] min-w-[260px] h-[350px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
