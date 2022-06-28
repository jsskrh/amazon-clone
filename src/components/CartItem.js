import React from "react";
import "../styles/CartItem.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useStateValue } from "../StateProvider";

function useToggle(initState = false) {
  const [state, setState] = React.useState(initState);
  return [state, (_) => setState(!state)];
}

function CartItem({ id, productName, image, price, quantity, orderPage }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "removeFromCart",
      id: id,
    });
  };

  /*   const changeItemQuantity = (e) => {
    const newQuantity = e.target.quantity;
    dispatch({
      type: "changeItemQuantity",
      id: id,
      quantity: newQuantity,
    });
  }; */

  const checkItemQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    return item.quantity;
  };

  const [activeCartItem, toggleActiveCartItem] = useToggle(true);

  return (
    <div className="items-container">
      <div className="items-container-inner">
        <div className="product-item">
          <div className="product-item-container">
            {!orderPage && (
              <div className="item-checkbox">
                <Checkbox
                  checked={activeCartItem}
                  onClick={toggleActiveCartItem}
                  on={
                    <CheckBoxIcon className="checkbox-placeholder cb-checked" />
                  }
                  off={
                    <CheckBoxOutlineBlankIcon className="checkbox-placeholder cb-unchecked" />
                  }
                />
              </div>
            )}
            <div className="image-container">
              <a href="#" className="item-image-link">
                <img src={image} alt="Item" className="item-image" />
              </a>
            </div>
            <div className="item-body">
              <div className="item-content">
                <div className="item-name-container">
                  <p className="item-name">
                    <a href="#" className="clickable">
                      {productName}
                    </a>
                  </p>
                </div>
                <p className="item-price">
                  <span className="currency">NGN</span>
                  {/* <span className="amount-major">6,674</span>
                  <span className="amount-minor">92</span> */}
                  <span className="amount-major">{price}</span>
                </p>
                {!orderPage && (
                  <div>
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
                )}
              </div>
              {orderPage ? (
                <div className="item-action">
                  <div className="quantity-container">
                    <span className="quantity-placeholder">
                      Qty: {quantity}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="item-action">
                  <div className="quantity-container">
                    <span className="quantity-placeholder">
                      Qty: {checkItemQuantity(id)}
                    </span>
                    <ArrowDropDownIcon className="dropdown-arrow" />
                    <select
                      name="quantity"
                      id="quantity"
                      value={checkItemQuantity(id)}
                      /* onChange={changeItemQuantity} */
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10+</option>
                    </select>
                  </div>
                  <div className="separator"></div>
                  <a href="#" onClick={removeFromCart}>
                    Delete
                  </a>
                  <div className="separator"></div>
                  <a href="#">Save for later</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox({ checked, onClick, on, off }) {
  return (
    <div className="checkbox" onClick={onClick}>
      {checked ? on : off}
    </div>
  );
}

export default CartItem;
