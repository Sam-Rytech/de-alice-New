import React from 'react'
import Button from './Button'

import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Hero = () => {
  return (
    <section className="h-[70vh] bg-[url('/assets/img/hero/hero-1.jpg')] bg-no-repeat bg-cover bg-center relative px-4">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto flex items-center h-full">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-white mb-1"
          >
            <span className="Primary">Mineral</span> Supplier
          </motion.h1>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-white mb-4"
          >
            <span className="Primary">Export</span> of minerals
          </motion.h1>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            Get the best price from us, one of the largest distributor of
            minerals in the Africa region and we always try to send the best
            purity of materials to our customers.
          </motion.p>

          {/* btn */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="See our Work" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
