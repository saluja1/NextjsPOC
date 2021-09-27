import React, { useEffect, useState } from "react"
import styled from 'styled-components';

import styles from "../styles/BannerCarousal.module.css";

const SliderHeading = styled.h2`
    font-weight: 600;
    font-size: 24px;
`;

const ShadowEffect = styled.div`
	box-shadow: inset 0px 0px 300px 100px rgb(0 0 0 / 100%);
	position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
	@media (max-width: 767px) {
	    box-shadow: inset 0px 0px 50px 50px rgb(0 0 0 / 100%);
	}

	@media (max-width: 600px) {
	    box-shadow: inset 0px 0px 25px 25px rgb(0 0 0 / 100%);
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
    bottom: 10px;
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
