import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// View Ports
export const smScreen = 280;
export const mdScreen = 568;
export const lgScreen = 768;
export const xlScreen = 1024;

const hueColor = '240';

export const lightTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 69%, 61%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 70%, 96%)`,
    bodyColor: `hsl(${hueColor}, 60%, 99%)`,
    containerColor: '#eee',
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
  },
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 30%, 8%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 29%, 16%)`,
    bodyColor: `hsl(${hueColor}, 28%, 13%)`,
    containerColor: `hsl(${hueColor}, 29%, 16%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Comfortaa', cursive;
  }

  a {
      text-decoration: none;
      cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;

// Layout
export const Section = styled.section`
  padding: 2rem 0 4rem;
`;

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-family: 'Indie Flower', cursive;
  
  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.span`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Source Code Pro', monospace;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
  
  @media screen and (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;
