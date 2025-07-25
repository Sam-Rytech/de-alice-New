import Link from 'next/link'
import Pretitle from './Pretitle'

import { RiArrowRightUpLine, RiCheckboxCircleFill } from 'react-icons/ri'

const workData = [
  {
    img: './assets/img/truck.jpg',
    name: 'Trucking',
    description: 'Very short description',
    href: '',
  },
  {
    img: './assets/img/gold-mine.jpg',
    name: 'Mining',
    description: 'Very short description',
    href: '',
  },
  {
    img: './assets/img/gems.jpg',
    name: 'Gemstone Mining',
    description: 'Very short description',
    href: '',
  },
  {
    img: './assets/img/open-pit-mining.jpg',
    name: 'Open Pit Mining',
    description: 'Very short description',
    href: '',
  },
]

const Work = () => {
  return (
    <div id="projects" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-center20">
          <Pretitle text="Our work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designer to deliver quality and innovation
            in every project we undertake
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <img
                src={item.img}
                alt={item.name}
                fill="true"
                className="object-cover"
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-black absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="text-white font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="Primary text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] PrimaryB text-black text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work
