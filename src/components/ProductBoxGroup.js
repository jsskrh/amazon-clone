import React from "react";
import "../styles/ProductBoxGroup.css";

function ProductBoxGroup({
  title,
  items,
  image,
  itemName,
  link,
  linkPlaceholder,
  keepShopping,
  maxDiscount,
  type,
}) {
  return (
    <div className="product-box-group">
      <div
        className={
          type === "largeItemGroup" ? "container large-container" : "container"
        }
      >
        <h2 className="title">{title}</h2>
        {type === "largeItemGroup" || type === "itemGroup" ? (
          <div className="items-container">
            {items.map((item, index) => {
              return (
                <div
                  className={
                    index !== 0 && index / 2 !== 1
                      ? "right product-box-group-item"
                      : "left product-box-group-item"
                  }
                >
                  <a href={item.link}>
                    <div className="item-image-container">
                      <img className="item-image" src={item.image} />
                    </div>

                    <div className="item-name-container">
                      <span className="item-name">{item.name}</span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        ) : type === "singleItem" || type === "topDeal" ? (
          <div className="image-container">
            <a href="#">
              {type !== "topDeal" ? (
                <img src={image} className="large-category-image" />
              ) : (
                <div className="top-deal-container">
                  <div className="image-container">
                    <img src={image} className="top-deal-image" />
                  </div>
                  <div className="top-deal-content">
                    <div className="top-deal-discount">
                      <span className="discount">Up to {maxDiscount}% off</span>
                      <span className="top-deal">Top deal</span>
                    </div>
                    <div className="top-deal-mini">
                      <span>{itemName}</span>
                    </div>
                  </div>
                </div>
              )}
            </a>
          </div>
        ) : (
          <div className="items-container alternate">
            <div className="top-layer">
              <div className="image-container">
                <a href={items[0].link} className="image-link">
                  <img src={items[0].image} className="item-image" />
                </a>
              </div>
              <a href={items[0].link}>
                <span className="item-name">{items[0].name}</span>
              </a>
            </div>
            <div className="bottom-layer">
              {items.slice(1).map((item, index) => {
                return (
                  <div
                    className={
                      index === 0
                        ? "product-box-group-item leftmost"
                        : "product-box-group-item"
                    }
                  >
                    <a href={item.link}>
                      <div className="item-image-container">
                        <img className="item-image" src={item.image} />
                      </div>

                      <div className="item-name-container">
                        <span className="item-name">{item.name}</span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {type !== "largeItemGroup" && (
          <a href={link}>
            <span className="link-text">{linkPlaceholder}</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductBoxGroup;
