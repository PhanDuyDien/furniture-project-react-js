import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

 :root{
  --primary: #096A62;
  --secondary: #FD8B5F;
 }
 * {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 a{
  text-decoration: none;
 }
 ul{
  list-style: none;
  margin: 0;
  padding: 0;
 }
`

export default GlobalStyle
