import React from "react";
import ShoppingCart from "./ShoppingCart";

import avatar from "../styles/img/img-avatar.png";
import "../styles/scss/_header.scss";

/* Header Component */
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="org-logo"></div>
        <div className="user-settings">
          <div className="user">
            <span className="user-name">Hello, João Santos</span>
            <img className="user-logo" src={avatar} alt="avatar" />
          </div>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
