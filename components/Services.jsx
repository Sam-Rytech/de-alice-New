'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsTrigger, TabsList } from './ui/tabs'
import Button from './Button'

import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from 'react-icons/pi'
import Pretitle from './Pretitle'

const serviceData = [
  {
    name: 'construction',
    icons: <PiWallFill />,
    title: 'Repair services',
    description:
      'We provide top-notch construction services for residential and commercial projects.',
    serviceList: [
      'Residential Construction',
      'Commercial Construction',
      'Renovations and Remodeling',
      'Project Management',
      'Site Preparation',
      'Structural Engineering',
    ],
    thumbs: [
      { url: './assets/img/truck.jpg', alt: 'Construction Image 1' },
      { url: './assets/img/gold-mine.jpg', alt: 'Construction Image 2' },
    ],
  },
  {
    name: 'construction-general',
    icons: <PiPaintRollerFill />,
    title: 'Construction services',
    description:
      'We provide top-notch construction services for residential and commercial projects.',
    serviceList: [
      'Residential Construction',
      'Commercial Construction',
      'Renovations and Remodeling',
      'Project Management',
      'Site Preparation',
      'Structural Engineering',
    ],
    thumbs: [
      { url: './assets/img/gems.jpg', alt: 'Construction Image 1' },
      { url: './assets/img/open-pit-mining.jpg', alt: 'Construction Image 2' },
    ],
  },
  {
    name: 'construction-painting',
    icons: <PiWrenchFill />,
    title: 'painting services',
    description:
      'We provide top-notch construction services for residential and commercial projects.',
    serviceList: [
      'Residential Construction',
      'Commercial Construction',
      'Renovations and Remodeling',
      'Project Management',
      'Site Preparation',
      'Structural Engineering',
    ],
    thumbs: [
      { url: './assets/img/excavator-bucket.jpg', alt: 'Construction Image 1' },
      { url: './assets/img/truck.jpg', alt: 'Construction Image 2' },
    ],
  },
  {
    name: 'construction-man',
    icons: <PiUserGearFill />,
    title: 'management-services',
    description:
      'We provide top-notch construction services for residential and commercial projects.',
    serviceList: [
      'Residential Construction',
      'Commercial Construction',
      'Renovations and Remodeling',
      'Project Management',
      'Site Preparation',
      'Structural Engineering',
    ],
    thumbs: [
      { url: './assets/img/excavator.jpg', alt: 'Construction Image 1' },
      { url: './assets/img/truck.jpg', alt: 'Construction Image 2' },
    ],
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState('construction')
  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className='text-center max-w-[540px] mx-auto mb-20'>
          <Pretitle text="Our Services" center/>
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[488px] mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation
          </p>
        </div>

        {/* tabs */}

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="flex flex-col xl:flex-row w-full gap-[30px]">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none cursor-pointer"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? 'bg-black text-white'
                        : 'PrimaryB text-black'
                    }`}
                  >
                    <div className="text-5xl">{item.icons}</div>
                  </div>
                  <div className="uppercase text-base font-semibold tracking-[.6px] w-[100px] ml-16x">
                    {item.name}
                  </div>
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div>
                  {/* images */}
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px] "
                      >
                        <img
                          src={thumb.url}
                          alt=""
                          fill="true"
                          className="w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        />
                      </div>
                    ))}
                  </div>
                  {/* text & button */}
                  <div>
                    <div>
                      <h3 className='h3 mb-6'>{item.title}</h3>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Services
