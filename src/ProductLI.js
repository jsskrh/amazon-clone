import React from "react";
import "./styles/ProductLI.css";

function ProductLI({ title, image, link }) {
  return (
    <div className="large-row-item">
      <div className="container">
        <h2 className="large-category-title">{title}</h2>
        <div className="image-container">
          <img src={image} className="large-category-image" />
        </div>
        <span className="large-category-text">{link}</span>
      </div>
    </div>
  );
}

export default ProductLI;
