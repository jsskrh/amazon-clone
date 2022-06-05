import React, { useRef, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import flags from "flag-icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SideMenu from "./SideMenu";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ cart, user }, dispatch] = useStateValue();

  const [headerOverlayVisible, setHeaderOverlayVisibility] = useState(false);
  const [sideMenuVisible, setSideMenuVisibility] = useState(false);

  const handleHeaderOverlayToggle = (state) => {
    if (state === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setHeaderOverlayVisibility(state);
  };

  const handleSideMenuToggle = (state) => {
    if (state === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    setSideMenuVisibility(state);
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-top">
          <Link to="/">
            <div className="header-option logo-option">
              <img
                className="header-logo"
                alt="Amazon logo"
                src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
              />
            </div>
          </Link>

          <Link to={"#"}>
            <div className="header-option nav-location">
              <LocationOnIcon className="nav-location-icon" />
              <div className="nav-location-body">
                <span className="line-one">
                  {user ? "Deliver to Guest" : "Hello"}
                </span>
                <span className="nav-address-container line-two">
                  {user ? (
                    <span>
                      <span className="nav-address">Satellite Town</span>
                      <span className="nav-postal-code">102262</span>
                    </span>
                  ) : (
                    "Select your address"
                  )}
                </span>
              </div>
            </div>
          </Link>

          <div className="header-search">
            <form className="search-bar-container">
              <div className="nav-left">
                <div className="category-selector-container">
                  <span className="category-placeholder">All</span>
                  <ArrowDropDownIcon className="dropdown-arrow" />
                  <select className="category-select">
                    <option selected="selected" value="search-alias=aps">
                      All Departments
                    </option>
                    <option value="search-alias=arts-crafts-intl-ship">
                      Arts & Crafts
                    </option>
                    <option value="search-alias=automotive-intl-ship">
                      Automotive
                    </option>
                    <option value="search-alias=baby-products-intl-ship">
                      Baby
                    </option>
                    <option value="search-alias=beauty-intl-ship">
                      Beauty &amp; Personal Care
                    </option>
                    <option value="search-alias=stripbooks-intl-ship">
                      Books
                    </option>
                    <option value="search-alias=fashion-boys-intl-ship">
                      Boys' Fashion
                    </option>
                    <option value="search-alias=computers-intl-ship">
                      Computers
                    </option>
                    <option value="search-alias=deals-intl-ship">Deals</option>
                    <option value="search-alias=digital-music">
                      Digital Music
                    </option>
                    <option value="search-alias=electronics-intl-ship">
                      Electronics
                    </option>
                    <option value="search-alias=fashion-girls-intl-ship">
                      Girls' Fashion
                    </option>
                    <option value="search-alias=hpc-intl-ship">
                      Health &amp; Household
                    </option>
                    <option value="search-alias=kitchen-intl-ship">
                      Home &amp; Kitchen
                    </option>
                    <option value="search-alias=industrial-intl-ship">
                      Industrial &amp; Scientific
                    </option>
                    <option value="search-alias=digital-text">
                      Kindle Store
                    </option>
                    <option value="search-alias=luggage-intl-ship">
                      Luggage
                    </option>
                    <option value="search-alias=fashion-mens-intl-ship">
                      Men's Fashion
                    </option>
                    <option value="search-alias=movies-tv-intl-ship">
                      Movies &amp; TV
                    </option>
                    <option value="search-alias=music-intl-ship">
                      Music, CDs &amp; Vinyl
                    </option>
                    <option value="search-alias=pets-intl-ship">
                      Pet Supplies
                    </option>
                    <option value="search-alias=instant-video">
                      Prime Video
                    </option>
                    <option value="search-alias=software-intl-ship">
                      Software
                    </option>
                    <option value="search-alias=sporting-intl-ship">
                      Sports &amp; Outdoors
                    </option>
                    <option value="search-alias=tools-intl-ship">
                      Tools &amp; Home Improvement
                    </option>
                    <option value="search-alias=toys-and-games-intl-ship">
                      Toys &amp; Games
                    </option>
                    <option value="search-alias=videogames-intl-ship">
                      Video Games
                    </option>
                    <option value="search-alias=fashion-womens-intl-ship">
                      Women's Fashion
                    </option>
                  </select>
                </div>
              </div>
              <div className="nav-fill">
                <input className="header-search-input" type="text" />
              </div>
              <div className="nav-right">
                <SearchIcon className="header-search-icon" />
              </div>
            </form>
          </div>
          <div className="header-nav">
            <Link
              to={"#"}
              onMouseEnter={() => handleHeaderOverlayToggle(true)}
              onMouseLeave={() => handleHeaderOverlayToggle(false)}
            >
              <div className="header-option nav-language-selector">
                <span className="line-one hidden-line">-</span>
                <span className="line-two">
                  <span class="fi fi-us"></span>
                  <ArrowDropDownIcon className="arrow-down" />
                </span>
              </div>
            </Link>

            <Link
              to={!user && "/login"}
              onClick={handleAuthentication}
              onMouseEnter={() => handleHeaderOverlayToggle(true)}
              onMouseLeave={() => handleHeaderOverlayToggle(false)}
            >
              <div className="header-option">
                <span className="line-one">
                  Hello, {user ? "Guest" : "Sign in"}
                </span>
                <span className="line-two account-arrow-container">
                  Account & Lists
                  <ArrowDropDownIcon className="arrow-down account-arrow" />
                </span>
              </div>
            </Link>

            <Link to="/orders">
              <div className="header-option">
                <span className="line-one">Returns</span>
                <span className="line-two">& Orders</span>
              </div>
            </Link>

            <Link to="/checkout">
              <div className="header-basket header-option">
                <div className="cart-container">
                  <div className="cart-container-inner">
                    <ShoppingCartIcon className="cart-icon" />
                    <span className="header-cart-count">{cart?.length}</span>
                  </div>
                </div>
                <span className="line-one hidden-line">-</span>
                <span className="line-two header-cart-label">Cart</span>
              </div>
              {/* <div className="header-basket-container">
          </div> */}
            </Link>
          </div>
        </div>

        <div className="header-bottom">
          <div className="nav-left">
            <div
              className="header-bottom-option"
              onClick={() => handleSideMenuToggle(true)}
            >
              <MenuIcon />
              <span>All</span>
            </div>
          </div>
          <div className="nav-fill">
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Today's Deals</span>
              </div>
            </Link>
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Buy Again</span>
              </div>
            </Link>
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Gift Cards</span>
              </div>
            </Link>
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Guest's Amazon.com</span>
              </div>
            </Link>
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Customer Service</span>
              </div>
            </Link>
            <Link
              to={"#"}
              onMouseEnter={() => handleHeaderOverlayToggle(true)}
              onMouseLeave={() => handleHeaderOverlayToggle(false)}
            >
              <div className="header-bottom-option history-option">
                <span>
                  Browsing History
                  <ArrowDropDownIcon className="arrow-down history-arrow" />
                </span>
              </div>
            </Link>
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Registry</span>
              </div>
            </Link>
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Sell</span>
              </div>
            </Link>
          </div>
          <div className="nav-right">
            <Link to={"#"}>
              <div className="header-bottom-option">
                <span>Shop Father's Day Gifts</span>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={
            sideMenuVisible
              ? "nav-side-menu side-menu-visible"
              : "nav-side-menu"
          }
        >
          <SideMenu />
          <CloseIcon
            className="close-icon"
            onClick={() => handleSideMenuToggle(false)}
          />
          <div
            className="side-menu-overlay"
            onClick={() => handleSideMenuToggle(false)}
          ></div>
        </div>

        <div
          className={
            headerOverlayVisible
              ? "header-overlay header-overlay-visible"
              : "header-overlay"
          }
        ></div>
      </div>
    </div>
  );
}

export default Header;
