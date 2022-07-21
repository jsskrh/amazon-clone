import React from "react";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/AccountMenu.css";
import { Link } from "react-router-dom";
import SideMenuListTitle from "./SideMenuListTitle";
import SideMenuListItem from "./SideMenuListItem";

function AccountMenu({ classes }) {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ cart, user }, dispatch] = useStateValue();

  /* const [menu, setMenu] = useState("");
  const [list, setList] = useState([]);

  const handleSideMenu = (target) => {
    setMenu(target);
  }; */

  /* const toggleList = (target) => {
    if (list.includes(target)) {
      const arr = list.filter((dropdown) => dropdown !== target);
      setList(arr);
    } else {
      setList([...list, target]);
    }
  }; */

  return (
    <div className={classes}>
      <div className="menu-customer-profile">
        <div className="side-header-top">
          <span className="link-container">
            <span className="link-text">Browse</span>
            <MenuIcon />
          </span>
        </div>
        <div className="side-header-bottom">
          <div className="customer-name-container">
            <div className="customer-name">
              <h2 className="top">Hello, {user ? "Guest" : "Sign-In"}</h2>
              <h2 className="bottom">Your Account</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="side-menu-content">
        <ul className="side-menu-lists main-menu">
          <SideMenuListTitle name="Your Orders" />
          <SideMenuListItem name="Track & Manage Your Orders" directLink />
          <SideMenuListItem name="Buy Again" directLink />
          <SideMenuListItem name="Returns & Replacements" directLink />
          <SideMenuListItem name="Shipping Rates & Policies" directLink />
          {user && <SideMenuListItem name="Customer Service" directLink />}
          <li className="side-menu-separator"></li>
          <SideMenuListTitle name="Your Account" />
          <SideMenuListItem name="Lists" directLink />
          <SideMenuListItem name="Recommendations" directLink />
          <SideMenuListItem name="Browsing History" directLink />
          <SideMenuListItem name="Prime Video Library" directLink />
          <SideMenuListItem name="Subscribe & Save" directLink />
          <SideMenuListItem name="Your Prime Membership" directLink />
          <SideMenuListItem name="Your Membership & Subscriptions" directLink />
          <SideMenuListItem name="See all account" directLink />
          <li className="side-menu-separator"></li>
          <SideMenuListTitle name="Help & Settings" />
          <SideMenuListItem name="English" logo={<LanguageIcon />} directLink />
          <SideMenuListItem
            name="United States"
            logo={<span class="fi fi-us"></span>}
            directLink
          />
          <SideMenuListItem
            name={user ? "Sign Out" : "Sign In"}
            link="/login"
            click={handleAuthentication}
            directLink
          />
          <li className="side-menu-separator"></li>
        </ul>
      </div>
    </div>
  );
}

export default AccountMenu;
