import styled from "styled-components";
import { lgScreen, mdScreen, xlScreen } from "../../Global/GlobalStyle";

export const Container = styled.div`
  margin-top: 4rem;

   @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;


export const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Button = styled.div`
  font-size: 0.8rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${({ active, theme }) => active && theme.colors.firstColor};
  margin: 0 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 0.9rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.div`
  font-size: 1.8rem;
  margin: 0 0.25rem;
`;

export const Sections = styled.div`
  display: grid;
  justify-content: center;

  @media screen and (min-width: 568px) {
    grid-template-columns: 0.6fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.5fr;
  }
`;

export const Content = styled.div`
  display: ${({ dataTarget }) => dataTarget ? 'block' : 'none'};
`;

export const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;

  @media screen and (max-width: 350px) {
    gap: 0.5rem;
  }
`;

export const Title = styled.h3`
`;

export const Subtitle = styled.span`
  display: inline-block;
`;

export const Calendar = styled.div`
  color: ${({ theme }) => theme.colors.textColorLight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100px;
  margin-top: 1rem;
`;

export const Rounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${({ theme }) => theme.colors.firstColor};
  border-radius: 50%;
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.firstColor};
  transform: translate(6px, -7px);
`;
