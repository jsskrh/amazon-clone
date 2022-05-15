import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getCartQuantity, getCartTotal } from "./reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal-container">
      <div className="subtotal-body">
        <div className="subtotal-body-inner">
          <CurrencyFormat
            renderText={(value) => (
              <div className="subtotal">
                <p className="subtotal-calculation">
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
                </p>
                <div className="is-gift-present">
                  <input
                    type="checkbox"
                    id="isGift"
                    name="isGift"
                    value="gift"
                  />
                  <label for="isGift">This order contains a gift</label>
                </div>
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
          <div className="proceed-to-checkout">
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
