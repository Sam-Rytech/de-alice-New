"use client";
import { cn } from "../lib/utils";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

const socials = [
  {
    icon: <RiFacebookFill />,
    path: "https://www.facebook.com",
  },
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com",
  },
  {
    icon: <RiLinkedinFill />,
    path: "https://www.Linkedin.com",
  },
  {
    icon: <RiTwitterXFill />,
    path: "https://www.facebook.com",
  },
];

const Socials = ({ containerStyles }) => {
  return (
    <section
      className={cn(
        "flex justify-center mx-auto xl:mx-0 text-white",
        containerStyles
      )}
    >
      <ul className="flex justify-center xl:justify-end gap-12">
        {socials.map((social, index) => (
          <li key={index} className="text-2xl">
            <Link href={social.path} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Socials;
