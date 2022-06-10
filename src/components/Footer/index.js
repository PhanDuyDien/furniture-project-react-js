import React from 'react'
import { Wrapper } from './FooterStyle'
import { Logo } from '../../assets/Logo'
import {
  FaFacebookF,
  FaTwitter,
  FaAmazon,
  FaPinterest,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmazonPay,
  FaCcJcb,
} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import styled from 'styled-components'

const FooterContainer = () => {
  return (
    <Footer>
      <Wrapper>
        <div className='main'>
          <div className='container'>
            <div className='footer'>
              <div className='footer-grid'>
                <div className='footer-content col-4'>
                  <div className='footer-title'>
                    <Logo light />
                  </div>
                  <div className='footer-desc'>
                    <p>
                      We Design our furnitures following minimalist
                      philosophies.
                    </p>
                  </div>
                  <div className='footer-social'>
                    <ul>
                      <li>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaAmazon />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <AiFillInstagram />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaPinterest />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='footer-content col-2'>
                  <div className='footer-title'>
                    <h4>ABOUT</h4>
                  </div>
                  <div className='footer-list'>
                    <div className='footer-item'>
                      <a href='#'>Shop</a>
                      <a href='#'>Delivery</a>
                      <a href='#'>Returns</a>
                    </div>
                  </div>
                </div>
                <div className='footer-content col-2'>
                  <div className='footer-title'>
                    <h4>HELP</h4>
                  </div>
                  <div className='footer-list'>
                    <div className='footer-item'>
                      <a href='#'>Order tracking</a>
                      <a href='#'>FAQ</a>
                      <a href='#'>Contact Us</a>
                    </div>
                  </div>
                </div>
                <div className='footer-content col-4'>
                  <div className='footer-title'>
                    <h4>NEWSLETTER</h4>
                  </div>
                  <div className='footer-desc'>
                    <p>Join our mailing list for the latest product updates!</p>
                  </div>
                  <div className='footer-form'>
                    <form className='form-email'>
                      <input type='email' placeholder='Your email' />
                      <button className='form-button' type='submit'>
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className='footer-bottom'>
        <div className='main'>
          <div className='container'>
            <div className='footer-content'>
              <div className='footer-license'>
                <p>Copyright © 2022 Furio. All Rights Reserved By devsarray</p>
              </div>
              <div className='footer-payment'>
                <p>Source Payment :</p>
                <div className='payment-list'>
                  <FaCcVisa />
                  <FaCcMastercard />
                  <FaCcAmazonPay />
                  <FaCcJcb />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}

const Footer = styled.section`
  .footer-bottom {
    background: var(--primary-darkGreen);
    padding: 16px 0;

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--fs-body02);
      font-weight: var(--fw-body02);
      line-height: var(--lh-body02);
      color: var(--gray-s04);
    }

    .footer-payment {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 18px;

      .payment-list {
        display: flex;
        align-items: center;
        column-gap: 10px;
        svg {
          font-size: 40px;
        }
      }
    }
  }
`

export default FooterContainer
