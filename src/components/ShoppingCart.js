import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import ChangeItemQuantityButton from "../components/ChangeItemQuantityButton";
import UpdateItems from "../components/UpdateItems";

import shoppingCart from "../styles/img/shopping-cart.png";
import "../styles/scss/_shoppingCart.scss";

import { updateGlobalBasket } from "../features/basket/basketSlicer";
import { getUpdatedBasket } from "../utils/getUpdatedBasket";
import { setTriggerUpdateItems } from "../features/items/itemsSlicer";

/* Shopping cart component */
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value);
  const triggerUpdateItems = useSelector(
    (state) => state.items.triggerUpdateItems
  );

  const [basketTotal, setBasketTotal] = useState(0);
  const [basketTotalAmount, setBasketTotalAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState([]);
  const [amount, setAmount] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const checkoutBuy = () => {
    if (basketTotal > 0) {
      let ids = [];
      let quantity = [];
      basket.forEach((item) => {
        ids.push(item.id);
        quantity.push(item.availableQuantity - item.quantity);
      });
      setAmount(quantity);
      setId(ids);
    }
  };

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

  useEffect(() => {
    if (id.length > 0 && amount.length > 0) {
      dispatch(setTriggerUpdateItems(true));
    }
  }, [id, amount]);

  const renderCartItems = () =>
    basket.length === 0 ? (
      <div className="modal-no-items-text">No items in cart yet!</div>
    ) : (
      basket.map((item) => (
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
          <div className="modal-change-item-button-wrapper">
            <ChangeItemQuantityButton
              symbol="-"
              handleItemQuantity={() =>
                updateBasket(
                  -1,
                  item.id,
                  item.availableQuantity,
                  {
                    title: item.title,
                    price: item.price,
                    currency: item.currency,
                  },
                  basket
                )
              }
            />
            <ChangeItemQuantityButton
              symbol="+"
              handleItemQuantity={() =>
                updateBasket(
                  1,
                  item.id,
                  item.availableQuantity,
                  {
                    title: item.title,
                    price: item.price,
                    currency: item.currency,
                  },
                  basket
                )
              }
            />
          </div>
          <hr className="modal-individual-separator" />
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
        closeTimeoutMS={0}
      >
        <>
          <div className="cart-modal-title">My cart</div>
          <hr className="modal-title-separator" />
          <div className="cart-modal-content"> {renderCartItems()}</div>
          <div className="modal-button-checkout-wrapper">
            <button
              className="modal-button-checkout"
              onClick={basketTotal > 0 ? checkoutBuy : toggleModal}
            >
              <b>
                {basketTotal > 0
                  ? `Buy ● ${basketTotalAmount} ${basket[0]?.currency}`
                  : "Close cart"}
              </b>
            </button>
          </div>
        </>
      </Modal>
      {triggerUpdateItems && (
        <UpdateItems id={id} amount={amount} closeCart={toggleModal} />
      )}
    </>
  );
};

export default ShoppingCart;
