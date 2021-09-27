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

const PostSliderContainer = styled.section`
    width: 95%;
    margin: 0 auto;
    position: relative;
`

const Index = () => {

    return <Layout>
        <section className="homePageSlider"> 
          <HomePageSlider apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=carousel" />
        </section>
        <PostSliderContainer> 
          <PostSlider sectionTitle="Trending"  apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=" postPerSlide="4" />        
        </PostSliderContainer>  
        <PostSliderContainer> 
          <PostSlider sectionTitle="Premium" apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=premium" postPerSlide="6"/>
        </PostSliderContainer>  
        <PostSliderContainer> 
          <PostSlider sectionTitle="Latest" apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=" postPerSlide="6"/>        
        </PostSliderContainer>
   </Layout>
};

export default Index;
