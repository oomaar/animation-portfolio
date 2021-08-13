import styled from 'styled-components';
import { lgScreen, smScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding: 0rem 1rem 0;
  }
`;

export const ProjectBackground = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.firstColor};
  padding-top: 3rem;
  border-radius: 0.5rem;

  @media screen and (min-width: ${lgScreen}px) {
    background: none;
  }
`;

export const ProjectData = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding-top: 0.8rem;
  } 
`;

export const ProjectContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  transition: 0.5s;

  :hover {
    box-shadow: 0 6px 8px rgba(174, 190, 205, 0.5);
  }
  
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (min-width: ${lgScreen}px) {
    background-color: ${({ theme }) => theme.colors.firstColorSecond};
    border-radius: 1rem;
    padding: 3rem 2.5rem 0;
    grid-template-columns: 1fr max-content;
    column-gap: 3rem;
  }
`;

export const ProjectTitle = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

export const ProjectSubtitle = styled.p`
  margin-bottom: 1.5rem;
  color: #fff;
`;

export const ProjectImage = styled.img`
  width: 232px;
  justify-self: center;
  margin-bottom: 1rem;

  @media screen and (max-width: ${smScreen}px) {
    width: 200px;
  }
`;