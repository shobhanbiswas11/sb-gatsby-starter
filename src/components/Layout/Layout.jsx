import React from "react"
import { theme } from "src/style"
import "src/style/css/global.css"
import { ThemeProvider } from "styled-components"

export default function Layout({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
