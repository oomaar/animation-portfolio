import { useEffect, useState } from "react";
import Head from "next/head";
import styled from 'styled-components';
import { About, Feature, Skills, Qualification, Portfolio, Contact, ScrollUp, Header } from "../components";
import resumeData from "../data/resumeData.json";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [show, setShow] = useState(false);

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
      <Header />

      <Main>
        <Feature data={resumeData.feature} />
        <About data={resumeData.about} />
        <Skills />
        <Qualification data={resumeData.qualification} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.contact} />
      </Main>
      <ScrollUp show={show} />
    </Application>
  );
};

const Application = styled.div``;

const Main = styled.main`
  max-width: 1024px;
  margin: 0 1.5rem;
  
  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 350px) {
    margin: 0 1rem;
  }
`;