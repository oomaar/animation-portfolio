import styled, { keyframes } from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../GlobalStyle';

const imageTranslate = keyframes`
  from {
    transform: translateX(1000px);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const featureTranslate = keyframes`
  from {
    transform: translateX(-1000px);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const titleTranslate = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const SubContainer = styled.div`
  width: 100%;
  animation: ${featureTranslate} 2s ease none;

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
  animation: ${titleTranslate} 2s ease none;

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

  @media screen and (min-width: ${mdScreen}px) {
    width: 300px;
  }

  @media screen and (min-width: ${xlScreen}px) {
    width: 350px;
  }
`;

export const Button = styled.a`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.firstColor};
  color: #fff;
  border-radius: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  animation: ${opacityAnimation} 2s ease none 0;
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

export const Social = styled.div`
  display: flex;
  margin-top: 2.5rem;
  align-items: center;
  animation: ${opacityAnimation} 2s ease none 0s;
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
    animation: ${imageTranslate} 2s ease none 0s;
  }
`;
