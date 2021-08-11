import { RiHtml5Fill } from "react-icons/ri";
import { SiCss3, SiJavascript, SiFirebase, SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Icon, IconsContainer, SkillTitle, SubContainer } from "../components/Skills/styledSkills";

export const iconsData = () => (
    <IconsContainer>
        <SubContainer>
            <Icon>
                <RiHtml5Fill />
            </Icon>
            <SkillTitle>HTML-5</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <SiCss3 />
            </Icon>
            <SkillTitle>CSS-3</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <SiJavascript />
            </Icon>
            <SkillTitle>Javascript-ES6</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <FaReact />
            </Icon>
            <SkillTitle>ReactJS</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <SiRedux />
            </Icon>
            <SkillTitle>Redux</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <FiGithub />
            </Icon>
            <SkillTitle>Gitub</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <BiGitBranch />
            </Icon>
            <SkillTitle>Git</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <SiFirebase />
            </Icon>
            <SkillTitle>Firebase</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <FaNodeJs />
            </Icon>
            <SkillTitle>NodeJS</SkillTitle>
        </SubContainer>
        <SubContainer>
            <Icon>
                <DiMongodb />
            </Icon>
            <SkillTitle>MongoDB</SkillTitle>
        </SubContainer>
    </IconsContainer>
);
