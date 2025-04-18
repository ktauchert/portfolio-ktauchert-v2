"use client";
import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarButton from "./NavbarButton";
import { GiHamburgerMenu } from "react-icons/gi";


const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-row gap-4 w-full">
      <nav className="h-20 flex flex-1 justify-between items-center bg-black p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"}`}>
          <NavbarLinks />
        </div>
        <NavbarButton />
      </nav>
      <nav className="h-20 w-20 lg:hidden flex justify-center items-center bg-black p-6 rounded-full border-[0.5px] border-orange">
        <button
          className="text-xl p-3 border rounded-full text-white cursor-pointer"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
    </div>
  );
};

export default NavbarMain;
