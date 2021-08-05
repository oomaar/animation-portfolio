import Head from "next/head";
import styled from 'styled-components';
import { Feature } from "../components";

export default function Home() {
  return (
    <Application>
      <Head>
        <title>Omar's Portfolio | Digital Resume</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Main>
        <Feature />
      </Main>
    </Application>
  );
};

const Application = styled.div``;

const Main = styled.main`
  padding: 2rem 0 4rem;
  max-width: 768px;
  margin: 0 1.5rem;
  
  @media screen and (min-width: 768px) {
    padding: 6rem 0 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 350px) {
    margin: 0 1rem;
  }
`;