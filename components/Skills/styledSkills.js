import styled, { keyframes } from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

const up = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  } to {
    transform: translateY(-50px);
    opacity: 0;
  }
`;

const down = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  } to {
    transform: translateY(-50px);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-10px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

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

export const SkillTitle = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.firstColor};
  opacity: 0;
  transition: 0.5s;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.firstColor};
  width: 50px;
  height: 50px;
  padding: 5px;
  transition: 0.5s;
  animation: ${bounce} 5s cubic-bezier(0.280, 0.840, 0.420, 1) infinite;

  @media screen and (min-width: ${mdScreen}px) {
    padding: 0;
    font-size: 4rem;
  }

  @media screen and (min-width: ${lgScreen}px) {
    width: auto;
    height: auto;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover ${Icon} {
    animation: ${up} 0.5s ease both;
  }

  :hover ${SkillTitle} {
    animation: ${down} 0.5s ease both;
  }
`;
