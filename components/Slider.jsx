import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

function slider() {
  return (
    <Swiper className="bg-white shadow-custom w-[630px] h-[200px]">
      <SwiperSlide>
        <div>
          {/* avatar img */}
          <div className="relative xl:flex w-[90px] h-[90px] ">
            <img
              src="./assets/img/About.jpg"
              className="object-contain"
              quality={100}
              alt=""
            />
          </div>
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expextation. On time, within budget and top quality work.
              Highly recommend
            </p>
            <p>Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default slider
