import Head from "next/head";
import styled from 'styled-components';
import { About, Feature } from "../components";
import resumeData from "../data/resumeData.json";

export default function Home() {
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

      <Main>
        <Feature data={resumeData.feature} />
        <About data={resumeData.about} />
      </Main>
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