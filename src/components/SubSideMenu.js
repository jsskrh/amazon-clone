import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SideMenuListTitle from "./SideMenuListTitle";
import SideMenuListItem from "./SideMenuListItem";
import "../styles/SubSideMenu.css";

function SubSideMenu({ data, classes, onChange }) {
  return (
    <ul className={classes}>
      <li className="sub-menu-back" onClick={() => onChange("")}>
        <ArrowBackIcon className="arrow-back" />
        <span className="side-menu-item">MAIN MENU</span>
      </li>
      {data.map((section, index) => {
        return (
          <div className="sub-menu-section">
            {index !== 0 && <li className="side-menu-separator"></li>}
            <SideMenuListTitle name={section.title} />
            {section.items.map((item) => {
              return (
                <SideMenuListItem
                  name={item.name}
                  link={item.link}
                  directLink
                />
              );
            })}
          </div>
        );
      })}
    </ul>
  );
}

export default SubSideMenu;
