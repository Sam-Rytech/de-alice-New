import Link from "next/link"
import Pretitle from "./Pretitle"

import { RiArrowRightUpLine, RiCheckboxCircleFill } from 'react-icons/ri'

const workData = [
  {
    img: './assets/img/truck.jpg',
    name: 'Trucking',
    description: 'We provide top-notch trucking services for all your transportation needs.',
    href: "",
  },
  {
    img: './assets/img/gold-mine.jpg',
    name: 'Mining',
    description: 'We provide top-notch mining services for all your extraction needs.',
    href: "",
  },
  {
    img: './assets/img/gems.jpg',
    name: 'Gemstone Mining',
    description: 'We provide top-notch gemstone mining services for all your precious stone needs.',
    href: "",
  },
  {
    img: './assets/img/open-pit-mining.jpg',
    name: 'Open Pit Mining',
    description: 'We provide top-notch open pit mining services for large scale extraction.',
    href: "",
  },
]

const Work = () => {
  return (
    <div id="projects" className="h-screen bg-gray-100">work</div>
  )
}

export default Work