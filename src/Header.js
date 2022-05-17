import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          alt="Amazon logo"
          src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
        />
      </Link>

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"} onClick={handleAuthentication}>
          <div className="header-option">
            <span className="line-one">Hello {user && "Guest"}</span>
            <span className="line-two">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="line-one">Returns</span>
          <span className="line-two">& Orders</span>
        </div>

        <div className="header-option">
          <span className="line-one">Your</span>
          <span className="line-two">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="line-two header-basket-count">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
