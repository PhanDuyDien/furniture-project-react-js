import React from 'react'
import { Wrapper } from './ServiceStyle'

const ServiceContainer = () => {
  return (
    <Wrapper>
      <div className='main'>
        <div className='container'>
          <div className='service'>
            <div className='service-detail flex-between'>
              <div className='service-content col-5'>
                <div className='service-header'>
                  <h3>We Provide You The Best Experience</h3>
                  <p>
                    Urna molestie at elementum eu facilisis. Venenatis a the
                    inner condimentum vitae sapien pellentesque.
                  </p>
                </div>
                <div className='service-list'>
                  <div className='service-item'>
                    <img
                      src={require('../../../assets/img/service-icon-01.png')}
                      alt=''
                    />
                    <h4>Minimalist Design</h4>
                  </div>
                  <div className='service-item'>
                    <img
                      src={require('../../../assets/img/service-icon-02.png')}
                      alt=''
                    />
                    <h4>Natural Product</h4>
                  </div>
                  <div className='service-item'>
                    <img
                      srcSet={require('../../../assets/img/service-icon-03-2x.png')}
                      alt=''
                    />
                    <h4>Best Quality Wood</h4>
                  </div>
                </div>
              </div>
              <div className='service-image col-7 flex-center'>
                <div className='service-circle'>
                  <img
                    src={require('../../../assets/img/service-01.avif')}
                    alt='service'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ServiceContainer
