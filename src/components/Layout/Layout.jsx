import React from "react"
import { GlobalStyle, theme } from "src/style"
import { ThemeProvider } from "styled-components"

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
