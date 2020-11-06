import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background 400ms ease;
  }

  *, button, input {
    border: 0;
    outline: 0;
    background: none;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme: { colors } }) => colors.text}
  }

  html, body, #root {
    height: 100%;
  }
`
