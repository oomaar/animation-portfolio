import { useEffect, useState } from "react";
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

export const Header = ({ data, name, toggleTheme, setToggleTheme }) => {
    const [shadow, setShadow] = useState(false);
    const [toggleShow, setToggleShow] = useState(false);

    const toggleHeaderOpen = () => setToggleShow(true);
    const toggleHeaderClose = () => setToggleShow(false);
    const showShadow = () => window.scrollY > 100 ? setShadow(true) : setShadow(false);
    const activeLink = () => toggleHeaderClose();

    const checkTheme = () => {
        switch (toggleTheme) {
            case "light":
                setToggleTheme("dark");
                localStorage.setItem("toggleTheme", "dark")
                return document.documentElement.setAttribute("data-theme", "dark");

            case "dark":
                setToggleTheme("light");
                localStorage.setItem("toggleTheme", "light")
                return document.documentElement.setAttribute("data-theme", "light");

            default:
                setToggleTheme("light");
                localStorage.setItem("toggleTheme", "light")
                return document.documentElement.setAttribute("data-theme", "light");
        };
    };

    useEffect(() => {
        if (localStorage.getItem("toggleTheme")) {
            setToggleTheme(localStorage.getItem("toggleTheme"));
            document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        } else {
            checkTheme(null);
        };
    });

    useEffect(() => {
        window.addEventListener("scroll", showShadow);
    }, []);

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
                    offset={-30}
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
                        <ChangeTheme>
                            {toggleTheme === 'light' ? (
                                <i className="uil uil-moon" onClick={checkTheme}></i>
                            ) : (
                                <i className="uil uil-sun" onClick={checkTheme}></i>
                            )}
                        </ChangeTheme>
                        <NavToggle>
                            <i className="uil uil-align-left" onClick={toggleHeaderOpen}></i>
                        </NavToggle>
                    </NavBtns>
                </Nav>
            </Container>
        </HeaderTag>
    );
};
