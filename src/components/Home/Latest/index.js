import React from 'react'
import { useSelector } from 'react-redux'
// import { getAllProduct } from '../../../features/product/productSlice'
import HeadingSlider from '../../HeadingSlider'
import ProductCard from '../../ProductCard'
import Slider from '../../Slider'
import { Wrapper } from './LatestStyle'
import { SwiperSlide } from 'swiper/react'

const LatestContainer = () => {
  const { isLoading, products } = useSelector((store) => store.product)

  if (isLoading) {
    return <h2>Loading......</h2>
  }
  return (
    <Wrapper>
      <div className='main'>
        <div className='container'>
          <div className='latest w-100'>
            <HeadingSlider heading='latest arrivals' />
            <Slider spaceBetween={30} slidesPerView={4}>
              {products
                .map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <ProductCard {...item} />
                    </SwiperSlide>
                  )
                })
                .slice(0, 8)}
            </Slider>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default LatestContainer
