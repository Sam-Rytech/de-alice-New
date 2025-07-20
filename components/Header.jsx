"use client";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

//Components
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "about us",
    path: "about",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "services",
    path: "services",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* nav & button */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-sm uppercase font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none PrimaryA"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth="true"
                      spy="true"
                      className="cursor-pointer"
                      activeClass="Primary"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>

            {/* btn */}
            <ScrollLink
              to="contact"
              smooth="true"
              spy="true"
            >
              <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-black group cursor-pointer">
                <div className="text-white flex-1 text-center tracking-[1.2px] font-bold text-sm uppercase">
                  Get a quote
                </div>
                <div className="bg-white w-11 h-11 flex items-center justify-center">
                  <RiArrowRightUpLine className="text-black text-xl group-hover:rotate-45 transition-all duration-200" />
                </div>
              </button>
            </ScrollLink>
          </nav>

          {/* nav mobile */}
          <div className="xl:hidden">
            <NavMobile />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
