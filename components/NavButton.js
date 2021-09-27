import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = props => (
  <Link href={props.path}>
    <li
      className={`NavButton item ${
        props.router.pathname === props.path ? "active "  : ""
      }`}
    >
      <a href="#" className={`Label ${
        props.button === true ? " button1" : ""
      }${
        props.secondaryButton === true ? " button2" : ""
      } `}>{props.label}</a>
    </li>
  </Link>
);

export default withRouter(NavButton);
