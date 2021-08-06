import styled from 'styled-components';
import { translateLeft, translateRight } from '../../Global/GlobalAnimation';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;

export const SubContainer = styled.div`
  animation: ${translateRight} 2s ease none;
`;

export const AboutMe = styled.p`
  margin-bottom: 3rem;
  font-size: 1rem;
  animation: ${translateLeft} 2s ease none;
  width: 100%;
  line-height: 1.5;
`;
