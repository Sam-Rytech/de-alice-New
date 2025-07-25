"use client";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";

import { Link as ScrollLink } from "react-scroll";

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

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-black flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-white border-none text-black">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-black uppercase font-primary font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="Primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          <Socials containerStyles="text-black text-xl flex gap-6"/>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
