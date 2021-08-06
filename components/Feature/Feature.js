import Typewriter from 'typewriter-effect';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { Section } from '../../GlobalStyle';
import {
    Container,
    SubContainer,
    Greating,
    Title,
    Writer,
    Bio,
    Button,
    ImageContainer,
    Social,
    SocialIcon,
} from "./styledFeature";

export const Feature = ({ data }) => {
    return (
        <Section>
            <Container>
                <SubContainer>
                    <Greating>Hi there,</Greating>
                    <Title>I am <span>{data.name}</span></Title>
                    <Writer>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'Web Designer', 'Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Writer>
                    <Bio>{data.bio}</Bio>
                    <Button href="#">Hire me</Button>

                    <Social>
                        <SocialIcon href="https://github.com/oomaar">
                            <FiGithub />
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/in/omar-hassan-8b1869137">
                            <FaLinkedinIn />
                        </SocialIcon>
                        <SocialIcon href="https://www.facebook.com/omarhassan16694">
                            <FaFacebook />
                        </SocialIcon>
                    </Social>
                </SubContainer>
                <ImageContainer>
                    <img src="/feature.png" />
                </ImageContainer>
            </Container>
        </Section>
    );
};
