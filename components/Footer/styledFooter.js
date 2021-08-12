import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  padding-top: 2rem;
`;

export const FooterBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.firstColorSecond};
  padding: 2rem 1rem 3rem;

  @media screen and (min-width: ${lgScreen}px) {
    padding: 3rem 2rem 3.5rem;
  }
  
  @media screen and (min-width: ${xlScreen}px) {
    padding: 3rem 5rem 3.5rem;
  }
`;

export const FooterSubContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  row-gap: 3.5rem;

  @media screen and (min-width: ${mdScreen}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${lgScreen}px) {
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${xlScreen}px) {
    padding: 0;
  }
`;

export const FooterTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
`;

export const FooterSubTitle = styled.span`
  color: #fff;
  font-size: 0.813rem;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  
  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  
  :hover {
    color: ${({ theme }) => theme.colors.firstColorLighter};
  }
`;

export const FooterSocials = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    justify-content: flex-end;
  }
`;

export const FooterSocial = styled.a`
  font-size: 1.25rem;
  margin-right: 1.5rem;
  color: #fff;
  
  :hover {
    color: ${({ theme }) => theme.colors.firstColorLighter};
  }
`;

export const FooterCopy = styled.p`
  font-size: 0.75rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-top: 3rem;
  
  @media screen and (min-width: ${lgScreen}px) {
    margin-top: 4.5rem;
  }
`;