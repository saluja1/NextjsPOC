import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Autoplay, Navigation, Pagination]);

import HomepageSliderDesign from "./HomepageSliderDesign";
import { GetDataServiceFuntion } from "../service/ServiceFuntions";


const HomePageSlider = props => {
    const [apidata, setApiData] = useState(props.carousalData.data)

    function handleMouseOver(){
		document.querySelector(".bannerSlider").swiper.autoplay.stop();
    }

    function handleMouseOut(){
	    document.querySelector(".bannerSlider").swiper.autoplay.start();
    }

    return (
    	<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
	    	<Swiper
				observer= {true}
				observeParents= {true}
				parallax={true}
	    		className="bannerSlider"
				pagination={{"clickable": true}}
		      	slidesPerView={1}
		      	onSlideChange={() => console.log('')}
		    	onSwiper={(swiper) => console.log('')}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true
				}}
		    >
				{apidata.map( (data, index) => <SwiperSlide key={index}> <HomepageSliderDesign sliderData={data} /> </SwiperSlide>)}
    		</Swiper>
	    </div>
)};

export default HomePageSlider;
