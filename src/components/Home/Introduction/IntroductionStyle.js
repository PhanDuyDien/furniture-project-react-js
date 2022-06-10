import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 120px 0;

  .introduction {
    display: flex;
    align-items: center;
    &-picture {
      .picture-detail {
        position: relative;
        .picture-circle-large {
          width: 474px;
          height: 474px;
          border-radius: 50%;
          object-fit: cover;
        }
        .picture-circle-small {
          position: absolute;
          bottom: -25px;
          right: 110px;
          width: 154px;
          height: 154px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
    &-content {
      .introduction-heading {
        text-transform: capitalize;
        font-size: var(--fs-heading02);
        font-weight: var(--fw-heading02);
        color: var(--primary-darkGreen);
        line-height: 65px;
      }

      .introduction-desc {
        font-size: var(--fs-body01);
        font-weight: var(--fw-body01);
        line-height: 26px;
        color: var(--secondary-brown);
        margin: 30px 0;
        width: 80%;
      }

      .introduction-list {
        display: flex;
        align-items: center;
        column-gap: 48px;
        .introduction-item {
          h6 {
            font-size: var(--fs-heading04);
            font-weight: var(--fw-heading04);
            color: var(--primary-darkGreen);
            line-height: 40px;
          }

          p {
            text-transform: capitalize;
            font-size: var(--fs-body02);
            font-weight: var(--fw-body02);
            color: var(--secondary-brown);
            line-height: 22px;
            width: 50%;
          }
        }
      }
    }
  }
`
