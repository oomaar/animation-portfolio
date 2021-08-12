import styled from 'styled-components';
import { lgScreen, mdScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;

export const ContactContainer = styled.div`
  display: grid;
  row-gap: 2.5rem;
`;

export const ContactContent = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const ContactBox = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(174, 190, 205, 0.3);
  transition: 0.5s;

  :hover {
    box-shadow: 0 6px 8px rgba(174, 190, 205, 0.4);
  }
`;

export const ContactIcon = styled.div`
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: 2rem;
`;

export const ContactTitle = styled.h3`
  font-size: 1.25rem;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const ContactText = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ContactSocial = styled.a`
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: 1.25rem;
  margin: 0 1rem;
`;

export const ContactForm = styled.form`
  @media screen and (min-width: ${mdScreen}px) {
    width: 450px;
    justify-self: center;
  }
`;

export const ContactInputs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`;

export const Input = styled.input`
  outline: 0;
  font-family: 'Comfortaa', cursive;
  font-size: 0.938rem;
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.firstColorLight};
  color: ${({ theme }) => theme.colors.firstColor};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.textColor};
  
  @media screen and (min-width: ${lgScreen}px) {
      font-size: 1rem;
    }
`;

export const TextArea = styled.textarea`
  outline: 0;
  font-family: 'Comfortaa', cursive;
  font-size: 0.938rem;
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.firstColorLight};
  color: ${({ theme }) => theme.colors.firstColor};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.textColor};

  @media screen and (min-width: ${lgScreen}px) {
    font-size: 1rem;
  }
`;
