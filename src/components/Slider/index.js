import React from 'react'
import { Wrapper } from './SliderStyle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Slider = ({ spaceBetween, slidesPerView, children }) => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
      >
        {children}
      </Swiper>
    </Wrapper>
  )
}

export default Slider
