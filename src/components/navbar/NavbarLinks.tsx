import Link from "next/link";
 
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ( ) => {
  return (
    <ul className="flex gap-6 text-white text-center lg:flex-row flex-col lg:relative absolute top-[120%] left-0 right-0 lg:text-md text-xl bg-cyan/20 backdrop-blur-lg lg:bg-black py-4">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            className="text-white text-xl cursor-pointer hover:text-cyan transition-all duration-500 ease-in-out"
            href={`/#${link.section}`}
          >
            {link.link}
          </Link>
          <div className="h-[1px] mx-auto w-0 bg-cyan group-hover:w-full transition-all duration-500 ease-in-out"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
