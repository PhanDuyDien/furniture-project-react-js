import React from 'react'
import { Wrapper } from './FeedbackStyle'
import HeadingSlider from '../../HeadingSlider'
import Slider from '../../Slider'

const FeedbackContainer = () => {
  return (
    <Wrapper>
      <div className='main'>
        <div className='container'>
          <div className='feedback'>
            <HeadingSlider heading='What our clients say' />
            <Slider spaceBetween={30} slidesPerView={3}></Slider>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default FeedbackContainer
