import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import ProductBoxGroup from "../components/ProductBoxGroup";
import HomeItemCarousel from "../components/HomeItemCarousel";
import carouselItems from "../homepageCarouselData";

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(2);

  const carouselImages = [
    "https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ];

  const changeImage = (newState) => {
    /* console.log(newState); */
    let current = carouselIndex;
    if (newState === "prev") {
      current === 0 ? (current = 4) : (current += -1);
    } else if ("next") {
      current === 4 ? (current = 0) : (current += 1);
    }
    setCarouselIndex(current);
    /* console.log("previous: ", carouselIndex); */
  };

  const carouselRow = (carouselTitle) => {
    return carouselItems.find((carousel) => carousel.title === carouselTitle);
  };

  useEffect(() => {
    /* make to stop after only running twice */

    const intervalID = setTimeout(() => {
      changeImage("next");
    }, 5000);

    return () => clearInterval(intervalID);
  }, [carouselIndex]);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-carousel">
          {/* fade bottom half */}

          <div className="home-carousel-inner">
            <div
              className="carousel-slider carousel-slider-left"
              onClick={() => changeImage("prev")}
            >
              <div className="slider-arrow-container">
                <div className="slider-arrow left">
                  <div className="slider-arrow-inner"></div>
                </div>
              </div>
            </div>
            <div className="carousel-image">
              {carouselImages.map((image, index) => {
                return (
                  <div
                    className={
                      carouselIndex === index
                        ? "home-image-container active"
                        : index < carouselIndex
                        ? "home-image-container translate-left"
                        : "home-image-container translate-right"
                    }
                  >
                    <img src={image} className="home-image" />
                  </div>
                );
              })}
            </div>
            <div
              className="carousel-slider carousel-slider-right"
              onClick={() => changeImage("next")}
            >
              <div className="slider-arrow-container">
                <div className="slider-arrow right">
                  <div className="slider-arrow-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-content-container">
          <div className="home-content">
            <div className="home-row">
              <ProductBoxGroup
                title="Keep shopping for"
                link="#"
                items={[
                  {
                    image:
                      "https://m.media-amazon.com/images/I/71D0naxZ8RL._AC_SY135_.jpg",
                    name: "Apple 15in MacBook Pro, Retina, Touch Bar, 2.9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Gray, MPTT2LL/A (Renewed)",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/611hYEemnyL._AC_SY270_.jpg",
                    name: "Mid 2019 Apple MacBook Pro Touch Bar with 2.6 GHz Intel Core i7 Six-Core (15.4 inches, 16GB RAM, 256GB SSD) Space Gray (Renewed)",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/71gYXnMZXoL._AC_SY270_.jpg",
                    name: "HP Stream 14-Inch Laptop, Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Windows 10 Home in S Mode (14-cb159nr, Jet Black)",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/71HAM56AEGL._AC_SY270_.jpg",
                    name: "2020 Apple MacBook Pro with 2.0GHz Intel Core i5 (13-inch, 16GB RAM, 512GB SSD Storage) - Space Gray (Renewed)",
                    link: "#",
                  },
                ]}
                type="largeItemGroup"
              />
              <ProductBoxGroup
                title="Shop by Category"
                link="#"
                linkPlaceholder="Shop now"
                items={[
                  {
                    image:
                      "https://m.media-amazon.com/images/I/71zZiQGzc5L._AC_UL640_QL65_.jpg",
                    name: "Computers & Accessories",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL320_.jpg",
                    name: "Video Games",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/81cFKwC8fvL._AC_UL640_QL65_.jpg",
                    name: "Baby",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/61VJWSztDcL._AC_UL640_QL65_.jpg",
                    name: "Toys & Games",
                    link: "#",
                  },
                ]}
                type="itemGroup"
              />
              <ProductBoxGroup
                title="Beauty picks"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_2x._SY608_CB432774344_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="Shop Father's Day Gifts"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_2X._SY608_CB636880260_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="Health & Personal Care"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="Deal of the Day"
                image="https://m.media-amazon.com/images/I/51s-SOsTqCL._AC_SY460_.jpg"
                itemName="Bosch Tools and Accessories"
                maxDiscount="71"
                linkPlaceholder="See more deals"
                link="#"
                type="topDeal"
              />
              {/* <div className="sign-in-experience">
                <div className="sign-in-container">
                  <div className="inner-container">
                    <h2 className="title">Sign in for the best experience</h2>
                    <div className="link-container">
                      <button className="sign-in-link">Sign in securely</button>
                    </div>
                  </div>
                </div>
                <div className="advert-container">
                  <img
                    className="advert-image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                  />
                </div>
              </div> */}
              <ProductBoxGroup
                title="Computers & Accessories"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="Shop Home & Office"
                items={[
                  {
                    image:
                      "https://m.media-amazon.com/images/I/41YyGt8ZxZL._SY320_.jpg",
                    name: "Home Décor",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/31W65BL9JkL._SY150_.jpg",
                    name: "Kitchen",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/31zfE4fiizL._SY150_.jpg",
                    name: "Office",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/31jqcXyW3ML._SY150_.jpg",
                    name: "Dining sets",
                    link: "#",
                  },
                ]}
                linkPlaceholder="See more"
                link="#"
                type="alternateItemGroup"
              />
            </div>

            <HomeItemCarousel
              carouselItemsData={carouselRow("Items to explore")}
            />

            <HomeItemCarousel
              carouselItemsData={carouselRow("More items to consider")}
            />

            <div className="home-row">
              <ProductBoxGroup
                title="Create with strip lights"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="Kindle E readers"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_2X._SY608_CB639752734_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="For your Fitness Needs"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
                linkPlaceholder="Shop now"
                link="#"
                type="singleItem"
              />
              <ProductBoxGroup
                title="Educational toys for children"
                items={[
                  {
                    image:
                      "https://m.media-amazon.com/images/I/41S2fDCwTkL._SY320_.jpg",
                    name: "Explore learning toys & games",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/21uoU7j5uxL._SY150_.jpg",
                    name: "Ages 0-4",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/41x4edhN4EL._SY150_.jpg",
                    name: "Ages 5-13",
                    link: "#",
                  },
                  {
                    image:
                      "https://m.media-amazon.com/images/I/511qeWcsmIL._SY150_.jpg",
                    name: "Ages 14 +",
                    link: "#",
                  },
                ]}
                linkPlaceholder="See more"
                link="#"
                type="alternateItemGroup"
              />
            </div>

            <HomeItemCarousel
              carouselItemsData={carouselRow("Best Sellers in Books")}
            />

            <HomeItemCarousel
              carouselItemsData={carouselRow(
                "Inspired by your shopping trends"
              )}
            />

            <HomeItemCarousel
              carouselItemsData={carouselRow(
                "Best Sellers in Cell Phones & Accessories"
              )}
            />

            <HomeItemCarousel
              carouselItemsData={carouselRow("Buy in other parts of the store")}
            />

            <HomeItemCarousel
              carouselItemsData={carouselRow("Related to items you've viewed")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
