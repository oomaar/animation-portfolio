import styled from 'styled-components';
import { lgScreen, mdScreen } from '../../Global/GlobalStyle';

export const Container = styled.div``;

export const QualificationContainer = styled.div`
  display: grid;
  row-gap: 2.5rem;

  @media screen and (min-width: ${mdScreen}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${lgScreen}px) {
    column-gap: 6rem;
  }
`;

export const QualificationTitle = styled.h3`
  font-size: 1.3rem;
  color: #000;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  font-family: 'Indie Flower', cursive;
  
  @media screen and (min-width: ${lgScreen}px) {
    font-size: 1.6rem;
  }
`;

export const QualificationIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const QualificationGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const QualificationSubcontainer = styled.div`
  padding: 1rem;
`;

export const QualificationArea = styled.h3`
  font-size: 0.938rem;
  color: ${({ theme }) => theme.colors.firstColor};
  margin-bottom: 1rem;

  @media screen and (min-width: ${lgScreen}px) {
    font-size: 0.938rem;
  }
`;

export const QualificationBox = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  font-weight: 300;

  @media screen and (min-width: ${lgScreen}px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const QualificationWork = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.firstColorLight};
  padding: 0.3rem 0;
`;

export const QualificationSmallIcon = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.firstColorLight};
  margin-right: 1rem;
`;