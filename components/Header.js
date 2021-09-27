import React, { useEffect, useState } from "react"

import {headerNavButtons} from "../service/navigationMenus";
import NavBar from "./NavBar";

const Header = props => {
	 useEffect(() => {
	    window.onscroll = () => {
	    	if (window.scrollY > document.querySelector("header nav").offsetHeight) {
				document.querySelector("header nav").style.backgroundColor = "#111"
	    	} else {
				document.querySelector("header nav").style.backgroundColor = "transparent"
	    	}
	    }
	  }, []);

  	return <header>
   	    <nav className="NavBar">
		  <NavBar type="header" navButtons={headerNavButtons} />
		</nav>  
	</header>  
};

export default Header;
