import React, { useEffect, useState } from "react"

import Layout from "../../components/Layout";
import PostSlider from "../../components/PostSlider";
import SliderUnit from "../../components/SliderUnit";

import styles from "../../styles/PostPage.module.css";

import styled from 'styled-components';

import { GetDataServiceFuntion } from "../../service/ServiceFuntions";

const AppLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 991px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 420px) {
      grid-template-columns: 1fr;
    }

`;


const PostSectionHeadingContainer = styled.div`
    margin: 2% auto;
    padding: 20px;
`;

const PostSectionHeading = styled.div`
    font-family: Open Sans,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 34px;
    color: #fff;
`;

const PostSectionUnderline = styled.div`
    background-color: #fee000;
    width: 3.5%;
    margin: 1% 0;
    height: 6px;
    color: #fee000;
    border: 0;
`;

function Post(props) {
	const [catData, setCatData] = useState(props.data)

	return (<Layout>
		<br/><br/><br/><br/>
      <PostSectionHeadingContainer>
        <PostSectionHeading>{(props.id).toUpperCase()}</PostSectionHeading>
        <PostSectionUnderline />
      </PostSectionHeadingContainer>
      <section className={styles.PostContainer}> 
  			<AppLayout className={styles.appLayout}>
  				{catData.data.map( (data, index) =>   <div key={index} className={styles.box}> <SliderUnit sliderData={data} /> </div> )}
  			</AppLayout>
      </section>  
	</Layout>
)}


export async function getServerSideProps(context) {

  const { id } = context.query;
	let data;
  try {
	  const res = await fetch(`https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type=${id}`)
  	  data = await res.json();
  	  if (data.status == 0) {
		  const res = await fetch(`https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type`)
        data = await res.json()
  	  }
  } catch (error) {
    data = error.message; 
  }
  return { props: { data, id} }
}

export default Post