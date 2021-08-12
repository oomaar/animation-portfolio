import Typewriter from 'typewriter-effect';
import { Section, Button } from '../../Global/GlobalStyle';
import {
    Container,
    SubContainer,
    Greating,
    Title,
    Writer,
    Bio,
    ImageContainer,
    Social,
    SocialIcon,
    ScrollContainer,
    ScrollButton,
    ScrollMouse,
    ScrollButtonText,
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
                    <Button up href="#">Hire me</Button>

                    <Social>
                        {socialIcons}
                    </Social>

                    <ScrollContainer>
                        <ScrollButton href="#about">
                            <ScrollMouse>
                                <i className="uil uil-mouse-alt"></i>
                            </ScrollMouse>
                            <ScrollButtonText> Scroll down </ScrollButtonText>
                            <i className="uil uil-arrow-down"></i>
                        </ScrollButton>
                    </ScrollContainer>
                </SubContainer>
                <ImageContainer>
                    <img src="/feature.png" />
                </ImageContainer>
            </Container>
        </Section>
    );
};
