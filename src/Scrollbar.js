import React from "react";
import "./styles/Scrollbar.css";

function Scrollbar() {
  return (
    <span className="feed-scrollbar">
      <span className="feed-scrollbar-track">
        <span className="feed-scrollbar-thumb"></span>
      </span>
    </span>
  );
}

export default Scrollbar;
