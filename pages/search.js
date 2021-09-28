import React from 'react'
import Link from "next/link";

import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import styled from 'styled-components';
import { GetDataServiceFuntion } from "../service/ServiceFuntions";

const PostSliderContainer = styled.section`
    width: 95%;
    margin: 0 auto;
    position: relative;
`
const Index = (props) => {
    return <Layout> <br/><br/><br/><br/> <SearchBar apiData={props.allData} /> </Layout>
};

export async function getServerSideProps(context) {
  let allDataApi = "https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=";
  let allData;

  try {
    allData =  await GetDataServiceFuntion(allDataApi);
  } catch (error) {
    allData = error.message; 
  }
  return { props: { allData} }
}

export default Index;
