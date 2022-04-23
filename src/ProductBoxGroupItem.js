import React from "react";
import "./ProductBoxGroupItem.css";

function ProductBoxGroupItem({ itemImage, itemName }) {
  return (
    <div className="product-box-group-item">
      <div className="item-image-container">
        <img className="item-image" src={itemImage} />
      </div>
      {/* <img className="item-image" src={itemImage} /> */}
      <div className="item-name-container">
        <span className="item-name">{itemName}</span>
      </div>
    </div>
  );
}

export default ProductBoxGroupItem;
