import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/SideMenuListItem.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SideMenuListItem({
  name,
  collapsible,
  directLink,
  link,
  logo,
  click,
}) {
  const arrowForwardIcon = useRef();
  const handleClick = () => {
    if (collapsible) {
      arrowForwardIcon.current.classList.toggle("expand");
    }
  };
  return (
    <li className="side-menu-list-item" onClick={() => handleClick()}>
      <Link to={`${link}`} onClick={click}>
        {logo && <div className="side-menu-icon-logo">{logo}</div>}
        <span className="side-menu-item">{name}</span>
        {!collapsible ? (
          !directLink && <ArrowForwardIosIcon className="arrow-forward-icon" />
        ) : (
          <ArrowForwardIosIcon
            className="arrow-forward-icon collapse"
            ref={arrowForwardIcon}
          />
        )}
      </Link>
    </li>
  );
}

export default SideMenuListItem;
