import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import shoppingCart from "../styles/img/shopping-cart.png";
import "../styles/scss/_shoppingCart.scss";

/* Shopping cart component */
const ShoppingCart = () => {
  const basket = useSelector((state) => state.basket.value);

  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    if (basket.length > 0) {
      let count = 0;
      basket.forEach((i) => {
        count = count + i.quantity;
      });
      setBasketTotal(count);
    }
  }, [basket]);

  return (
    <button className="shopping-cart-button" onClick={() => {}}>
      <div className="shopping-cart-notification">{basketTotal}</div>
      <img
        className="shopping-cart-img"
        src={shoppingCart}
        alt="shopping-cart"
      />
    </button>
  );
};

export default ShoppingCart;
