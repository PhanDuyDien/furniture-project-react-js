import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  width: 100%;

  .heading {
    h3 {
      position: relative;
      z-index: 99;
      font-size: var(--fs-heading02);
      font-weight: var(--fw-heading02);
      color: var(--primary-darkGreen);
      text-transform: capitalize;
      /* line-height: var(--lh-heading02); */
    }
  }
`
