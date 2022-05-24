import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CartItem from "./CartItem";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order-container">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CartItem
          id={item.id}
          productName={item.productName}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          orderPage
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"NGN"}
      />
    </div>
  );
}

export default Order;
