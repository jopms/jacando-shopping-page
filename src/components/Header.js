import React from "react";
import "../styles/scss/_header.scss";
import avatar from "../styles/img/img-avatar.png";
import shoppingCart from "../styles/img/shopping-cart.png";

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
          <img
            className="shopping-cart"
            src={shoppingCart}
            alt="shopping-cart"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
