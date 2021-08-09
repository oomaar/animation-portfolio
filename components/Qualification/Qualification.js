import { useState } from "react";
import { Section, SectionTitle } from "../../Global/GlobalStyle";
import {
    Container,
    Tabs,
    Button,
    Icon,
    Sections,
    Content,
    Data,
    Title,
    Subtitle,
    Calendar,
    Rounder,
    Line,
} from "./styledQualification";

export const Qualification = ({ data }) => {
    const [dataTarget, setDataTarget] = useState('education');
    const [active, setActive] = useState(true);

    const selectQualification = qualification => {
        if (qualification === 'education') {
            setDataTarget('education');
            setActive(true);
        };

        if (qualification === 'work') {
            setDataTarget('work')
            setActive(false);
        };
    };

    const educationLength = data.education.length - 1;
    const workLength = data.work.length - 1;

    const educationGrid = data.education.map((qualification, index) => (
        <Data key={index}>
            {qualification.id % 2 === 0 && (
                <>
                    <div></div>

                    <div>
                        <Rounder></Rounder>
                        {index !== educationLength && (
                            <Line></Line>
                        )}
                    </div>
                </>
            )}
            <div>
                <Title>{qualification.title}</Title>
                <Subtitle>{qualification.subtitle}</Subtitle>
                <Calendar>
                    <i className="uil uil-calendar-alt"></i>
                    {qualification.start} - {qualification.finish}
                </Calendar>
            </div>

            {qualification.id % 2 === 1 && (
                <div>
                    <Rounder></Rounder>
                    {index !== educationLength && (
                        <Line></Line>
                    )}
                </div>
            )}

            {(qualification.id === educationLength && (qualification.id % 2 === 1)) && (
                <div>
                    <Rounder></Rounder>
                </div>
            )}
        </Data>
    ));

    const workGrid = data.work.map((qualification, index) => (
        <Data key={index}>
            {qualification.id % 2 === 0 && (
                <>
                    <div></div>

                    <div>
                        <Rounder></Rounder>
                        {index !== workLength && (
                            <Line></Line>
                        )}
                    </div>
                </>
            )}

            <div>
                <Title>{qualification.title}</Title>
                <Subtitle>{qualification.subtitle}</Subtitle>
                <Calendar>
                    <i className="uil uil-calendar-alt"></i>
                    {qualification.start} - {qualification.finish}
                </Calendar>
            </div>

            {qualification.id % 2 === 1 && (
                <div>
                    <Rounder></Rounder>
                    {index !== workLength && (
                        <Line></Line>
                    )}
                </div>
            )}

            {(qualification.id === workLength && (qualification.id % 2 === 2)) && (
                <div>
                    <Rounder></Rounder>
                </div>
            )}
        </Data>
    ));

    return (
        <Section data-aos="zoom-in-down" id="qualification">
            <SectionTitle>Qualification</SectionTitle>
            <Container>
                <Tabs>
                    <Button
                        onClick={() => selectQualification('education')}
                        active={active}
                    >
                        <Icon>
                            <i className="uil uil-graduation-cap"></i>
                        </Icon>
                        Education
                    </Button>

                    <Button
                        onClick={() => selectQualification('work')}
                        active={!active}
                    >
                        <Icon>
                            <i className="uil uil-briefcase-alt"></i>
                        </Icon>
                        Work
                    </Button>
                </Tabs>

                <Sections>
                    <Content dataTarget={dataTarget === 'education'}>
                        {educationGrid}
                    </Content>

                    <Content dataTarget={dataTarget === 'work'}>
                        {workGrid}
                    </Content>
                </Sections>
            </Container>
        </Section>
    );
};
