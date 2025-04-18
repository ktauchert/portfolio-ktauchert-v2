import React from "react";
import SingleInfo from "./SingleInfo";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const ContactMain = () => {
  return (
    <div id="contact" className="flex flex-col max-w-[1280px] mx-auto mt-[120px]">
      <h2 className="text-6xl text-cyan text-center my-10">Contact</h2>

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
        </div>
      </div>

      <div className="w-full flex flex-row justify-evenly items-center">
        <Link href={"https://github.com/ktauchert"}>
          <FaGithub className="text-6xl text-orange hover:text-cyan transition-all duration-500 cursor-pointer" />
        </Link>
        <Link href={"https://www.linkedin.com/in/ktauchert/"}>
          <FaLinkedin className="text-6xl text-orange hover:text-cyan transition-all duration-500 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ContactMain;
