import React from "react";
import ShoppingCart from "./ShoppingCart";

import avatar from "../styles/img/img-avatar.png";
import "../styles/scss/_header.scss";

/**
 * Header component with logo, cart, and user info
 */
const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="org-logo-wrapper">
          <div className="org-logo">The Market</div>
          <div className="org-logo-subtitle">fresh food everyday</div>
        </div>
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
