import { useState, useRef } from "react";
import { Button, Section, SectionTitle } from "../../Global/GlobalStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import {
    Container,
    LinksContainer,
    Link,
    CarouselContainer,
    PortfolioContainer,
    ImageContainer,
    PortfolioImage,
    TextContainer,
    PortfolioTitle,
    PortfolioText,
    ArrowNext,
    SwiperPortfolioIcon,
    ArrowPrev,
    ProjectContainer,
} from "./styledPortfolio";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export const Portfolio = ({ data }) => {
    const [category, setCategory] = useState("all");
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const cloneData = data.clone.map((clone, i) => (
        <ProjectContainer>
            <SwiperSlide key={i}>
                <PortfolioContainer>
                    <ImageContainer href={clone.url}>
                        <PortfolioImage src={clone.image} alt="" />
                    </ImageContainer>
                    <TextContainer>
                        <PortfolioTitle>{clone.title}</PortfolioTitle>
                        <PortfolioText>{clone.description}</PortfolioText>
                        <Button link href={clone.url}>Demo</Button>
                    </TextContainer>
                </PortfolioContainer>
            </SwiperSlide>
        </ProjectContainer>
    ));

    const schoolData = data.school.map((school, i) => (
        <ProjectContainer>
            <SwiperSlide key={i}>
                <PortfolioContainer>
                    <ImageContainer href={school.url}>
                        <PortfolioImage src={school.image} alt="" />
                    </ImageContainer>
                    <TextContainer>
                        <PortfolioTitle>{school.title}</PortfolioTitle>
                        <PortfolioText>{school.description}</PortfolioText>
                        <Button link href={school.url}>Demo</Button>
                    </TextContainer>
                </PortfolioContainer>
            </SwiperSlide>
        </ProjectContainer>
    ));

    const freeData = data.free.map((free, i) => (
        <ProjectContainer>
            <SwiperSlide key={i}>
                <PortfolioContainer>
                    <ImageContainer href={free.url}>
                        <PortfolioImage src={free.image} alt="" />
                    </ImageContainer>
                    <TextContainer>
                        <PortfolioTitle>{free.title}</PortfolioTitle>
                        <PortfolioText>{free.description}</PortfolioText>
                        <Button link href={free.url}>Demo</Button>
                    </TextContainer>
                </PortfolioContainer>
            </SwiperSlide>
        </ProjectContainer>
    ));

    return (
        <Section data-aos="zoom-in-down">
            <Container>
                <SectionTitle>Portfolio</SectionTitle>

                <LinksContainer>
                    <Link onClick={() => setCategory("all")}>All</Link>
                    <Link onClick={() => setCategory("school")}>School</Link>
                    <Link onClick={() => setCategory("clone")}>Clones</Link>
                    <Link onClick={() => setCategory("free")}>Freelance</Link>
                </LinksContainer>

                <CarouselContainer>
                    <Swiper
                        loop='true'
                        navigation={{
                            nextEl: navigationNextRef.current,
                            prevEl: navigationPrevRef.current
                        }}
                        onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                                // Override prevEl & nextEl now that refs are defined
                                swiper.params.navigation.prevEl = navigationPrevRef.current
                                swiper.params.navigation.nextEl = navigationNextRef.current

                                // Re-init navigation
                                swiper.navigation.destroy()
                                swiper.navigation.init()
                                swiper.navigation.update()
                            })
                        }}
                        pagination={{ clickable: true }}
                    >
                        {category === "all" && (
                            <div>
                                {cloneData}
                                {schoolData}
                                {freeData}
                            </div>
                        )}
                        {category === "school" && (
                            <div>
                                {schoolData}
                            </div>
                        )}
                        {category === "clone" && (
                            <div>
                                {cloneData}
                            </div>
                        )}
                        {category === "free" && (
                            <div>
                                {freeData}
                            </div>
                        )}
                    </Swiper>
                    <ArrowNext ref={navigationNextRef} className="swiper-button-next">
                        <SwiperPortfolioIcon>
                            &#10095;
                        </SwiperPortfolioIcon>
                    </ArrowNext>
                    <ArrowPrev ref={navigationPrevRef} className="swiper-button-prev">
                        <SwiperPortfolioIcon>
                            &#10094;
                        </SwiperPortfolioIcon>
                    </ArrowPrev>
                    <div className="swiper-pagination"></div>
                </CarouselContainer>
            </Container>
        </Section>
    );
};
