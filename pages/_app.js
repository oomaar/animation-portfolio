import { ThemeProvider } from 'styled-components';
import "../Global/fonts.css";
import { darkTheme, GlobalStyle, lightTheme } from "../Global/GlobalStyle";

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
  );
};
