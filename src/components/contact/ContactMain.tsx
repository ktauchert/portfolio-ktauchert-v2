import React from "react";
import SingleInfo from "./SingleInfo";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Cat from "../logo/CatLogo";
import { MdLanguage } from "react-icons/md";

const ContactMain = () => {
  return (
    <div id="contact" className="max-w-[1280px] mx-auto mt-[60px]">
      <div className="flex flex-col w-full">
        <h2 className="text-6xl text-cyan text-center mt-10 md:my-10">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-center my-10">
          <div className="w-full flex items-center justify-center">
            <img
              className="w-[160px] h-[160px]"
              loading="lazy"
              src="/email-image.png"
              alt="Contact"
            />
          </div>
          <div className="w-full flex gap-4 flex-col">
            <SingleInfo text="Potsdam, Germany" Image={IoLocation} />
            <SingleInfo text="developer@ktauchert.de" Image={IoIosMail} />
            <SingleInfo
              text="German (native), English (fluent)"
              Image={MdLanguage}
            />
          </div>
        </div>

        <div className="w-full flex flex-row justify-evenly items-center">
          <Link
            href={"https://github.com/ktauchert"}
            title="Click to visit my GitHub profile"
          >
            <FaGithub className="text-6xl text-orange hover:text-cyan transition-all duration-500 cursor-pointer" />
          </Link>
          <Link
            href={
              "mailto:developer@ktauchert.de?subject=Hello%20Karsten&body=Hi%20Karsten,%0A%0AYour%20website%20is%20really%20impressive!"
            }
            title="Click to send an email"
            className="pb-6 pr-2"
          >
            <Cat scale={1.0} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ktauchert/"}
            title="Click to visit my LinkedIn profile"
          >
            <FaLinkedin className="text-6xl text-orange hover:text-cyan transition-all duration-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
