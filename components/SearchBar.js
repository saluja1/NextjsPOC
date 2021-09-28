import React, { useEffect, useState } from "react"

import Link from "next/link";
import styled from 'styled-components';

import styles from "../styles/PostPage.module.css";
import { GetDataServiceFuntion } from "../service/ServiceFuntions";

import SliderUnit from "../components/SliderUnit";

const SearchInput = styled.input`
	width: 25%;
	min-width: 250px;
    border: 1px solid #000;
    border-radius: 30px;
    font-size: 16px;
    background-color: white;
    background-image: url(https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-24.png);
    background-position: 10px 7px;
    background-repeat: no-repeat;
    padding: 8px 20px 8px 40px;
    transition: width 0.8s ease-in-out;
    outline: none;
    opacity: 0.9;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%,0);
    z-index: 999;
    @media (max-width: 480px) {
    	top: 100px;
    }
`
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

const SearchBar = props => {
	const [apidata, setApiData] = useState([])
	const apiUrl="https://www.scoopwhoop.com/uns/api/v1/videos//?filter_type="
    const[filterData, setFilterData] = useState([])
    useEffect(() => {
		const sliderData = GetDataServiceFuntion(apiUrl);
		sliderData.then(x => { setApiData(x.data); setFilterData(x.data); } )

	}, []);

    function onChangeHandler(event){
		let filteredData = apidata.filter( f =>  JSON.stringify(f).includes(event.target.value) === true )
		setFilterData(filteredData);
    }

	return <>
		<br/><br/><br/><br/>
      <SearchInput type="text" id="searchInput" placeholder="Search.." onChange= {(e)=> onChangeHandler(e)} />
      <PostSectionHeadingContainer>
        <PostSectionHeading>Results</PostSectionHeading>
        <PostSectionUnderline />
      </PostSectionHeadingContainer>
      <section className={styles.PostContainer}> 
  			<AppLayout className={styles.appLayout}>
  				{filterData.map( (data, index) =>   <div key={index} className={styles.box}> <SliderUnit sliderData={data} /> </div> )}
  			</AppLayout>
      </section>  
	</>
};

export default SearchBar;
