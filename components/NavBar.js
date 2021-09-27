import React, { useEffect, useState } from "react"

import Link from "next/link";
import styled from 'styled-components';

import logo from "../public/logo.svg";
import NavButton from "./NavButton";

const Hamburger = styled.li`
  margin: 4%;
  opacity: 0.5;
  cursor: pointer;
  transition: opacity 0.25s linear;
  width: clamp(1.5rem, 2vw + 1.1rem, 6rem);
  height: clamp(2rem, 1.4vw + 1.7rem, 5rem);
  display: none;
  align-items: center;
	:hover {
	  opacity: 1;
	}
	div,
	div:after,
	div:before {
	  background-color: #fafafa;
	  border-radius: 10px;
	  width: clamp(1.5rem, 2vw + 1.1rem, 6rem);
	  height: clamp(0.2rem, 0.3vw + 0.1rem, 0.8rem);
	  transition: all 0.15s linear;
	}

	div:before,
	div:after {
	  content: "";
	  position: absolute;
	}

	div:before {
	  transform: translateY(-200%);
	}

	div:after {
	  transform: translateY(200%);
	}

	@media (max-width: 767px) {
	    display: flex;
	}
`;

const OverlayMenu = styled.div`
	  position: fixed;
	  width: 100%;
	  top: 0;
	  min-height: 100%;
	  background-color: #1a1a1a;
	  z-index: -1;
	  transform: translateY(-100%);
	  transition: all 0.5s ease-in-out;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;

		a {
		  text-decoration: none;
		  transition: opacity 0.2s linear;
		}

		a:hover {
		  opacity: 1;
		}

		li{
		  margin-bottom: 10px;
		  display: flex;
		}
`


const NavBar = props => {
    const[menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
    }, []);

    const hamburgerClickHandler = () => {
    	const hamburger = document.getElementById("hamburger");
		const menu = document.getElementById("overlay");
		if (!menuOpen) {
		  hamburger.classList.add("open");
		  menu.classList.add("openOverlayMenu");
		} else {
		  hamburger.classList.remove("open");
		  menu.classList.remove("openOverlayMenu");
		}
		setMenuOpen(!menuOpen);
    }


	return <>
	  	<ul className="menu">
			<Link href="/">
				<li className="logo">
					<a href=""> <img src='/logo.svg' alt='Header Logo' /> </a> 
				</li>
			</Link>

		    {props.navButtons.map(button => (
		      <NavButton
		        key={button.path}
		        path={button.path}
		        label={button.label}
		        button={button.button}
		        secondaryButton={button.secondaryButton}
		      />
		    ))}
		    { props.type == "header" && 
		    <Hamburger id="hamburger" onClick={hamburgerClickHandler}>
		      <div></div>
		    </Hamburger>	    
		    }
	    </ul>
	    { props.type == "header" &&
		  <OverlayMenu id="overlay">
		    {props.navButtons.map(button => (
		      <NavButton
		        key={button.path}
		        path={button.path}
		        label={button.label}
		        button={button.button}
		        secondaryButton={button.secondaryButton}
		      />
		    ))}
		  </OverlayMenu>
		}  
	</>
};

export default NavBar;
