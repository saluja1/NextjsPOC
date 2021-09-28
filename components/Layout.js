import Head from "next/head";
import styled from 'styled-components';

import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = styled.div``

const MainContainer = styled.main`
  color: #fff;
`
const Layout = props => {
  const appTitle = `Nextjs POC`;

  return (
    <LayoutContainer className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>
      <Header appTitle={appTitle} />
      <MainContainer className="Content">
        {props.children}  
      </MainContainer>
      <Footer appTitle={appTitle} />
    </LayoutContainer>
  );
};

export default Layout;