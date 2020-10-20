import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #ffffff;
  }

  button, input {
    border: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyles
