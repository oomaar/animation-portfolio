import { RiHtml5Fill } from "react-icons/ri";
import { SiCss3, SiJavascript, SiFirebase, SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Icon, IconsContainer } from "../components/Skills/styledSkills";

export const iconsData = () => (
    <IconsContainer>
        <Icon>
            <RiHtml5Fill />
        </Icon>
        <Icon>
            <SiCss3 />
        </Icon>
        <Icon>
            <SiJavascript />
        </Icon>
        <Icon>
            <FaReact />
        </Icon>
        <Icon>
            <SiRedux />
        </Icon>
        <Icon>
            <FiGithub />
        </Icon>
        <Icon>
            <BiGitBranch />
        </Icon>
        <Icon>
            <SiFirebase />

        </Icon>
        <Icon>
            <FaNodeJs />
        </Icon>
        <Icon>
            <DiMongodb />
        </Icon>
    </IconsContainer>
);