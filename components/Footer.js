import Link from "next/link";
import {footerNavButtons} from "../service/navigationMenus";
import NavBar from "./NavBar";
import SocialMediaBar from "./SocialMediaBar";


const Footer = props => (
  	<footer>
        <SocialMediaBar />
   	    <nav className="NavBar">
		  <NavBar type="footer" navButtons={footerNavButtons} />
		</nav>  
	</footer>  
);

export default Footer;
