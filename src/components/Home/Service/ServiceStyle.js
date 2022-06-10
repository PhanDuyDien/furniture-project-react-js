import styled from 'styled-components'

export const Wrapper = styled.section`
  background: var(--gray-s05);
  padding: 120px 0;
  position: relative;

  &::after {
    content: '';
    width: 555px;
    height: 330px;
    position: absolute;
    background: var(--secondary-green);
    right: 0;
    top: 50%;
    z-index: 0;
    transform: translateY(-50%);
  }

  .service {
    &-detail {
      .service-content {
        .service-header {
          margin-bottom: 40px;
          h3 {
            font-size: var(--fs-heading02);
            font-weight: var(--fw-heading02);
            text-transform: capitalize;
            line-height: var(--lh-heading02);
            color: var(--primary-darkGreen);
          }
          p {
            width: 90%;
            font-size: var(--fs-body01);
            font-weight: var(--fw-body01);
            line-height: var(--lh-body01);
            color: var(--secondary-brown);
            margin-top: 30px;
          }
        }
        .service-list {
          display: flex;
          flex-direction: column;
          row-gap: 25px;

          .service-item {
            display: flex;
            column-gap: 20px;
            align-items: center;

            img {
              width: 26px;
            }

            h4 {
              font-size: var(--fs-heading04);
              font-weight: var(--fw-heading04);
              text-transform: capitalize;
              color: var(--primary-darkGreen);
            }
          }
        }
      }

      .service-image {
        position: relative;
        z-index: 99;
        .service-circle {
          width: 470px;
          height: 490px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`
