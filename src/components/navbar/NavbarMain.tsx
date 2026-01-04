"use client";
import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarButton from "./NavbarButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [smallScreen, setSmallScreen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();
  const isStudioPage = pathname.startsWith("/studio");

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(true);
        setSmallScreen(false);
      } else {
        setMenuOpen(false);
        setSmallScreen(true);
      }
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isStudioPage) {
    return;
  }

  return (
    <header className="fixed top-4 left-0 right-0 z-50 h-max-20 max-w-[1280px] mx-auto px-2 lg:px-0">
      <div className="flex flex-row gap-4 w-full">
        <nav className="h-20 flex flex-1 justify-between items-center bg-black p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
          <NavbarLogo />
          <div className={`${menuOpen ? "block" : "hidden"}`}>
            <NavbarLinks
              isSmallScreen={smallScreen}
              onClick={() => setMenuOpen(false)}
            />
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
    </header>
  );
};

export default NavbarMain;
