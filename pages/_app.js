// import { ThemeProvider } from 'styled-components'
import "../font.css";
import { GlobalStyle } from "../GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}
