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
          image="https://m.media-amazon.com/images/I/71eVjWy8QAL._AC_AA360_.jpg"
          price={6681.19}
          rating={5}
          numberOfPruchases={526}
          id={2000}
        />
        <ProductHorizontalSm
          productName="Repair Tool Kit for MacBook, TECKMAN Macbook Screwdriver Set with P5 Pentalobe Screwdriver,T5 Torx and Ph000 Phillips Screwdrivers for MacBook Air & Pro with Retina"
          image="https://m.media-amazon.com/images/I/61Vrq+kf5hL._AC_AA360_.jpg"
          price={2647.51}
          rating={5}
          numberOfPruchases={515}
          id={2001}
        />
        <ProductHorizontalSm
          productName="SanDisk Ultra 3D NAND 1TB Internal SSD - SATA III 6 Gb/s, 2.5'/7mm, Up to 560 MB/s - SDSSDH3-1T00-G25"
          image="https://m.media-amazon.com/images/I/71ETKYdbjLL._AC_UY436_QL65_.jpg"
          price={44612.61}
          rating={5}
          numberOfPruchases={25611}
          id={2002}
        />
        <ProductHorizontalSm
          productName="Kaisi 70 in 1 Precision Screwdriver Set Professional Electronics Repair Tool Kit with 56 Bits Magnetic Driver Kit, Anti Static Wrist Band, Spudgers for Tablet, MacBook, PC, iPhone, Xbox, Game Console"
          image="https://m.media-amazon.com/images/I/71r7vu0VveL._AC_AA360_.jpg"
          price={7572.61}
          rating={5}
          numberOfPruchases={5811}
          last
          id={2003}
        />
      </div>
    </div>
  );
}

export default CheckoutRecommendation;
