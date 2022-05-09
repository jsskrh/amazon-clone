import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal-container">
      <div className="subtotal-body">
        <div className="subtotal-body-inner">
          <CurrencyFormat
            renderText={(value) => (
              <div className="subtotal">
                <p className="subtotal-calculation">
                  <span className="subtotal-label-buybox">
                    Subtotal (<span className="number-of-items">1 item</span>
                    ):{" "}
                  </span>
                  <span className="subtotal-amount-buybox">
                    <span className="currency">NGN</span>
                    <span className="amount-major">7,586</span>
                    <span className="amount-minor">45</span>
                    <br></br>
                    <span> ${value} </span>
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
            value={7586.45}
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
