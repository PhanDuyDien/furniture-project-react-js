import styled from 'styled-components'

export const Wrapper = styled.section`
  .swiper {
    padding-top: 100px;
    margin-top: -40px;

    .swiper-button-next {
      right: 5px;
      top: 32px;
    }

    .swiper-button-prev {
      top: 32px;
      right: 42px;
      left: unset;
    }

    .swiper-button-next,
    .swiper-button-prev {
      width: 37px;
      height: 37px;
      background: transparent;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:after {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        font-size: 16px;
        color: var(--gray-s02);
      }

      &:hover {
        background: var(--primary-orange);

        &:after {
          color: white;
        }
      }
    }

    .swiper-button-next:after {
      content: '\f061';
    }
    .swiper-button-prev:after {
      content: '\f060';
    }
  }
`
