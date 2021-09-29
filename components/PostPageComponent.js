import Link from "next/link";
import styled from 'styled-components';

import SliderUnit from "./SliderUnit";
import styles from "../styles/PostPage.module.css";

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


const PostPageComponent = props => (
  <>
        <PostSectionHeadingContainer>
          <PostSectionHeading>{(props.postPageTitle).toUpperCase()}</PostSectionHeading>
          <PostSectionUnderline />
        </PostSectionHeadingContainer>
        <section className={styles.PostContainer}> 
          <AppLayout className={styles.appLayout}>
            {props.postPageData.data.map( (data, index) =>   <div key={index} className={styles.box}> <SliderUnit sliderData={data} /> </div> )}
          </AppLayout>
        </section>  
  </>

);

export default PostPageComponent;
