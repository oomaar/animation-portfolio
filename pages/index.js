import { useEffect, useState } from "react";
import Head from "next/head";
import styled, { ThemeProvider } from 'styled-components';
import { About, Feature, Skills, Qualification, Portfolio, Contact, ScrollUp, Header, Footer, Project } from "../components";
import resumeData from "../data/resumeData.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { darkTheme, GlobalStyle, lightTheme } from "../Global/GlobalStyle";

export default function Home() {
  const [show, setShow] = useState(false);
  const [toggleTheme, setToggleTheme] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const showScrollUpLink = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", showScrollUpLink);

    return () => window.removeEventListener("scroll", showScrollUpLink);
  }, []);

  return (
    <ThemeProvider theme={toggleTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Application>
        <Head>
          <title>Omar's Portfolio | Digital Resume</title>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          {/* UniIcons CDN */}
          <link
            rel="stylesheet"
            href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
          />
        </Head>

        <Main>
          <Header
            toggleTheme={toggleTheme}
            setToggleTheme={setToggleTheme}
            data={resumeData.header}
            name={resumeData.feature.name}
          />
          <Feature data={resumeData.feature} />
          <About data={resumeData.about} />
          <Skills />
          <Qualification data={resumeData.qualification} />
          <Project />
          <Portfolio data={resumeData.portfolio} />
          <Contact data={resumeData.contact} />
        </Main>
        <ScrollUp show={show} />
        <Footer data={resumeData.feature.icons} name={resumeData.feature.name} />
      </Application>
    </ThemeProvider>
  );
};

const Application = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyColor};
`;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  
  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 350px) {
    margin: 0 1rem;
  }
`;