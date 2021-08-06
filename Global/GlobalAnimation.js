import { keyframes } from "styled-components";

export const translateUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const opacityAnimation = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const translateLeft = keyframes`
  from {
    transform: translateX(2000px);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const translateRight = keyframes`
  from {
    transform: translateX(-2000px);
    opacity: 0;
   } to {
    transform: translateX(0);
    opacity: 1;
   }
`;