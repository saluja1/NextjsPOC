import React from 'react'
import Link from "next/link";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HomePageSlider from "../components/HomePageSlider";
import PostSlider from "../components/PostSlider";
import styled from 'styled-components';
import { GetDataServiceFuntion } from "../service/ServiceFuntions";

const PostSliderContainer = styled.section`
    width: 95%;
    margin: 0 auto;
    position: relative;
`

const Index = (props) => {
    return <Layout>
        <section className="homePageSlider"> 
          <HomePageSlider carousalData={props.carousalData} apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=carousel" />
        </section>
        <PostSliderContainer> 
          <PostSlider sectionTitle="Trending" carousalData={props.allData} apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=" postPerSlide="4" />        
        </PostSliderContainer>  
        <PostSliderContainer> 
          <PostSlider sectionTitle="Premium" carousalData={props.premiumData} apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=premium" postPerSlide="6"/>
        </PostSliderContainer>  
        <PostSliderContainer> 
          <PostSlider sectionTitle="Latest" carousalData={props.allData} apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=" postPerSlide="6"/>        
        </PostSliderContainer>
   </Layout>
};

export async function getServerSideProps(context) {
  let carousalDataApi = "https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=carousel";
  let preminumDataApi = "https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=preminum";
  let allDataApi = "https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=";
  let carousalData;
  let preminumData;
  let allData;
  let finalData;

  try {
    carousalData =  await GetDataServiceFuntion(carousalDataApi);
    preminumData =  await GetDataServiceFuntion(carousalDataApi);
    allData =  await GetDataServiceFuntion(carousalDataApi);
    finalData = { carousalData, preminumData, allData};
  } catch (error) {
    finalData = error.message; 
  }
    return { props: {...finalData} }
}

export default Index;
