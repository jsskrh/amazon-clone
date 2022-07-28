import React from "react";

function MobileCarouselCard({ title, link, image }) {
  return (
    <div className="carousel-item-container">
      <a href={link}>
        <div className="carousel-item">
          <div className="carousel-item-content">
            <div className="carousel-item-wrapper"></div>
            <div className="carousel-item-name-container">
              <span className="carousel-item-name">{title}</span>
            </div>
            <div className="carousel-item-image-container">
              <img className="carousel-item-image" alt="item" src={image} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default MobileCarouselCard;
