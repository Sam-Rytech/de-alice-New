import Link from 'next/link'

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from 'react-icons/ri'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-black px-4">
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo and text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <img src="/LogoW.png" width={230} height={48} alt="" />
            </Link>
            <p className="text-white max-w-[270px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              hendrerit enim non neque blandit,Lorem ipsum dolor sit amet.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-white">
            <h4 className="h4 text-white mb-10">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-[#ea0f0a] text-xl" />
                <p>1250 Brookhaven Ave, US</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-[#ea0f0a] text-xl" />
                <p>+1 (655) 000-0000</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-[#ea0f0a] text-xl" />
                <p>dealiceintegrated@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex-1 text-white">
            <h4 className="h4 text-white mb-10">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              hendrerit enim non neque blandit,
            </p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bg-[#ea0f0a] w-12 h-12 absolute right-2 top-2 bottom-2 text-black text-xl flex items-center justify-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-[#666666] flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-[#666666]">
          Copyright &copy; 2025 DeAlice. All rights reserved
        </p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:text-[#ea0f0a] transition-all"
        />
      </div>
    </footer>
  )
}

export default Footer
