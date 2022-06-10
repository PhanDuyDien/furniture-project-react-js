import styled from 'styled-components'
import background from '../../../assets/img/promotion-01.avif'

export const Wrapper = styled.section`
  padding: 110px 0;
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: var(--gray-s01);
    opacity: 0.6;
  }

  .promotion {
    position: relative;
    z-index: 99;
    &-heading {
      h3 {
        width: 40%;
        text-align: center;
        text-transform: capitalize;
        font-size: var(--fs-heading02);
        font-weight: var(--fw-heading02);
        line-height: var(--lh-heading02);
        color: white;
        margin-bottom: 30px;
      }
    }
  }
`
