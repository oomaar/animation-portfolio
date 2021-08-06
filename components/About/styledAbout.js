import styled, { keyframes } from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../GlobalStyle';

// const opacityAnimation = 
//   from {
//     opacity: 0;
//   } to {
//     opacity: 1;
//   }
// `;

const translateLeft = keyframes`
  from {
    transform: translateX(2000px);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const translateRight = keyframes`
  from {
    transform: translateX(-2000px);
    opacity: 0;
   } to {
    transform: translateX(0);
    opacity: 1;
   }
`;

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;

export const SubContainer = styled.div`
  animation: ${translateRight} 2s ease none;
`;

export const AboutMe = styled.p`
  margin-bottom: 3rem;
  font-size: 1rem;
  animation: ${translateLeft} 2s ease none;
  width: 100%;
`;

export const Button = styled.a`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.firstColor};
  color: #fff;
  border-radius: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  transition: 0.5s;
  opacity: 0.94;

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