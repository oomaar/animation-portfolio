import styled from 'styled-components';
import { lgScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;