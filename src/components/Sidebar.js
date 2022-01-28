import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/scss/_sidebar.scss";

/* Sidebar Component */
const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-title">Categories</div>
      <NavLink activeClassName="sidebar-selected" className="sidebar-entry" exact to="/">Home</NavLink>
      <NavLink activeClassName="sidebar-selected" className="sidebar-entry" exact to="/vegetables">Vegetables</NavLink>
      <NavLink activeClassName="sidebar-selected" className="sidebar-entry" exact to="/fruits">Fruits</NavLink>
      <NavLink activeClassName="sidebar-selected" className="sidebar-entry" exact to="/cheese">Cheese</NavLink>
    </div>
  );
};

export default Sidebar;
