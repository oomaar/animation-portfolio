import { Button, Section, SectionTitle } from "../../Global/GlobalStyle";
import {
    Container,
    ContactContainer,
    ContactContent,
    ContactBox,
    ContactIcon,
    ContactTitle,
    ContactText,
    ContactSocial,
    ContactForm,
    ContactInputs,
    Input,
    TextArea,
} from "./styledContact";

export const Contact = ({ data }) => {
    return (
        <Section data-aos="zoom-in-down" id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>

                <ContactContainer>
                    <ContactContent>
                        <ContactBox>
                            <ContactIcon>
                                <i className="uil uil-estate"></i>
                            </ContactIcon>
                            <ContactTitle>Location</ContactTitle>
                            <ContactText>{data.location}</ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <i className="uil uil-envelope"></i>
                            </ContactIcon>
                            <ContactTitle>Email</ContactTitle>
                            <ContactText>{data.email}</ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <i className="uil uil-phone"></i>
                            </ContactIcon>
                            <ContactTitle>Phone</ContactTitle>
                            <ContactText>{data.phone}</ContactText>
                        </ContactBox>

                        <ContactBox>
                            <ContactIcon>
                                <i className="uil uil-comment"></i>
                            </ContactIcon>
                            <ContactTitle>Chat</ContactTitle>
                            <div>
                                <ContactSocial href="#">
                                    <i className="uil uil-whatsapp"></i>
                                </ContactSocial>
                                <ContactSocial href="#">
                                    <i className="uil uil-telegram-alt"></i>
                                </ContactSocial>
                                <ContactSocial href="#">
                                    <i className="uil uil-facebook-messenger-alt"></i>
                                </ContactSocial>
                            </div>
                        </ContactBox>
                    </ContactContent>

                    <ContactForm>
                        <ContactInputs>
                            <Input type="text" placeholder="Name" />
                            <Input type="email" placeholder="Email" />
                        </ContactInputs>

                        <ContactInputs>
                            <Input type="text" placeholder="Project" />
                            <Input type="text" placeholder="Phone Number" />
                        </ContactInputs>

                        <TextArea cols="0" rows="7" placeholder="Message"></TextArea>

                        <Button type="submit">Send Message</Button>
                    </ContactForm>
                </ContactContainer>
            </Container>
        </Section>
    );
};
