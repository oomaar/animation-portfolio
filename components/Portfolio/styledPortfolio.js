import styled from 'styled-components';
import { zoom } from '../../Global/GlobalAnimation';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    padding-left: 1rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${mdScreen}px) {
    justify-content: space-evenly;
  }
`;

export const Link = styled.span`
  cursor: pointer;
  font-size: 1rem;
  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: ${xlScreen}px) {
    font-size: 1.2rem;
  }
`;

export const CarouselContainer = styled.div`
  padding: 0.5rem;
  margin: 2rem 0 0;
  cursor: grab;

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.firstColor};
  }
  .swiper-button-prev,
  .swiper-button-next,
  .swiper-pagination-bullet {
    outline: none;
  }

  @media screen and (min-width: ${mdScreen}px) {
    /* padding: 1rem; */
  }

  @media screen and (min-width: ${lgScreen}px) {
  }
`;

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: ${mdScreen}px) {
    padding: 2rem 3rem;
  }

  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.a`
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  background: transparent;

  @media screen and (min-width: ${lgScreen}px) {
    margin-right: 1rem;
  }
`;

export const PortfolioImage = styled.img`
  width: 220px;
  border-radius: 5%;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: ${mdScreen}px) {
    width: 500px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
`;

export const PortfolioTitle = styled.h3`
  text-align: left;
  font-size: 1.1rem;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 1.5rem;
  }
`;

export const PortfolioText = styled.span`
  text-align: left;
  margin: 1rem 0;
  font-size: 0.9rem;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 1rem;
  }
`;

export const ArrowNext = styled.div`
  right: -1rem;
  top: 60%;
  
  ::after {
    content: '';
  }
  
  @media screen and (min-width: ${lgScreen}px) {
    right: 1rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    right: 0.5rem;
  }
`;

export const SwiperPortfolioIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.firstColor};
  cursor: pointer;
  
  @media screen and (min-width: ${xlScreen}px) {
    font-size: 3.5rem;
  }
`;

export const ArrowPrev = styled.div`
  left: -1rem;
  top: 60%;

  ::after {
    content: '';
  }

  @media screen and (min-width: ${lgScreen}px) {
    left: 1rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    left: 0.5rem;
  }
`;

export const ProjectContainer = styled.div`
  animation: ${zoom} 0.1s linear none;
`;



/* .carousel.carousel-slider {
  overflow: inherit;
}

.carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
  background-color: transparent;
  right: -10px;
}

.carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
  background-color: transparent;
  left: -10px;
}

.carousel .control-arrow, .carousel.carousel-slider .control-arrow{
  opacity: 1;
}

.carousel .control-next.control-arrow:before {
  content: '';
  border: solid #0135AD;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.carousel .control-prev.control-arrow:before {
  content: '';
  border: solid #0135AD;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
} */