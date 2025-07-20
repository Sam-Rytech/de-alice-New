"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { text } from "stream/consumers";


const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Successful Projects",
  }
  {
    endCountNum: 32,
    endCountText: "k",
    text: "Happy Clients",
  },
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Years of Experience",
  }
]

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {treshold: 0.2});
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-black py-10">
      <div className="container"></div>      
    </div>
  )
}

export default Stats