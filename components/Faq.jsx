import Pretitle from './Pretitle'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Description } from '@radix-ui/react-dialog'
import FaqItem from './FaqItem'

const faqItemData = [
  {
    title: 'How long does a contrustion usually take?',
    description: 'Timeline vary based on project size and complexity',
  },
  {
    title: 'Do i need permits for my projects?',
    description: 'Timeline vary based on project size and complexity',
  },
  {
    title: 'What material do you use?',
    description: 'Timeline vary based on project size and complexity',
  },
  {
    title: 'Can i make changes after constuction starts?',
    description: 'Timeline vary based on project size and complexity',
  },
  {
    title: 'How much will my construction project cost?',
    description: 'Timeline vary based on project size and complexity',
  },
  {
    title: 'How do you ensure quality and safety on-site?',
    description: 'Timeline vary based on project size and complexity',
  },
]

const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (index = 0.1), duration: 0.3 },
  }),
}

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32 px-4">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisions
          </p>
        </div>
        {/* faq items */}
        <ul className='w-full flex flex-col'>
          {faqItemData.map((item, index) => {
            return (
              <li key={index}>
                <FaqItem title={item.title} description={item.description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}

export default Faq
