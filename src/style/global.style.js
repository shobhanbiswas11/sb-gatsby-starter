import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

// House Keeping------------------------------
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
html {
  font-size: 62.5%; //1rem = 10px, use rem now
}

body {
    font-size : 1.6rem;
}
`

export default GlobalStyle
