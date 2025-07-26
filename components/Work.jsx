import Link from 'next/link'
import Pretitle from './Pretitle'

import { RiArrowRightUpLine, RiCheckboxCircleFill } from 'react-icons/ri'

const workData = [
  {
    img: './assets/img/truck.jpg',
    name: 'Trucking',
    description:
      'We provide top-notch trucking services for all your transportation needs.',
    href: '',
  },
  {
    img: './assets/img/gold-mine.jpg',
    name: 'Mining',
    description:
      'We provide top-notch mining services for all your extraction needs.',
    href: '',
  },
  {
    img: './assets/img/gems.jpg',
    name: 'Gemstone Mining',
    description:
      'We provide top-notch gemstone mining services for all your precious stone needs.',
    href: '',
  },
  {
    img: './assets/img/open-pit-mining.jpg',
    name: 'Open Pit Mining',
    description:
      'We provide top-notch open pit mining services for large scale extraction.',
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
          <p className='mb-11 max-w-[480px] mx-auto'>
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
                fill
                className="object-cover"
                quality={100}
              />
              <div>
                <div>
                  <h4>{item.name}</h4>
                  <div>
                    <RiCheckboxCircleFill className=''/>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Work
