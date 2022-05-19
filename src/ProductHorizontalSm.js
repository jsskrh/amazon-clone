import React from "react";
import "./ProductHorizontalSm.css";
import { useStateValue } from "./StateProvider";

function ProductHorizontalSm({
  id,
  productName,
  image,
  rating,
  price,
  numberOfPruchases,
  lastClass,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "addToCart",
      item: {
        id: id,
        productName: productName,
        image: image,
        price: price,
        quantity: 1,
      },
    });
  };

  return (
    <div className={`product-horizontal-sm ${lastClass}`}>
      <div className="container">
        <div className="image-container">
          <img src={image} className="product-image" />
        </div>
        <div className="product-body">
          <div className="product-name-container">
            <p className="product-name">{productName}</p>
          </div>
          <div className="product-rating">
            <div className="star-container">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p className="rating-star">⭐️</p>
                ))}
            </div>
            <span className="number-of-purchases">{numberOfPruchases}</span>
          </div>
          <p className="product-price">NGN {price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductHorizontalSm;
