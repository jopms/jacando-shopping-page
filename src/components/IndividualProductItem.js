import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGlobalBasket } from "../features/basket/basketSlicer";

import "../styles/scss/_productItem.scss";
import { getUpdatedBasket } from "../utils/getUpdatedBasket";

/* IndividualProductItem Component */
const IndividualProductItem = ({
  title,
  description,
  price,
  currency,
  unit,
  quantity,
  id,
  basket,
}) => {
  const dispatch = useDispatch();

  const updateBasket = (
    itemQuantity,
    id,
    availableQuantity,
    details,
    basket
  ) => {
    const updatedBasket = getUpdatedBasket(
      itemQuantity,
      id,
      availableQuantity,
      details,
      basket
    );
    
    if (updatedBasket) {
      dispatch(updateGlobalBasket(updatedBasket));
      window.localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
  };

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
            onClick={() => {
              updateBasket(
                -1,
                id,
                quantity,
                { title, price, currency },
                basket
              );
            }}
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
            onClick={() => {
              updateBasket(1, id, quantity, { title, price, currency }, basket);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProductItem;
