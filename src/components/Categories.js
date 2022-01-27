import React from "react";
import "../styles/scss/_sidebar.scss";

/* Categories Component */
const Categories = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-entry">Vegetables</div>
      <div className="sidebar-entry">Fruits</div>
      <div className="sidebar-entry">Cheese</div>
    </div>
  );
};

export default Categories;
