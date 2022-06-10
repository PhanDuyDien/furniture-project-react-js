import React from 'react'
import { Wrapper } from './ProductCardStyle'
import { BsBag, BsHeart, BsEye } from 'react-icons/bs'

const ProductCard = ({ name, price, image }) => {
  return (
    <Wrapper>
      <div className='card-img'>
        <div className='card-overlay'></div>
        <div className='box-circle'>
          <div className='card-circle'>
            <BsBag />
          </div>
          <div className='card-circle'>
            <BsHeart />
          </div>
          <div className='card-circle'>
            <BsEye />
          </div>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className='card-content'>
        <h3 className='card-name'>{name}</h3>
        <p className='card-price'>${price}</p>
      </div>
    </Wrapper>
  )
}

export default ProductCard
