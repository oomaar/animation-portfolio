import { useState } from "react";
// import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
// import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import {
    Container,
    HeaderTag,
    Nav,
    Logo,
    NavList,
    NavClose,
    ListItem,
    NavLink,
    NavIcon,
    NavMenu,
    NavBtns,
    ChangeTheme,
    NavToggle,
} from "./styledHeader";

export const Header = ({ data, name }) => {
    const [shadow, setShadow] = useState(false);
    const [toggleShow, setToggleShow] = useState(false);

    const toggleHeaderOpen = () => setToggleShow(true);
    const toggleHeaderClose = () => setToggleShow(false);
    const showShadow = () => window.scrollY > 100 ? setShadow(true) : setShadow(false);
    const activeLink = () => toggleHeaderClose();

    const navLinks = data.map(link => {
        return (
            <ListItem key={link.id}>
                <NavLink
                    href={link.href} onClick={() => activeLink(link.href)}
                    to={link.section}
                    smooth={true}
                    duration={50}
                    spy={true}
                    exact="true"
                    offset={-50}
                    activeClass="active-link"
                >
                    <NavIcon>
                        <i className={link.icon}></i>
                    </NavIcon>
                    {link.name}
                </NavLink>
            </ListItem>
        );
    });

    return (
        <HeaderTag shadow={shadow}>
            <Container>
                <Nav>
                    <Logo>{name}</Logo>

                    <NavMenu toggleShow={toggleShow}>
                        <NavList>
                            {navLinks}
                        </NavList>
                        <NavClose>
                            <i className="uil uil-times" onClick={toggleHeaderClose}></i>
                        </NavClose>
                    </NavMenu>

                    <NavBtns>
                        {/* <ChangeTheme>
                            {toggleTheme === 'light' ? (
                                <UilMoon onClick={checkTheme} />
                            ) : (
                                <UilSun onClick={checkTheme} />
                            )}
                        </ChangeTheme> */}
                        <NavToggle>
                            <i className="uil uil-align-left" onClick={toggleHeaderOpen}></i>
                        </NavToggle>
                    </NavBtns>
                </Nav>
            </Container>
        </HeaderTag>
    );
};
