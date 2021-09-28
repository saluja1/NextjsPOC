import React from 'react'
import Link from "next/link";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import styled from 'styled-components';

const PostSliderContainer = styled.section`
    width: 95%;
    margin: 0 auto;
    position: relative;
`

const Index = () => {
    return <Layout> <SearchBar /> </Layout>
};

export default Index;
