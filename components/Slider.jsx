import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderBtns from './SliderBtns'

function slider() {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px] ">
            <img
              src="./assets/img/About.jpg"
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expextation. On time, within budget and top quality work.
              Highly recommend
            </p>
            <p className="font-semibold text-black">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px] ">
            <img
              src="./assets/img/About.jpg"
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expextation. On time, within budget and top quality work.
              Highly recommend
            </p>
            <p className="font-semibold text-black">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] w-full flex items-center gap-9 h-full">
          {/* avatar img */}
          <div className="relative hidden xl:flex w-[90px] h-[90px] ">
            <img
              src="./assets/img/About.jpg"
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expextation. On time, within budget and top quality work.
              Highly recommend
            </p>
            <p className="font-semibold text-black">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

          {/* Slider btns */}
          <SliderBtns />
    </Swiper>
  )
}

export default slider
