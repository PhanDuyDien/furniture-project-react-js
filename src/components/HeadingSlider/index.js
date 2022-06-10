import React from 'react'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { Wrapper } from './HeadingSliderStyle'

const HeadingSlider = ({ heading, center }) => {
  return (
    <Wrapper center={center}>
      <div className='heading'>
        <h3>{heading}</h3>
      </div>
    </Wrapper>
  )
}

export default HeadingSlider
