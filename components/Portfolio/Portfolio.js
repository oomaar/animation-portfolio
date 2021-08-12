import { useState } from "react";
import { Button, Section, SectionTitle } from "../../Global/GlobalStyle";
import {
    Container,
    PortfolioContainer,
    PortfolioNav,
    PortfolioItem,
    PortfolioContent,
    Image,
    PortfolioData,
    PortfolioSubtitle,
    Title,
} from "./styledPortfolio";

export const Portfolio = ({ data }) => {
    const [activeData, setActiveData] = useState("all");
    const handleActiveData = name => setActiveData(name);

    const cloneData = data.clone.map((project, i) => (
        <PortfolioContent key={i}>
            <a href={project.url}>
                <Image src={project.image} />
            </a>
            <PortfolioData>
                <PortfolioSubtitle>{project.description}</PortfolioSubtitle>
                <Title>{project.title}</Title>
                <Button href={project.url}>Demo</Button>
            </PortfolioData>
        </PortfolioContent>
    ));

    const freeData = data.free.map((project, i) => (
        <PortfolioContent key={i}>
            <a href={project.url}>
                <Image src={project.image} />
            </a>
            <PortfolioData>
                <PortfolioSubtitle>{project.description}</PortfolioSubtitle>
                <Title>{project.title}</Title>
                <Button href={project.link}>Demo</Button>
            </PortfolioData>
        </PortfolioContent>
    ));

    const schoolData = data.school.map((project, i) => (
        <PortfolioContent key={i}>
            <a href={project.url}>
                <Image src={project.image} />
            </a>
            <PortfolioData>
                <PortfolioSubtitle>{project.description}</PortfolioSubtitle>
                <Title>{project.title}</Title>
                <Button href={project.url}>Demo</Button>
            </PortfolioData>
        </PortfolioContent>
    ));

    return (
        <Section data-aos="zoom-in-down" id="portfolio">
            <Container>
                <SectionTitle>Portfolio</SectionTitle>

                <PortfolioNav>
                    <PortfolioItem onClick={() => handleActiveData("all")}>All</PortfolioItem>
                    <PortfolioItem onClick={() => handleActiveData("clones")}>Clones</PortfolioItem>
                    <PortfolioItem onClick={() => handleActiveData("freelance")}>Freelance</PortfolioItem>
                    <PortfolioItem onClick={() => handleActiveData("school")}>School</PortfolioItem>
                </PortfolioNav>

                <PortfolioContainer>
                    {activeData === "all" && (
                        <>
                            {cloneData}
                            {freeData}
                            {schoolData}
                        </>
                    )}
                    {activeData === "clones" && cloneData}
                    {activeData === "freelance" && freeData}
                    {activeData === "school" && schoolData}
                </PortfolioContainer>
            </Container>
        </Section>
    );
};
