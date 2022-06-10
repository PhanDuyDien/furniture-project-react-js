import styled from 'styled-components'

export const Wrapper = styled.article`
  min-width: 270px;

  .card-img {
    width: 100%;
    height: 270px;
    position: relative;

    &:hover {
      .card-overlay {
        opacity: 0.5;
      }

      .card-circle {
        transform: scale(1);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-overlay {
    opacity: 0;
    background-color: var(--gray-s01);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
  }
  .box-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;

    .card-circle {
      cursor: pointer;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: transparent;
      border: 1px solid white;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: scale(0);
      transition: all 0.3s ease-in-out;

      svg {
        color: white;
        font-size: 18px;
        font-weight: 800;
      }

      &:hover {
        background-color: white;
        border: none;
        svg {
          color: var(--primary-orange);
        }
      }
    }
  }

  .card-content {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 15px;

    h3 {
      font-size: var(--fs-heading06);
      font-weight: var(--fw-heading06);
      text-transform: capitalize;
      cursor: pointer;
    }
    p {
      font-size: var(--fs-body01);
      font-weight: var(--fw-body01);
    }
  }
`
