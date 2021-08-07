import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const SkillsContainer = styled.div`
   @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;

export const IconsContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  

  @media screen and (min-width: ${mdScreen}px) {
    grid-template-columns: repeat(3, 2fr);
   }

  @media screen and (min-width: ${lgScreen}px) {
    grid-template-columns: repeat(4, 2fr); 
   }

  @media screen and (min-width: ${xlScreen}px) {
    grid-template-columns: repeat(5, 4fr);
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.firstColor};
  width: 50px;
  height: 50px;
  padding: 5px;
  cursor: pointer;
  

  @media screen and (min-width: ${mdScreen}px) {
    padding: 0;
    font-size: 7rem;
    font-size: 4rem;
  }
`;
