import React, { useEffect, useState } from "react"
import styles from "../styles/PostCarousal.module.css";
import styled from 'styled-components';

const SliderItemContainer = styled.div`
    position: relative;
`
const SliderItemImage = styled.img`
    width: 97.5%;
    transition: transform .3s; /* Animation */
    border-radius: 5px;
	:hover{
    	transform: scale(1.1);
    	z-index: 3;
	}
`;
const SliderItemContent = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0%);
    text-shadow: 1px 1px 3px #000;
    z-index: 2;
    width: 90%;
    color: #fff;
`

const SliderUnit = props => {
    return (
		<SliderItemContainer> 
	        <div className="">
			    {props.sliderData.premium === true &&
					<i className={`fa fa-gem ${styles.pIcon}`}></i>
			    }
	          	<SliderItemImage src={props.sliderData.video_thumbnail_9x16} alt={props.sliderData.title} />
				<SliderItemContent>
		          <h4>
		            {props.sliderData.title}
		          </h4>
		        </SliderItemContent>  
	        </div>

		 </SliderItemContainer>
)};

export default SliderUnit;