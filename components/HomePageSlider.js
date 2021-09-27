import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';

import HomepageSliderDesign from "./HomepageSliderDesign";
import { GetDataServiceFuntion } from "../service/ServiceFuntions";


SwiperCore.use([Autoplay, Navigation]);

const HomePageSlider = props => {
    const [apidata, setApiData] = useState([])
    useEffect(() => {	
		const sliderData = GetDataServiceFuntion(props.apiUrl);
		sliderData.then(x => setApiData(x.data))
    }, []);

    return (
    	<div>
	    	<Swiper
		      	slidesPerView={1}
				navigation={{nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'}}
		      	onSlideChange={() => console.log('slide change')}
		    	onSwiper={(swiper) => console.log(swiper)}
			  	autoplay={{delay: 200000}}
		    >
				{apidata.map( (data, index) => <SwiperSlide key={index}> <HomepageSliderDesign sliderData={data} /> </SwiperSlide>)}
    		</Swiper>
	    </div>

)};

export default HomePageSlider;
