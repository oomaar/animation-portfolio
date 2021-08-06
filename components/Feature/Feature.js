import Typewriter from 'typewriter-effect';
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
    const socialIcons = data.icons.map((icon, i) => (
        <SocialIcon key={i} href={icon.url}>
            <i className={icon.class}></i>
        </SocialIcon>
    ));

    return (
        <Section id="feature">
            <Container>
                <SubContainer>
                    <Greating>Hi there,</Greating>
                    <Title>I am <span>{data.name}</span></Title>
                    <Writer>
                        <Typewriter
                            options={{
                                strings: ["Frontend Developer", "Web Designer", "Web Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Writer>
                    <Bio>{data.bio}</Bio>
                    <Button href="#">Hire me</Button>

                    <Social>
                        {socialIcons}
                    </Social>
                </SubContainer>
                <ImageContainer>
                    <img src="/feature.png" />
                </ImageContainer>
            </Container>
        </Section>
    );
};
