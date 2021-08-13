import { Button, Section } from "../../Global/GlobalStyle";
import {
    Container,
    ProjectBackground,
    ProjectContainer,
    ProjectData,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage,
} from "./styledProject";

export const Project = () => {
    return (
        <Section>
            <ProjectBackground>
                <Container>
                    <ProjectContainer>
                        <ProjectData>
                            <ProjectTitle>You have a new project !</ProjectTitle>
                            <ProjectSubtitle>
                                Contact me now and get a 30% discount on your new project.
                            </ProjectSubtitle>
                            <Button white href="#contact">
                                Contact Me
                            </Button>
                        </ProjectData>
                        <ProjectImage src="/project.png" />
                    </ProjectContainer>
                </Container>
            </ProjectBackground>
        </Section>
    );
};
