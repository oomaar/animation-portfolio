import styled, { keyframes } from 'styled-components';
import { scaleOut } from '../../Global/GlobalAnimation';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding: 15rem 1rem 0;
  }
`;

export const PortfolioContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media screen and (min-width: ${mdScreen}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: ${lgScreen}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PortfolioNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media screen and (min-width: ${mdScreen}px) {
    justify-content: space-evenly;
  }
`;

export const PortfolioItem = styled.span`
  cursor: pointer;
  font-size: 1rem;
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.titleColor};

  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  transition: 0.4s;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const PortfolioContent = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(174, 190, 205, 0.3);
  animation: ${scaleOut} 0.1s linear none;

  :hover {
    box-shadow: 0 6px 8px rgba(174, 190, 205, 0.3);
  }

  :hover ${Image} {
    transform: scale(1.02);
  }
`;

export const PortfolioData = styled.div`
  padding:  1.5rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 2rem 0;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
`;

export const PortfolioSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: clamp(1rem, 1vw, 1.1rem);
  height: 100px;
  overflow: hidden;
`;
