import React from "react";
import "./Checkout.css";
import CheckoutRecommendation from "./CheckoutRecommendation";
import Subtotal from "./Subtotal";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-top">
        <div className="checkout-left">
          <div className="cart container">
            <div className="body">
              <div className="unempty-cart">
                <div className="cart-header-row">
                  <h1 className="cart-heading">Shopping Cart</h1>
                  <a className="deselect-all" href="#">
                    Deselect all items
                  </a>
                </div>
                <div className="items-container">
                  <div className="items-container-inner">
                    <div className="product-item">
                      <div className="product-item-container">
                        <div className="item-checkbox">
                          <input
                            type="checkbox"
                            name="item-selector"
                            value="item-selector"
                            className="checkbox"
                            checked
                          />
                          <CheckBoxIcon className="checkbox-placeholder" />
                          {/* <CheckBoxOutlineBlankIcon className="checkbox-placeholder" /> */}
                        </div>
                        <div className="image-container">
                          <a href="#" className="item-image-link">
                            <img
                              src="https://m.media-amazon.com/images/I/71eVjWy8QAL._AC_AA360_.jpg"
                              className="item-image"
                            />
                          </a>
                        </div>
                        <div className="item-body">
                          <div className="item-content">
                            <div className="item-name-container">
                              <p className="item-name">
                                <a href="#" className="clickable">
                                  Kaisi 18 in 1 Professional MacBook Repair Tool
                                  Kit Precision MacBook Screwdriver Set,
                                  Pentalobe Screwdriver, Tri Wing, Torx and
                                  Phillips Screwdriver for MacBook Pro & MacBook
                                  Air with Retina Display
                                </a>
                              </p>
                            </div>
                            <p className="item-price">
                              <span className="currency">NGN</span>
                              <span className="amount-major">6,674</span>
                              <span className="amount-minor">92</span>
                            </p>
                            <p className="in-stock">In Stock</p>
                            <div className="is-gift-present">
                              <input
                                type="checkbox"
                                id="isGift"
                                name="isGift"
                                value="gift"
                              />
                              <label for="isGift">
                                Is a gift <a href="#">Learn more</a>
                              </label>
                            </div>
                          </div>
                          <div className="item-action">
                            <div className="quantity-container">
                              <span className="quantity-placeholder">
                                Qty: 1
                              </span>
                              <ArrowDropDownIcon className="dropdown-arrow" />
                              <select name="quantity" id="quantity">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                                <option value="1">10+</option>
                              </select>
                            </div>
                            <div className="separator"></div>
                            <a href="#">Delete</a>
                            <div className="separator"></div>
                            <a href="#">Save for later</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="empty-cart">
              <h1 className="empty-cart-heading">Your Amazon Cart is empty.</h1>
              <div className="text-container cart-empty">
                <p className="cart-text">
                  Your Shopping Cart lives to serve. Give it purpose — fill it
                  with groceries, clothing, household supplies, electronics, and
                  more.{" "}
                </p>
                <p className="cart-text">
                  Continue shopping on the Amazon.com homepage, learn about
                  today's deals, or visit your Wish List.
                </p>
              </div>
              </div> */}
            </div>
          </div>
          <div className="saved-items container">
            <div className="body">
              <div className="top">
                <h2 className="saved-items-heading">Your Items</h2>
                <div className="item-nav">
                  <div className="item-container">
                    <div className="saved-items-container">
                      <span className="saved-items-span">
                        No items saved for later
                      </span>
                    </div>
                    <div className="buy-it-again-container">
                      <span className="buy-it-again-span">Buy it again</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="bottom">
                <p className="buy-it-again-empty">No items to Buy again.</p>
              </div>
            </div>
          </div>
          <div className="about">
            <p className="text">
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price. Shopping Cart
              Learn more
            </p>
            <p className="text">
              Do you have a gift card or promotional code? We'll ask you to
              enter your claim code when it's time to pay.
            </p>
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
          <CheckoutRecommendation />
        </div>
      </div>
      <div className="checkout-bottom">
        <div className="container">
          <div className="top-header">
            <div className="heading-container">
              <h2 className="trend-inspired-products">
                Smart home products inspired by your shopping trends
              </h2>
            </div>
            <div className="page-number">
              <span className="number">Page 1 of 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
