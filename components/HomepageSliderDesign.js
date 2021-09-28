import React, { useEffect, useState } from "react"
import styled from 'styled-components';

import styles from "../styles/BannerCarousal.module.css";

const SliderHeading = styled.h2`
    font-weight: 600;
    font-size: 24px;
	@media (max-width: 991px) {
	    font-size: 21px;
	}
	@media (max-width: 767px) {
	    font-size: 18px;
	}
	@media (max-width: 600px) {
	    font-size: 16px;
	}
`;

const ShadowEffect = styled.div`
	box-shadow: inset 0px 0px 400px 150px rgb(0 0 0 / 100%);
	position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
	@media (max-width: 767px) {
	    box-shadow: inset 0px 0px 200px 75px rgb(0 0 0 / 100%);
	}

	@media (max-width: 600px) {
	    box-shadow: inset 0px 0px 100px 37px rgb(0 0 0 / 100%);
	}

	@media (max-width: 480px) {
	    box-shadow: inset 0px 0px 0px 0px rgb(0 0 0 / 100%);
	}
`;

const SliderItemImage = styled.img`
  width: 100%;
`

const SliderItemContent = styled.div`
    position: absolute;
    left: 50%;
    bottom: 17.5%;
    transform: translate(-50%,0%);
    text-shadow: 1px 1px 3px #000;
    z-index: 2;
    width: 100%;
    text-align: center;
	@media all and (max-width: 480px) {
	    .sliderItemContent {
	        font-size: 12px;
	    }
	}
`
const SliderItem = styled.div`
  color: #fff;
`

const SliderUnit = props => {
    return (
		<> 
	        <SliderItem>
	        	<ShadowEffect></ShadowEffect>
	          	<SliderItemImage src={props.sliderData.feature_img} alt={props.sliderData.title} />
				<SliderItemContent>
		          <SliderHeading>
				    {props.sliderData.premium === true &&
						<i className={`fa fa-gem ${styles.pIcon}`}></i>
				    }
		            {props.sliderData.title}
		          </SliderHeading>
		          <div>
		            <a className="button1 button2">Visit Video</a>
		          </div>
		        </SliderItemContent>  
	        </SliderItem>
		</>
)};

export default SliderUnit;