import Link from "next/link";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarButton = () => {
  return (
    <Link
      href={"/#contact"}
      className="text-white px-4 py-2 rounded-full text-xl font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:scale-110 transition-all duration-500 ease-in-out hover:border-orange hover:shadow-cyan cursor-pointer"
    >
      Contact Me <LuArrowDownRight className="md:block hidden" />
    </Link>
  );
};

export default NavbarButton;
