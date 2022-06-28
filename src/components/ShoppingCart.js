import React from "react";
import "../styles/ShoppingCart.css";
import { useStateValue } from "../StateProvider";
import CartItem from "./CartItem";
import { getCartQuantity, getCartTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";

function ShoppingCart() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="cart container">
      <div className="body">
        {cart?.length === 0 ? (
          <div className="empty-cart">
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
          </div>
        ) : (
          <div className="shopping-cart">
            <div className="cart-header-row">
              <h1 className="cart-heading">Shopping Cart</h1>
              <a className="deselect-all" href="#">
                Deselect all items
              </a>
            </div>
            {cart.map((item) => (
              <CartItem
                id={item.id}
                productName={item.productName}
                image={item.image}
                price={item.price}
              />
            ))}
            <CurrencyFormat
              renderText={(value) => (
                <div className="subtotal-container">
                  <span className="subtotal-label-buybox">
                    Subtotal (
                    <span className="number-of-items">
                      {getCartQuantity(cart)}{" "}
                      {cart?.length === 1 ? "item" : "items"}
                    </span>
                    ):{" "}
                  </span>
                  <span className="subtotal-amount-buybox">
                    {/* <span className="currency">NGN</span> */}
                    <span className="amount-major">{value}</span>
                    {/* <span className="amount-minor">
                      {subtotal.decimalSubtotal}
                    </span> */}
                    {/* <br></br>
                    <span className="amount-major">{subtotal.subtotal}</span> */}
                  </span>
                </div>
              )}
              decimalScale={2}
              /* value={subtotal.wholeSubtotal} */
              /* value={subtotal.subtotal} */
              value={getCartTotal(cart)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"NGN"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
