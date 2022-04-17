import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
      />

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="line-one">Hello</span>
          <span className="line-two">Sign In</span>
        </div>

        <div className="header-option">
          <span className="line-one">Returns</span>
          <span className="line-two">& Orders</span>
        </div>

        <div className="header-option">
          <span className="line-one">Your</span>
          <span className="line-two">Prime</span>
        </div>

        <div className="header-basket">
          <ShoppingBasketIcon />
          <span className="line-two header-basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
