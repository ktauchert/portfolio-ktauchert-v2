import links from "@/helper/links";
import Link from "next/link";
import React from "react";

const FooterMain = () => {
  return (
    <div>
      <div className="mx-auto h-[1px] bg-light-grey mt-24 w-[calc(100%-20px)]"></div>
      <div className="flex flex-col-reverse md:flex-row justify-between  items-center my-2 px-5">
        <p className="text-3xl text-light-grey special">Karsten Tauchert</p>
        <ul className="flex flex-row gap-4 md:gap-4 my-2 md:my-0 ">
          {links.map((link) => (
            <li key={link.section} className="text-white text-lg">
              <Link
                href={`/#${link.section}`}
                className="hover:text-cyan transition-all duration-500"
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center my-2 px-5 gap-2">
        <p>
          <Link
            href="/impressum"
            className="text-white hover:text-orange transition-all
          duration-500"
          >
            Impressum
          </Link>
        </p>
        <div className="md:text-right text-center text-light-brown flex flex-col md:flex-row">
          <p>© 2025 by developer@ktauchert.de</p>
          <span className="md:inline-block hidden">|</span>
          <p>All Rights Reserved</p>
        </div>
      </div>
      <div className="mx-auto h-[1px] bg-light-grey w-[calc(100%-20px)]"></div>
      <div className="flex justify-center items-center text-light-grey px-4 my-2">
        <p>
          This website is built with Next.js, Typescript, Tailwind CSS, and
          Sanity.io. The source code is available on{" "}
          <Link
            target="_blank noreferrer noopener"
            className=" hover:text-orange transition-all duration-500"
            href="https://github.com/ktauchert/portfolio-ktauchert-v2"
          >
            github
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
