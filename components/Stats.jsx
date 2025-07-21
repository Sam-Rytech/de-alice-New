'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'
// import { text } from "stream/consumers";

const statsData = [
  {
    endCountNum: 99,
    endCountText: '%',
    text: 'Client Satisfaction',
  },
  {
    endCountNum: 739,
    endCountText: '+',
    text: 'Successful Projects',
  },
  {
    endCountNum: 32,
    endCountText: 'k',
    text: 'Happy Clients',
  },
  {
    endCountNum: 10,
    endCountText: '+',
    text: 'Years of Experience',
  },
]

const Stats = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.2 })
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-black py-10 px-4">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center ">
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Stats
