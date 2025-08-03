import Pretitle from './Pretitle'
import Button from './Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  return (
    <div id="about" className="pt-16 xl:pt-32 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretittle */}
              <Pretitle text="About Us" />
              <h2 className="h2 mb-6">We Serve the Best Services</h2>
              <p className="mb-11">
                Our extensive resources and commitment to client service satisfy
                the needs of a diverse clients across multiple industries. Our
                team of legal experts possess legal knowledge and expertise our
                clients require.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <img width={154} height={38} alt="signature" />
                <p>Company CEO</p>
              </div>
              {/* btn */}
              <Button text="Contact us" />
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* BG */}
              <div className="hidden xl:flex w-[444px] h-[450px] PrimaryB absolute -top-4 -left-4 -z-10"></div>
              <imgzz
                src={'/assets/img/worker.jpg'}
                width={444}
                // height={493}
                alt="worker"
                className="w-full h-full max-w-[444px] max-h-[450px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
