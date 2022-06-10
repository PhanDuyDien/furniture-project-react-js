import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: var(--secondary-yellow);
  border-bottom: 0.5px solid var(--gray-s04);

  /* .active {
    background-color: var(--secondary-yellow);
  } */

  .navbar {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-logo {
      width: 12.666%;
      border-right: 0.5px solid var(--gray-s04);
    }

    &-menu {
      .menu-list {
        display: flex;
        align-items: center;

        .menu-item {
          display: flex;
          align-items: center;

          a {
            margin-right: 25px;
            font-size: var(--fs-body01);
            color: var(--secondary-brown);
          }

          svg {
            transform: rotate(130deg);
            color: #353535;
            margin-right: 25px;
          }
        }
      }
    }

    &-feature {
      display: flex;
      align-items: center;
      svg {
        color: var(--secondary-brown);
        font-size: 25px;
        cursor: pointer;
      }
      .feature-search {
        width: 25%;
        border-left: 0.5px solid var(--gray-s04);

        svg {
          transform: rotate(270deg);
        }
      }
      .feature-wishlist {
        border-left: 0.5px solid var(--gray-s04);
        width: 25%;

        .number-wishlist {
          position: relative;

          h3 {
            color: white;
            font-size: 12px;
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: var(--primary-orange);
            display: flex;
            align-items: center;
            justify-content: center;
            top: -2px;
            right: -4px;
          }
        }
      }
      .feature-cart {
        border-left: 0.5px solid var(--gray-s04);
        width: 25%;

        .number-cart {
          position: relative;

          h3 {
            color: white;
            font-size: 12px;
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: var(--primary-orange);
            display: flex;
            align-items: center;
            justify-content: center;
            top: -2px;
            right: -4px;
          }
        }
      }
      .feature-burger {
        border-left: 0.5px solid var(--gray-s04);
        width: 25%;
      }
    }
  }
`
