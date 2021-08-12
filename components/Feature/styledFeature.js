import styled from 'styled-components';
import { opacityAnimation, translateLeft, translateRight, translateUp } from '../../Global/GlobalAnimation';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: flex;

  @media (min-width: ${lgScreen}px) {
    margin-top: 5rem;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  animation: ${translateRight} 2s ease none;
  color: ${({ theme }) => theme.colors.textColor};

  @media screen and (min-width: ${lgScreen}px) {
    width: 50%;
    padding-left: 1rem;
  }
`;

export const Greating = styled.h4`
  font-family: 'Indie Flower', cursive;
  font-size: 1.3rem;
  animation: ${opacityAnimation} 2s ease none;
  
  @media screen and (min-width: ${mdScreen}px) {
    font-size: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  animation: ${translateUp} 4s ease none;

  span {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 3rem;
  }
`;

export const Writer = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-size: 1.3rem;
  font-weight: 500;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 2rem;
  }
`;

export const Bio = styled.p`
  font-size: 1rem;
  margin: 2rem 0;
  animation: ${opacityAnimation} 2s ease none;
  width: 270px;
  line-height: 1.5;

  @media screen and (min-width: ${mdScreen}px) {
    width: 300px;
  }

  @media screen and (min-width: ${xlScreen}px) {
    width: 350px;
  }
`;

export const Social = styled.div`
  display: flex;
  margin-top: 2.5rem;
  align-items: center;
  animation: ${opacityAnimation} 4s ease none 0s;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.firstColor};
  cursor: pointer;
  margin: 0 0.5rem;
  font-size: 1.3rem;
  transition: 0.5s;

  :hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 1.7rem;
  }
`;

export const ImageContainer = styled.div`
  display: none;

  @media screen and (min-width: ${lgScreen}px) {
    display: block;
    width: 50%;
    animation: ${translateLeft} 2s ease none 0s;
  }
`;

export const ScrollContainer = styled.div`
  display: none;
  margin-top: 14rem;

  @media screen and (min-width: ${lgScreen}px) {
    display: block;
  }
`;

export const ScrollButton = styled.a`
  color: ${({ theme }) => theme.colors.firstColor};
  transition: 0.3s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  :hover {
    transform: translateY(0.25rem);
  }
`;

export const ScrollMouse = styled.div`
  font-size: 2rem;
  margin: 0 0.5rem 0 0;
`;

export const ScrollButtonText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.firstColor};
  font-weight: 400;
  margin-right: 0.25rem;
`;
