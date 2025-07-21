"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList, } from "./ui/tabs";
import Button from "./Button";

import { PiWallFill, PiPaintRollerFill, PiWrenchFill, PiUserGearFill } from "react-icons/pi";


const servicesData = [
  {
    name: 'contruction',
    icons: <PiWallFill />,
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
    name: 'contruction',
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
    name: 'contruction',
    icons: <PiWrenchFill />,
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
    name: 'contruction',
    icons: <PiUserGearFill />,
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
]

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
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

        <Tabs defaultValue="Construction" className="">
          <TabsList className="grid w-full grid-cols-2">
            {servicesData.map((item) => {
              return <TabsTrigger></TabsTrigger>
            })}
          </TabsList>
          <TabsContent value="account">
          </TabsContent>
          <TabsContent value="password">
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services