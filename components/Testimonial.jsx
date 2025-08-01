import Button from './Button'
import Pretitle from './Pretitle'
import Slider from './Slider'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Testimonial = () => {
  return (
    <section className="pt-16 xl:pt-32 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0"
          >
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6">Built on Trust, Proven By Results</h2>
            <p className="mb-10 max-w-[420px]">
              From homes to commercial spaces, our clients share their
              experience of working with us. See how we've helped them bring
              their homes to life with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </motion.div>
          {/* img and slider */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <img
                src="./assets/img/About.jpg"
                fill="true"
                className="object-cover"
                quality={100}
              />
            </div>
            <motion.div
              variants={fadeIn('left', 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max"
            >
              {/* quote icon img */}
              <img
                src="./assets/img/quote.png"
                width={54}
                height={36}
                alt=""
                className="absolute z-20 -top-5 left-[60px] Primary"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
