import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 120px 0;

  .products {
    &-list {
      margin-top: 90px;
      margin-bottom: 60px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px 30px;
    }
  }
`
