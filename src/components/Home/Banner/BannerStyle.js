import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: var(--secondary-yellow);

  .banner {
    display: flex;
    align-items: center;
    padding: 75px 0;

    &-content {
      .banner-heading {
        font-size: var(--fs-heading01);
        color: var(--primary-darkGreen);
        font-weight: var(--fw-heading01);
        line-height: 95px;
      }

      .banner-desc {
        font-size: var(--font-body01);
        width: 70%;
        line-height: 26px;
        font-weight: var(--fw-body01);
        color: var(--secondary-brown);
        margin: 30px 0;
      }
    }

    &-picture {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        width: 500px;
        height: 600px;
        border-radius: 50%;
        background-color: var(--gray-s04);
      }

      .banner-tag {
        width: 112px;
        height: 112px;
        position: absolute;
        top: 50%;
        left: -55px;
        transform: translateY(-50%);
        z-index: 99;
      }

      .banner-image {
        position: relative;
        width: 100%;
        height: 676px;
        object-fit: cover;
        z-index: 98;
      }
    }
  }
`
