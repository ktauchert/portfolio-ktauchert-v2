import links from "@/helper/links";
import Link from "next/link";
import React from "react";

const FooterMain = () => {
  return (
    <div>
      <div className="mx-auto h-[1px] bg-light-grey mt-24 w-[calc(100%-20px)]"></div>
      <div className="flex flex-col-reverse md:flex-row justify-between  items-center my-2 px-5">
        <p className="text-3xl text-light-grey special">Karsten Tauchert</p>
        <ul className="flex flex-row gap-6 md:gap-4 my-2 md:my-0 ">
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
        <p className="text-right text-light-brown">
          © 2025 by developer@ktauchert.de | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterMain;
