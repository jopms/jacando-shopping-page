import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/scss/_sidebar.scss";

/* Sidebar Component */
const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-title">Categories</div>
      <NavLink className="sidebar-entry" to="/vegetables">
        Vegetables
      </NavLink>
      <NavLink className="sidebar-entry" to="/fruits">
        Fruits
      </NavLink>
      <NavLink className="sidebar-entry" to="/cheese">
        Cheese
      </NavLink>
    </div>
  );
};

export default Sidebar;
