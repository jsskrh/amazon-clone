import React from "react";
import "../styles/Checkout.css";
import CheckoutRecommendation from "../components/CheckoutRecommendation";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";
import ShoppingCart from "../components/ShoppingCart";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-top">
        <div className="checkout-left">
          <ShoppingCart />
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
          {cart?.length !== 0 && <Subtotal />}
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
