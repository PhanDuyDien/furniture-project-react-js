import React from 'react'
import { Wrapper } from './BannerStyle'
import Button from '../../Button'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const BannerContainer = () => {
  return (
    <Wrapper>
      <div className='wrapper'>
        <div className='container'>
          <div className='banner'>
            <div className='banner-content col-7'>
              <h3 className='banner-heading'>Explore Minimal Design</h3>
              <p className='banner-desc'>
                Aliquet sagittis id consectetur purus ut faucibus pulvinar
                elementum. Nulla facilisi morbi tempus iaculis.
              </p>
              <Button link='/shop' type='button' color>
                <p>Shop now</p>
                <HiOutlineArrowSmRight />
              </Button>
            </div>
            <div className='banner-picture col-5'>
              <img
                src={require('../../../assets/img/tag.png')}
                alt='tag'
                className='banner-tag'
              />
              <img
                src={require('../../../assets/img/banner-01.png')}
                className='banner-image'
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default BannerContainer
