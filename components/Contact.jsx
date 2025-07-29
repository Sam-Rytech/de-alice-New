import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from 'react-icons/ri'
import Socials from './Socials'
import Form from './Form'

const Contact = () => {
  return (
    <section id="contact" className="pt-16 xl:pt-32 px-4">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 Primaryb">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-[#666666]/40 h-[640px]">
              <h4 className="text-[26px] font-bold mb-6">Contact Us</h4>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit enim non neque blandit.
              </p>
              {/* contact items */}
              <div className='flex flex-col gap-[40px] mb-16'>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-[#ea0f0a]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help.</p>
                    <p className="font-semibold text-black">
                      dealiceintegrated@gmail.com
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-[#ea0f0a]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at our office</p>
                    <p className="font-semibold text-black">
                      1250 Brookhaven Ave, Dallas, TX 76688, USA
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-[#ea0f0a]" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm</p>
                    <p className="font-semibold text-black">
                      +1 (665) 000-0000
                    </p>
                  </div>
                </div>
              </div>
              <Socials containerStyles="flex gap-[40px] text-black" iconStyles="text-[20px]"/>
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit enim non neque blandit, sed lobortis mauris mollis.
                Cras blandit interdum.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
