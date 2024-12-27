import { ThemeProvider } from "styled-components"
import { Games } from "./components/twoButtonsTogether"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Games />
      <GlobalStyle />
    </ThemeProvider>
  )
}
