import { Section, SectionTitle } from "../../GlobalStyle";
import {
    Container,
    SubContainer,
    AboutMe,
    Button,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Section>
            <Container>
                <SubContainer>
                    <SectionTitle>About</SectionTitle>
                </SubContainer>
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
