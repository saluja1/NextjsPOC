import Link from "next/link";
import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';

import SliderUnit from "./SliderUnit";
import styles from "../styles/PostCarousal.module.css";
import styled from 'styled-components';

import { GetDataServiceFuntion } from "../service/ServiceFuntions";

const PostSectionHeadingContainer = styled.div`
    margin: 2% auto;
`;

const PostSectionHeading = styled.div`
    font-family: Open Sans,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 34px;
    color: #fff;
`;

const PostSectionViewMore = styled.span`
    float: right;
    color: #fff;
    font-family: Open Sans,sans-serif;
    font-weight: 600;
    font-size: 14px;
    margin-top: -2%;
    border-bottom: 1px solid #fff;
    cursor: pointer;
`;

const PostSectionUnderline = styled.div`
    background-color: #fee000;
    width: 3.5%;
    margin: 1% 0;
    height: 6px;
    color: #fee000;
    border: 0;
`;

SwiperCore.use([Autoplay, Navigation, Pagination]);

const PostSlider = props => {
    const [apidata, setApiData] = useState([])
    useEffect(() => {
		const sliderData = GetDataServiceFuntion(props.apiUrl);
		sliderData.then(x => setApiData(x.data))
    }, []);

    return (
    	<>
			<PostSectionHeadingContainer>
				<PostSectionHeading>{props.sectionTitle}</PostSectionHeading>
		  		<Link href={`/post/${(props.sectionTitle).toLowerCase()}`}>
					<PostSectionViewMore>View More</PostSectionViewMore>
				</Link>	
				<PostSectionUnderline />
			</PostSectionHeadingContainer>
    	    <button className={`${props.sectionTitle}swiperButtonPrev ${styles.prevbtn}`}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
	        <button className={`${props.sectionTitle}swiperButtonNext ${styles.nextbtn}`}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>

		    <Swiper
			    className={`${props.sectionTitle}Swiper`}
		        slidesPerView={props.postPerSlide}
				navigation={{nextEl: `.${props.sectionTitle}swiperButtonNext`,
					prevEl: `.${props.sectionTitle}swiperButtonPrev` }}
		        onSlideChange={() => console.log('slide change')}
		        onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
				    // when window width is >= 640px
				    320: {
				      width: 320,
				      slidesPerView: 1,
				    },
				    480: {
				      width: 480,
				      slidesPerView: 2,
				    },
				    640: {
				      width: 640,
				      slidesPerView: 3,
				    },
				    // when window width is >= 768px
				    768: {
				      width: 768,
				      slidesPerView: 4,
				    },
				    991: {
				      width: 991,
				      slidesPerView: props.postPerSlide,
				    },
				    1366: {
				      width: 1366,
				      slidesPerView: props.postPerSlide,
				    },
				    1920: {
				      width: 1920,
				      slidesPerView: props.postPerSlide,
				    },
				  }}
		    >
				{apidata.map( (data, index) => <SwiperSlide key={index}> <SliderUnit sliderData={data} /> </SwiperSlide>)}
		    </Swiper>
	    </>
)};

export default PostSlider;