import React from 'react'
import { Wrapper } from './IntroductionStyle'

const IntroductionContainer = () => {
  return (
    <Wrapper>
      <div className='wrapper'>
        <div className='container'>
          <div className='introduction'>
            <div className='introduction-picture col-6'>
              <div className='picture-detail'>
                <img
                  src={require('../../../assets/img/intro-01.avif')}
                  alt='furniture-large'
                  className='picture-circle-large'
                />
                <img
                  src={require('../../../assets/img/intro-02')}
                  alt=''
                  className='picture-circle-small'
                />
              </div>
            </div>
            <div className='introduction-content col-6'>
              <h3 className='introduction-heading'>
                We provide look and accuracy
              </h3>
              <p className='introduction-desc'>
                Aiam in arcu cursus euismod quis viverra nibh. Tincidunt nunc
                pulvinar sapien et ligula ullamcorper malesuada. A scelerisque
                purus semper eget duis.
              </p>
              <div className='introduction-list'>
                <div className='introduction-item'>
                  <h6>35</h6>
                  <p>Awards Gained</p>
                </div>
                <div className='introduction-item'>
                  <h6>15k+</h6>
                  <p>Quality Products </p>
                </div>
                <div className='introduction-item'>
                  <h6>2k</h6>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default IntroductionContainer
