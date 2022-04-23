import React from "react";
import "./ProductBoxGroup.css";
import ProductBoxGroupItem from "./ProductBoxGroupItem.js";

function ProductBoxGroup({ title, itemImage, itemName, link }) {
  return (
    <div className="product-box-group">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="items-container">
          <ProductBoxGroupItem itemImage={itemImage} itemName={itemName} />
          <ProductBoxGroupItem itemImage={itemImage} itemName={itemName} />
          <ProductBoxGroupItem itemImage={itemImage} itemName={itemName} />
          <ProductBoxGroupItem itemImage={itemImage} itemName={itemName} />
        </div>
        <span className="link-text">{link}</span>
      </div>
    </div>
  );
}

export default ProductBoxGroup;
