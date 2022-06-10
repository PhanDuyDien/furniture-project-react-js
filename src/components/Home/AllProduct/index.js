import React from 'react'
import { Wrapper } from './AllProductStyle'
import HeadingSlider from '../../HeadingSlider'
import { useSelector } from 'react-redux'
import ProductCard from '../../ProductCard'
import Button from '../../Button'

const AllProductContainer = () => {
  const { isLoading, products } = useSelector((store) => store.product)

  if (isLoading) {
    return <h2>Loading......</h2>
  }

  return (
    <Wrapper>
      <div className='main'>
        <div className='container'>
          <div className='products'>
            <HeadingSlider heading='Our Popular Items' center />
            <div className='products-list'>
              {products
                .map((item) => {
                  return <ProductCard key={item.id} {...item} />
                })
                .slice(0, 8)}
            </div>
            <div className='products-button flex-center'>
              <Button link='/shop' type='button' color>
                All Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AllProductContainer
