import React from "react";
import ProductHorizontalSm from "./ProductHorizontalSm";
import "./CheckoutRecommendation.css";

function CheckoutRecommendation() {
  return (
    <div className="recommendations-container">
      <h5 className="recommendations-heading">
        Recommendations for items from across our store
      </h5>
      <div className="recommendations-items">
        <ProductHorizontalSm
          productName="Kaisi 18 in 1 Professional MacBook Repair Tool Kit Precision MacBook Screwdriver Set, Pentalobe Screwdriver, Tri Wing, Torx and Phillips Screwdriver for MacBook Pro & MacBook Air with Retina Display"
          image="https://images-na.ssl-images-amazon.com/images/I/71eVjWy8QAL._AC_UL100_SR100,100_.jpg"
          price={6681.19}
          rating={5}
          numberOfPruchases={526}
        />
        <ProductHorizontalSm
          productName="Repair Tool Kit for MacBook, TECKMAN Macbook Screwdriver Set with P5 Pentalobe Screwdriver,T5 Torx and Ph000 Phillips Screwdrivers for MacBook Air & Pro with Retina"
          image="https://images-na.ssl-images-amazon.com/images/I/61Vrq%2Bkf5hL._AC_UL100_SR100,100_.jpg"
          price={2647.51}
          rating={5}
          numberOfPruchases={515}
        />
        <ProductHorizontalSm
          productName="SP 1TB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5' 7mm (0.28') Internal Solid State Drive (SP001TBSS3A55S25)"
          image="https://images-na.ssl-images-amazon.com/images/I/71vlEYj7QXL._AC_UL100_SR100,100_.jpg"
          price={33869.47}
          rating={5}
          numberOfPruchases={4584}
        />
        <ProductHorizontalSm
          productName="Kaisi 70 in 1 Precision Screwdriver Set Professional Electronics Repair Tool Kit with 56 Bits Magnetic Driver Kit, Anti Static Wrist Band, Spudgers for Tablet, MacBook, PC, iPhone, Xbox, Game Console"
          image="https://images-na.ssl-images-amazon.com/images/I/71r7vu0VveL._AC_UL100_SR100,100_.jpg"
          price={7572.61}
          rating={5}
          numberOfPruchases={5811}
          lastClass={"last"}
        />
      </div>
    </div>
  );
}

export default CheckoutRecommendation;
