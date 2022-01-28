import React from "react";

import "../styles/scss/_productItem.scss";

/* ProductItem Component */
const ProductItem = ({
  title,
  description,
  price,
  currency,
  unit,
  quantity,
  id,
  updateBasket,
  basket,
}) => {
  return (
    <div className="category-content-wrapper">
      <div className="category-content">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">
          <span>{price}</span>
          <span>{currency}</span>
          <span>/{unit}</span>
          <span className="product-quantity">({quantity} in stock)</span>
        </div>
        <div className="product-handle-basket-wrapper">
          <button
            className="product-handle-basket"
            onClick={() => updateBasket(-1, id, quantity, { title, price })}
          >
            -
          </button>
          <div className="product-basket-quantity">
            {basket.length > 0 &&
            basket.filter((i) => i?.id === id)[0]?.quantity
              ? basket.filter((i) => i?.id === id)[0]?.quantity
              : 0}
          </div>
          <button
            className="product-handle-basket"
            onClick={() => updateBasket(1, id, quantity, { title, price })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
