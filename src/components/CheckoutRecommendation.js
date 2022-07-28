import React from "react";
import ProductHorizontalSm from "./ProductHorizontalSm";
import "../styles/CheckoutRecommendation.css";

function CheckoutRecommendation({ itemsArray }) {
  return (
    <div className="recommendations-container">
      <h5 className="recommendations-heading">
        Recommendations for items from across our store
      </h5>
      <div className="recommendations-items">
        {itemsArray.map((item, index) => {
          return (
            <ProductHorizontalSm
              productName={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              numberOfPruchases={item.numberOfPruchases}
              id={item.index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CheckoutRecommendation;
