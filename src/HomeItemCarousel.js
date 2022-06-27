import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles/HomeItemCarousel.css";

function HomeItemCarousel({ carouselItemsData }) {
  const contentRef = useRef(null);
  const shelfRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const scrollThumbRef = useRef(null);
  const observer = useRef(null);

  const [thumbWidth, setThumbWidth] = useState(20);
  const [viewPortStart, setViewPortStart] = useState(0);
  const [viewPortEnd, setViewPortEnd] = useState(null);
  const [scrollStartPosition, setScrollStartPosition] = useState(null);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const carouselItems = carouselItemsData.items;

  const handleResize = (ref, trackSize) => {
    const { clientWidth, scrollWidth } = ref;
    setThumbWidth(
      Math.max(
        (clientWidth / scrollWidth) * trackSize /* / 1.32888652378 */ /* , 20 */
      )
    );
  };

  useEffect(() => {
    const { current } = shelfRef;
    if (current) {
      const { clientWidth: viewportSize } = contentRef.current;
      const { clientWidth: shelfSize, offsetLeft: shelfLeft } =
        shelfRef.current;
      const viewAmount = shelfSize / viewportSize;
      const viewAmountCeil = Math.ceil(shelfSize / viewportSize);
      const viewAmountTrunc = Math.trunc(shelfSize / viewportSize);
      const lastView =
        viewportSize * (viewAmountTrunc - 1) +
        viewportSize * (viewAmount - viewAmountTrunc);
      setViewPortEnd(lastView);
    }

    if (contentRef.current && scrollTrackRef.current) {
      try {
        const ref = contentRef.current;
        const shelf = shelfRef.current;
        const { clientWidth: trackSize } = scrollTrackRef.current;
        observer.current = new ResizeObserver(() => {
          handleResize(ref, trackSize);
        });
        observer.current.observe(shelf);
        shelf.addEventListener("transitionrun", handleThumbPosition);
        return () => {
          observer.current?.unobserve(shelf);
          shelf.removeEventListener("transitionrun", handleThumbPosition);
        };
      } catch (error) {
        console.log("error:", error);
      }
    }
  }, []);

  const handleThumbPosition = useEffect(() => {
    if (
      !contentRef.current ||
      !scrollTrackRef.current ||
      !scrollThumbRef.current
    ) {
      return;
    }

    const { scrollWidth: contentWidth } = shelfRef.current;
    const { clientWidth: trackWidth } = scrollTrackRef.current;
    let newStart = (-viewPortStart / +contentWidth) * trackWidth;
    newStart = Math.min(newStart, trackWidth - thumbWidth);
    const thumb = scrollThumbRef.current;
    thumb.style.left = `${newStart}px`;
  }, [viewPortStart]);

  const handleScrollButton = (direction) => {
    const { current } = shelfRef;
    if (current) {
      const { clientWidth: viewportSize } = contentRef.current;
      const { clientWidth: shelfSize, offsetLeft: shelfLeft } =
        shelfRef.current;
      const shelf = shelfRef.current;
      const thumb = scrollThumbRef.current;
      shelf.classList.add("transition");
      thumb.classList.add("transition");
      const viewAmount = shelfSize / viewportSize;
      const viewAmountCeil = Math.ceil(shelfSize / viewportSize);
      const viewAmountTrunc = Math.trunc(shelfSize / viewportSize);
      const lastView =
        viewportSize * (viewAmountTrunc - 1) +
        viewportSize * (viewAmount - viewAmountTrunc);
      setViewPortEnd(lastView);
      const scrollCalc = 1 / viewAmountCeil;
      const divider = shelfSize * scrollCalc;
      const scrollAmount =
        shelfLeft + (direction === "next" ? -divider : divider);

      let viewPortStartCalc;
      direction === "next"
        ? -scrollAmount + divider <= viewAmountTrunc * viewportSize
          ? (viewPortStartCalc = scrollAmount)
          : (viewPortStartCalc = -lastView)
        : -scrollAmount <= viewportSize
        ? (viewPortStartCalc = 0)
        : (viewPortStartCalc = scrollAmount);
      setViewPortStart(viewPortStartCalc);
    }
  };

  useEffect(() => {
    const { current } = shelfRef;
    current.style.left = `${viewPortStart}px`;
  }, [viewPortStart]);

  const handleThumbMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientX);
    if (shelfRef.current) setInitialScrollLeft(shelfRef.current.offsetLeft);

    shelfRef.current.classList.remove("transition");
    scrollThumbRef.current.classList.remove("transition");
    scrollThumbRef.current.classList.add("show");
    setIsDragging(true);
  }, []);

  const handleThumbMouseUp = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
      scrollThumbRef.current.classList.remove("show");
    },
    [isDragging]
  );

  const handleThumbMouseMove = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const { offsetWidth: contentOffsetWidth } = shelfRef.current;
        const { clientWidth: scrollTrackWidth } = scrollTrackRef.current;

        // Subtract the current mouse x position from where you started to get the pixel difference in mouse position. Multiply by ratio of visible content height to thumb height to scale up the difference for content scrolling.
        const deltaX =
          (e.clientX - scrollStartPosition) * (scrollTrackWidth / thumbWidth);

        let newScrollLeft = Math.min(-initialScrollLeft + deltaX, viewPortEnd);
        newScrollLeft = Math.max(newScrollLeft, 0);

        setViewPortStart(-newScrollLeft);
      }
    },
    [isDragging, scrollStartPosition, thumbWidth]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleThumbMouseMove);
    document.addEventListener("mouseup", handleThumbMouseUp);
    document.addEventListener("mouseleave", handleThumbMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleThumbMouseMove);
      document.removeEventListener("mouseup", handleThumbMouseUp);
      document.removeEventListener("mouseleave", handleThumbMouseUp);
    };
  }, [handleThumbMouseMove, handleThumbMouseUp]);

  return (
    <div className="home-row carousel">
      <div className="carousel-row">
        <div className="row-title-block">
          <h2 className="row-title">{carouselItemsData.title}</h2>
          {carouselItemsData.link && (
            <span className="title-block-right">
              <a href={carouselItemsData.link}>
                {carouselItemsData.linkPlaceholder}
              </a>
            </span>
          )}
        </div>
        <div className="feed-carousel">
          <div className="feed-carousel-viewport" ref={contentRef}>
            <ul className="feed-carousel-shelf" ref={shelfRef}>
              {carouselItems.map((item) => {
                return (
                  <li className="feed-carousel-card">
                    <span className="list-item">
                      <a className="a-list-item" href="#">
                        <img className="item-image" src={item} />
                      </a>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={
              viewPortStart === 0
                ? "slider previous-slide extreme"
                : "slider previous-slide"
            }
            onClick={() => handleScrollButton("previous")}
          >
            <span className="slider-arrow left"></span>
          </div>
          <div
            className={
              viewPortStart === -viewPortEnd
                ? "slider next-slide extreme"
                : "slider next-slide"
            }
            onClick={() => handleScrollButton("next")}
          >
            <span className="slider-arrow right"></span>
          </div>
          <span className="feed-scrollbar">
            <span className="feed-scrollbar-track" ref={scrollTrackRef}>
              <span
                className="feed-scrollbar-thumb"
                ref={scrollThumbRef}
                style={{
                  width: `${thumbWidth}px`,
                }}
                onMouseDown={handleThumbMouseDown}
              ></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeItemCarousel;
