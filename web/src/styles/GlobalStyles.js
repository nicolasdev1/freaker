import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  body {
    font-family: Roboto, sans-serif;
    color: #3F3D56;
    background-color: #f5f5f5;
  }

  button, input {
    border: 0;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }
`

export default GlobalStyles
