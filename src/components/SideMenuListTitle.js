import React from "react";
import "../styles/SideMenuListTitle.css";

function SideMenuListTitle({ name }) {
  return (
    <li className="side-menu-list-title">
      <div className="side-menu-item side-menu-item-title">
        <h3>{name}</h3>
      </div>
    </li>
  );
}

export default SideMenuListTitle;
