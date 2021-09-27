import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

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