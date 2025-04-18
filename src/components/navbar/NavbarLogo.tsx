import Link from "next/link";
import React from "react";

const NavbarLogo = () => {
  return (
    <div className="flex flex-row items-center">
      <h1 className="text-white text-2xl hidden md:block ">
        <Link href="/">KTauchert-Dev</Link>
      </h1>
      <h1 className="text-white text-2xl block md:hidden ">
        <Link href="/">KT</Link>
      </h1>
    </div>
  );
};

export default NavbarLogo;
