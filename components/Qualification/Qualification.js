import { Section, SectionTitle } from "../../Global/GlobalStyle";
import {
    Container,
    QualificationContainer,
    QualificationTitle,
    QualificationIcon,
    QualificationGrid,
    QualificationSubcontainer,
    QualificationArea,
    QualificationBox,
    QualificationWork,
    QualificationSmallIcon,
} from './styledQualification';

export const Qualification = ({ data }) => {
    const workData = data.work.map(work => (
        <QualificationSubcontainer key={work.id}>
            <QualificationArea>{work.title}</QualificationArea>
            <QualificationBox>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-briefcase-alt"></i>
                    </QualificationSmallIcon>
                    {work.subtitle}
                </QualificationWork>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-calendar-alt"></i>
                    </QualificationSmallIcon>
                    {work.start} - {work.finish}
                </QualificationWork>
            </QualificationBox>
        </QualificationSubcontainer>
    ));

    const educationData = data.education.map(education => (
        <QualificationSubcontainer key={education.id}>
            <QualificationArea>{education.title}</QualificationArea>

            <QualificationBox>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-book-alt"></i>
                    </QualificationSmallIcon>
                    {education.subtitle}
                </QualificationWork>
                <QualificationWork>
                    <QualificationSmallIcon>
                        <i className="bx bx-calendar-alt"></i>
                    </QualificationSmallIcon>
                    {education.start} - {education.finish}
                </QualificationWork>
            </QualificationBox>
        </QualificationSubcontainer>
    ));

    return (
        <Section id="qualification" data-aos="zoom-in-down">
            <SectionTitle>Qualification</SectionTitle>

            <Container>
                <QualificationContainer>
                    <div>
                        <QualificationTitle>
                            <QualificationIcon>
                                <i className="bx bx-briefcase-alt"></i>
                            </QualificationIcon>
                            Work
                        </QualificationTitle>

                        <QualificationGrid>
                            {workData}
                        </QualificationGrid>
                    </div>

                    <div>
                        <QualificationTitle>
                            <QualificationIcon>
                                <i className="bx bx-book-bookmark"></i>
                            </QualificationIcon>
                            Education
                        </QualificationTitle>

                        <QualificationGrid>
                            {educationData}
                        </QualificationGrid>
                    </div>
                </QualificationContainer>
            </Container>
        </Section>
    );
};
