import { Section, SectionTitle, Button } from "../../Global/GlobalStyle";
import {
    Container,
    SubContainer,
    AboutMe,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Section id="about">
            <Container>
                <SectionTitle>About</SectionTitle>
                <AboutMe>{data.description}</AboutMe>
                <SubContainer>
                    <Button download="" href="#">
                        Download My Resume
                    </Button>
                </SubContainer>
            </Container>
        </Section>
    );
};
