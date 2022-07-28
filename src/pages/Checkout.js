import React from "react";
import "../styles/Checkout.css";
import CheckoutRecommendation from "../components/CheckoutRecommendation";
import Subtotal from "../components/Subtotal";
import { useStateValue } from "../StateProvider";
import ShoppingCart from "../components/ShoppingCart";
import HomeItemCarousel from "../components/HomeItemCarousel";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  const chechoutRecommendations = {
    title: "Checkout Recommendations",
    items: [
      {
        name: "Kaisi 18 in 1 Professional MacBook Repair Tool Kit Precision MacBook Screwdriver Set, Pentalobe Screwdriver, Tri Wing, Torx and Phillips Screwdriver for MacBook Pro & MacBook Air with Retina Display",
        image: "https://m.media-amazon.com/images/I/71eVjWy8QAL._AC_AA360_.jpg",
        price: 6681.19,
        rating: 5,
        numberOfPruchases: 526,
        id: 2000,
      },
      {
        name: "Repair Tool Kit for MacBook, TECKMAN Macbook Screwdriver Set with P5 Pentalobe Screwdriver,T5 Torx and Ph000 Phillips Screwdrivers for MacBook Air & Pro with Retina",
        image: "https://m.media-amazon.com/images/I/61Vrq+kf5hL._AC_AA360_.jpg",
        price: 2647.51,
        rating: 5,
        numberOfPruchases: 515,
        id: 2001,
      },
      {
        name: "SanDisk Ultra 3D NAND 1TB Internal SSD - SATA III 6 Gb/s, 2.5'/7mm, Up to 560 MB/s - SDSSDH3-1T00-G25",
        image:
          "https://m.media-amazon.com/images/I/71ETKYdbjLL._AC_UY436_QL65_.jpg",
        price: 44612.61,
        rating: 5,
        numberOfPruchases: 25611,
        id: 2002,
      },
      {
        name: "Kaisi 70 in 1 Precision Screwdriver Set Professional Electronics Repair Tool Kit with 56 Bits Magnetic Driver Kit, Anti Static Wrist Band, Spudgers for Tablet, MacBook, PC, iPhone, Xbox, Game Console",
        image: "https://m.media-amazon.com/images/I/71r7vu0VveL._AC_AA360_.jpg",
        price: 7572.61,
        rating: 5,
        numberOfPruchases: 5811,
        id: 2003,
      },
    ],
  };

  return (
    <div className="checkout">
      <div className="checkout-top">
        <div className="checkout-left">
          <ShoppingCart />
          <div className="saved-items container">
            <div className="body">
              <div className="top">
                <h2 className="saved-items-heading">Your Items</h2>
                <div className="item-nav">
                  <div className="item-container">
                    <div className="saved-items-container">
                      <span className="saved-items-span">
                        No items saved for later
                      </span>
                    </div>
                    <div className="buy-it-again-container">
                      <span className="buy-it-again-span">Buy it again</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="bottom">
                <p className="buy-it-again-empty">No items to Buy again.</p>
              </div>
            </div>
          </div>
          <div className="about">
            <p className="text">
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price. Shopping Cart
              Learn more
            </p>
            <p className="text">
              Do you have a gift card or promotional code? We'll ask you to
              enter your claim code when it's time to pay.
            </p>
          </div>
        </div>
        <div className="checkout-right">
          {cart?.length !== 0 && <Subtotal />}
          <CheckoutRecommendation itemsArray={chechoutRecommendations.items} />
          <HomeItemCarousel
            carouselItemsData={chechoutRecommendations}
            checkout
          />
        </div>
      </div>
      {/* <div className="checkout-bottom">
        <div className="container">
          <div className="top-header">
            <div className="heading-container">
              <h2 className="trend-inspired-products">
                Smart home products inspired by your shopping trends
              </h2>
            </div>
            <div className="page-number">
              <span className="number">Page 1 of 2</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Checkout;
