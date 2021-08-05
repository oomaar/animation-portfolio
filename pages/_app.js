import { ThemeProvider } from 'styled-components';
import "../font.css";
import { darkTheme, GlobalStyle, lightTheme } from "../GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeProvider>
    </>
  )
}
