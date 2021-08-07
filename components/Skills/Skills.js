import { Section, SectionTitle } from "../../Global/GlobalStyle";
import { SkillsContainer } from "./styledSkills";
import { iconsData } from "../../data/icons";

export const Skills = () => {
    return (
        <Section data-aos="zoom-in-down" id="skills">
            <SkillsContainer>
                <SectionTitle>Skills</SectionTitle>
                {iconsData()}
            </SkillsContainer>
        </Section>
    );
};
