import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SideMenuListItem from "./SideMenuListItem";
import SideMenuListTitle from "./SideMenuListTitle";
import { useStateValue } from "./StateProvider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LanguageIcon from "@mui/icons-material/Language";
import { auth } from "./firebase";
import "./SideMenu.css";
import SubSideMenu from "./SubSideMenu";
import subMenus from "./submenusData";

function SideMenu() {
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [{ cart, user }, dispatch] = useStateValue();

  const [menu, setMenu] = useState("");

  const handleSideMenu = (target) => {
    setMenu(target);
  };

  const programsAndFeatures = useRef();
  const shopByDepartment = useRef();

  const handleCollapsibleListToggle = (target) => {
    const show = "side-menu-compressed-show";
    switch (target) {
      case "programsAndFeatures":
        programsAndFeatures.current.classList.toggle(show);
        break;

      case "shopByDepartment":
        shopByDepartment.current.classList.toggle(show);
        break;

      default:
        break;
    }
  };

  return (
    <div className="side-menu">
      <Link to={"#"}>
        <div className="menu-customer-profile">
          <div className="customer-avatar-container">
            <AccountCircleIcon className="account-circle-icon" />
          </div>
          <div className="customer-name-container">
            <div className="customer-name">
              <h2>Hello, {user ? "Guest" : "Sign-In"}</h2>
            </div>
          </div>
        </div>
      </Link>
      <div className="side-menu-content">
        <ul
          className={
            menu === ""
              ? "side-menu-lists main-menu"
              : "side-menu-lists main-menu hidden"
          }
        >
          <SideMenuListTitle name="Digital Content & Devices" />
          {subMenus
            .filter((menu) => {
              return menu.header === "Digital Content & Devices";
            })
            .map((submenu) => {
              return (
                <div onClick={() => handleSideMenu(submenu.name)}>
                  <SideMenuListItem name={submenu.name} />
                </div>
              );
            })}
          <li className="side-menu-separator"></li>

          <SideMenuListTitle name="Shop By Department" />
          {subMenus
            .filter((menu) => {
              return menu.header === "Shop By Department";
            })
            .slice(0, 4)
            .map((submenu) => {
              return (
                <div onClick={() => handleSideMenu(submenu.name)}>
                  <SideMenuListItem name={submenu.name} />
                </div>
              );
            })}
          <ul className="side-menu-compressed" ref={shopByDepartment}>
            <li className="side-menu-separator"></li>
            {subMenus
              .filter((menu) => {
                return menu.header === "Shop By Department";
              })
              .slice(4)
              .map((submenu) => {
                return (
                  <div onClick={() => handleSideMenu(submenu.name)}>
                    <SideMenuListItem name={submenu.name} />
                  </div>
                );
              })}
          </ul>
          <div onClick={() => handleCollapsibleListToggle("shopByDepartment")}>
            <SideMenuListItem name="See All" collapsible />
          </div>
          <li className="side-menu-separator"></li>

          <SideMenuListTitle name="Programs & Features" />
          {/* <SideMenuListItem name="Gift Cards" /> */}
          {subMenus
            .filter((menu) => {
              return menu.header === "Programs & Features";
            })
            .slice(0, 1)
            .map((submenu) => {
              return (
                <div onClick={() => handleSideMenu(submenu.name)}>
                  <SideMenuListItem name={submenu.name} />
                </div>
              );
            })}
          <SideMenuListItem name="#FoundItOnAmazon" directLink />
          {subMenus
            .filter((menu) => {
              return menu.header === "Programs & Features";
            })
            .slice(1, 3)
            .map((submenu) => {
              return (
                <div onClick={() => handleSideMenu(submenu.name)}>
                  <SideMenuListItem name={submenu.name} />
                </div>
              );
            })}
          {/* <SideMenuListItem name="Amazon Live" />
          <SideMenuListItem name="International Shopping" /> */}
          <ul className="side-menu-compressed" ref={programsAndFeatures}>
            <li className="side-menu-separator"></li>
            <SideMenuListItem name="Amazon Second Chance" directLink />
          </ul>
          <div
            onClick={() => handleCollapsibleListToggle("programsAndFeatures")}
          >
            <SideMenuListItem name="See All" collapsible />
          </div>
          <li className="side-menu-separator"></li>

          <SideMenuListTitle name="Help & Settings" />
          <SideMenuListItem name="Your Account" directLink />
          <SideMenuListItem name="English" logo={<LanguageIcon />} directLink />
          <SideMenuListItem
            name="United States"
            logo={<span class="fi fi-us"></span>}
            directLink
          />
          {user && <SideMenuListItem name="Customer Service" directLink />}
          <SideMenuListItem
            name={user ? "Sign Out" : "Sign In"}
            link="/login"
            click={handleAuthentication}
            directLink
          />
          <li className="side-menu-separator"></li>
        </ul>
        {subMenus.map((submenu) => {
          return (
            <SubSideMenu
              data={submenu.sections}
              onChange={handleSideMenu}
              classes={
                submenu.name === menu
                  ? "side-menu-lists sub-menu show"
                  : "side-menu-lists sub-menu"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default SideMenu;
