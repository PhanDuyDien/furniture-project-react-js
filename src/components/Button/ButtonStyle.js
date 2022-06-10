import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${(props) => (props.bgColor ? '#096A62' : '#FD8B5F')};
  display: inline-block;
  border-radius: 60px;

  &:hover {
    button {
      transform: scale(1.2);
      column-gap: 12px;
    }
  }

  button {
    cursor: pointer;
    font-family: var(--fontHeading);
    display: flex;
    align-items: stretch;
    justify-content: center;
    background: transparent;
    border: none;
    font-size: var(--fs-heading06);
    font-weight: var(--fw-heading06);
    text-transform: capitalize;
    padding: 20px 40px;
    color: white;
    flex-direction: row;
    column-gap: 8px;
    transition: all 0.2s, transform 0.3s;

    svg {
      font-size: 28px;
    }
  }
`
