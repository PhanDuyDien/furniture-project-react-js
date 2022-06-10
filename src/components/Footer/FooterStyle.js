import styled from 'styled-components'

export const Wrapper = styled.footer`
  background: var(--primary-darkGreen);
  padding-top: 110px;
  border-bottom: 1px solid var(--gray-s04);

  .footer {
    padding-bottom: 80px;
    &-grid {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }

    &-content {
      &:first-child {
        .footer-title {
          width: 70%;
          &:first-child {
            margin-bottom: 25px;
          }
        }
        .footer-desc {
          width: 70%;
          margin-bottom: 36px;
        }
      }
    }

    &-title {
      font-size: var(--fs-heading05);
      font-weight: var(--fw-heading05);
      line-height: var(--lh-heading05);
      text-transform: uppercase;
      color: white;
      margin-bottom: 40px;
    }

    &-desc {
      font-size: var(--fs-body01);
      font-weight: var(--fw-body01);
      line-height: var(--lh-body01);
      color: var(--gray-s04);
    }

    &-social {
      ul {
        display: flex;
        align-items: center;
        column-gap: 18px;

        li {
          a {
            color: white;
            transition: all 0.3s ease-in-out;
            svg {
              width: 20px;
            }

            &:hover {
              color: var(--primary-orange);
            }
          }
        }
      }
    }

    &-list {
      .footer-item {
        display: flex;
        flex-direction: column;
        row-gap: 18px;
        a {
          font-size: var(--fs-body01);
          font-weight: var(--fw-body01);
          line-height: var(--lh-body01);
          color: var(--gray-s04);
          transition: all 0.3s ease-in-out;

          &:hover {
            color: var(--primary-orange);
          }
        }
      }
    }

    &-form {
      margin-top: 18px;

      .form-email {
        input {
          padding: 15px 20px;
          padding-right: 60px;
          background: transparent;
          border: 1px solid white;
          font-size: var(--fs-body01);
          font-weight: var(--fw-body01);
          line-height: var(--lh-body01);
          color: var(--gray-s04);

          &::placeholder {
            font-size: var(--fs-body01);
            font-weight: var(--fw-body01);
            line-height: var(--lh-body01);
            color: var(--gray-s04);
          }
        }

        .form-button {
          background: transparent;
          color: white;
          padding: 15px 20px;
          border: 1px solid white;
          font-size: var(--fs-body01);
          font-weight: var(--fw-body01);
          line-height: var(--lh-body01);
          border-left: none;
          cursor: pointer;
        }
      }
    }
  }
`
