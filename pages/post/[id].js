import React, { useEffect, useState } from "react"
import styled from 'styled-components';

import Layout from "../../components/Layout";
import PostPageComponent from "../../components/PostPageComponent";

function Post(props) {
	const [catData, setCatData] = useState(props.data)

	return (<Layout>
      <div className="mt-80">
        <PostPageComponent postPageTitle={props.id} postPageData={catData} />
      </div>  
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