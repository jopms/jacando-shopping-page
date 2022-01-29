import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import shoppingCart from "../styles/img/shopping-cart.png";
import "../styles/scss/_shoppingCart.scss";
import Modal from "react-modal";

/* Shopping cart component */
const ShoppingCart = () => {
  const basket = useSelector((state) => state.basket.value);

  const [basketTotal, setBasketTotal] = useState(0);
  const [basketTotalAmount, setBasketTotalAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (basket.length > 0) {
      let count = 0;
      let amount = 0;
      basket.forEach((i) => {
        count = count + i.quantity;
        amount = amount + i.quantity * i.price;
      });
      setBasketTotal(count);
      setBasketTotalAmount(amount);
    } else {
      setBasketTotal(0);
      setBasketTotalAmount(0);
    }
  }, [basket]);

  const renderCartItems = () =>
    basket.length === 0 ? (
      <div className="modal-no-items-text">No items in cart yet!</div>
    ) : (
      basket.map((item, i) => (
        <div key={item.id}>
          <div className="modal-individual-item">
            <span>
              <b>{item.quantity}x</b>
              <span className="modal-individual-item-text">{item.title}</span>
            </span>
            <span>
              {item.price} {item.currency}
            </span>
          </div>
          {i < basket.length - 1 && (
            <hr className="modal-individual-separator" />
          )}
        </div>
      ))
    );

  return (
    <>
      <button className="shopping-cart-button" onClick={setIsOpen}>
        <div className="shopping-cart-notification">{basketTotal}</div>
        <img
          className="shopping-cart-img"
          src={shoppingCart}
          alt="shopping-cart"
        />
      </button>
      <Modal
        appElement={document.getElementById("root") || undefined}
        isOpen={isOpen ? true : false}
        onRequestClose={toggleModal}
        contentLabel="Cart Modal"
        className="cart-modal"
        overlayClassName="cart-modal-overlay"
        closeTimeoutMS={300}
      >
        <>
          <div className="cart-modal-title">My cart</div>
          <hr className="modal-title-separator" />
          {renderCartItems()}
          <div className="modal-button-checkout-wrapper">
            <button className="modal-button-checkout" onClick={toggleModal}>
              <b>
                {basketTotal > 0
                  ? `Buy ● ${basketTotalAmount} ${basket[0]?.currency}`
                  : "Close cart"}
              </b>
            </button>
          </div>
        </>
      </Modal>
    </>
  );
};

export default ShoppingCart;
