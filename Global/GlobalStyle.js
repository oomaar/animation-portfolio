import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { translateRight } from "./GlobalAnimation";

// Header Height
export const headerHeight = '3rem';

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
    background-color: ${({ theme }) => theme.colors.bodyColor};
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
  font-family: 'Indie Flower', cursive;
  animation: ${translateRight} 2s ease none;
  color: ${({ theme }) => theme.colors.titleColor};
  
  @media screen and (min-width: ${xlScreen}px) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${mdScreen}px) {
    text-align: center;
  }
`;

// Buttons
export const Button = styled.a`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.firstColor};
  color: #fff;
  border-radius: 1rem;
  text-transform: ${({ up }) => up ? 'uppercase' : 'capitalize'};
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  transition: 0.5s;
  opacity: 0.94;
  width: ${({ link }) => link && '100px'};

  :hover {
    opacity: 1;
  }

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 1rem;
  }
`;
