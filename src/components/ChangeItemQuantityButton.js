import React from "react";

import "../styles/scss/_productItem.scss";

/**
 * Handles item quantity
 */
const ChangeItemQuantityButton = ({ symbol, handleItemQuantity }) => {
  return (
    <button
      className="product-handle-basket"
      onClick={() => {
        handleItemQuantity();
      }}
    >
      {symbol}
    </button>
  );
};

export default ChangeItemQuantityButton;
