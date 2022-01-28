import React from "react";

import "../styles/scss/_productItem.scss";

/* ProductItem Component */
const ProductItem = ({ title, description, price, currency, per,  }) => {
  return (
    <div className="category-content-wrapper">
      <div className="category-content">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">
          <span>{price}</span>
          <span>{currency}</span>
          <span>{per}</span>
        </div>
      </div>
      <div className="product-add-basket">
        +
      </div>
    </div>
  );
};

export default ProductItem;
