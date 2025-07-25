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
      { url: '../assets/services/1.jpg', alt: 'Construction Image 1' },
      { url: '../assets/services/2.jpg', alt: 'Construction Image 2' },
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
      { url: '../assets/services/1.jpg', alt: 'Construction Image 1' },
      { url: '../assets/services/2.jpg', alt: 'Construction Image 2' },
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
      { url: '../assets/services/1.jpg', alt: 'Construction Image 1' },
      { url: '../assets/services/2.jpg', alt: 'Construction Image 2' },
    ],
  },
  {
    name: 'construction-management',
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
      { url: '../assets/services/1.jpg', alt: 'Construction Image 1' },
      { url: '../assets/services/2.jpg', alt: 'Construction Image 2' },
    ],
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction")
  return (
    <section id="services" className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[488px] mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation
          </p>
        </div>

        {/* tabs */}

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2 h-full">
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
                    {item.icons}
                  </div>
                </TabsTrigger>
              )
            })}
          </TabsList>
          <TabsContent value="account">account</TabsContent>
          <TabsContent value="password">password</TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Services
