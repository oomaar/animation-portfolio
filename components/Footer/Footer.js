import {
    Container,
    FooterBackground,
    FooterSubContainer,
    FooterTitle,
    FooterSubTitle,
    FooterList,
    FooterLink,
    FooterCopy,
    FooterSocials,
    FooterSocial,
} from "./styledFooter";

export const Footer = ({ data, name }) => {
    const network = data.map((network) => {
        return (
            <FooterSocial key={network.name} href={network.url} target="_blank">
                <i className={network.class}></i>
            </FooterSocial>
        )
    });

    return (
        <Container>
            <FooterBackground>
                <Container>
                    <FooterSubContainer>
                        <div>
                            <FooterTitle>{name}</FooterTitle>
                            <FooterSubTitle>Frontend Developer</FooterSubTitle>
                        </div>

                        <FooterList>
                            <li>
                                <FooterLink href="#qualification">Qualification</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#portfolio">Portfolio</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#contact">Contact</FooterLink>
                            </li>
                        </FooterList>

                        <FooterSocials>
                            {network}
                        </FooterSocials>
                    </FooterSubContainer>
                </Container>
                <FooterCopy>&#169; All rights reserved</FooterCopy>
            </FooterBackground>
        </Container>
    );
};
