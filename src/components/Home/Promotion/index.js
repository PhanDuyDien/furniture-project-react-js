import React from 'react'
import { Wrapper } from './PromotionStyle'
import Button from '../../Button'

const PromotionContainer = () => {
  return (
    <Wrapper>
      <div className='main'>
        <div className='container'>
          <div className='promotion'>
            <div className='promotion-heading flex-center'>
              <h3>Get 10% Off in your fast order</h3>
            </div>

            <div className='promotion-button flex-center'>
              <Button link='/shop' type='button'>
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default PromotionContainer
