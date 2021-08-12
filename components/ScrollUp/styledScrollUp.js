import styled from "styled-components";
import { xlScreen } from "../../Global/GlobalStyle";

export const ScrollUpLink = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${({ show }) => show ? '5rem' : '-20%'};
  background-color: ${({ theme }) => theme.colors.firstColor};
  z-index: 100;
  opacity: 0.8;
  padding: 0 0.3rem;
  border-radius: 0.4rem;
  transition: 0.4s;
  justify-content: center;
  padding: 0.3rem;

  :hover {
    background-color: ${({ theme }) => theme.colors.firstColorAlt};
  }

  @media screen and (min-width: ${xlScreen}px) {
    right: 10rem;
  }
`;

export const ScrollupIcon = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: #fff;
`;
