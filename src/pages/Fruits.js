import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { updateGlobalBasket } from "../features/basket/basketSlicer";
import { ReactComponent as CaretLeft } from "../styles/img/caret-left.svg";
import { ReactComponent as CaretRight } from "../styles/img/caret-right.svg";

/* Fruits category */
const Fruits = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value);

  useEffect(() => {
    const localStorageBasket = JSON.parse(
      window.localStorage.getItem("basket")
    );
    if (localStorageBasket && Object.keys(localStorageBasket).length > 0) {
      dispatch(updateGlobalBasket(localStorageBasket));
    } else {
      window.localStorage.setItem("basket", JSON.stringify({}));
    }
  }, [dispatch]);

  const updateBasket = (itemQuantity, id, availableQuantity, details) => {
    const currentItemQuantity = basket.filter((i) => i?.id === id)[0]?.quantity;
    const updatedItemQuantity =
      (currentItemQuantity ? currentItemQuantity : 0) + itemQuantity;

    if (basket.length > 0) {
      if (currentItemQuantity === undefined) {
        const updatedBasket = [
          ...basket,
          { id, quantity: updatedItemQuantity, ...details },
        ];
        dispatch(updateGlobalBasket(updatedBasket));
        window.localStorage.setItem("basket", JSON.stringify(updatedBasket));
        return;
      }

      if (
        updatedItemQuantity <= availableQuantity &&
        updatedItemQuantity >= 0
      ) {
        const updatedBasket = basket.map((i) => {
          if (i.id === id) {
            return { id, quantity: updatedItemQuantity, ...details };
          } else {
            return i;
          }
        });
        dispatch(updateGlobalBasket(updatedBasket));
        window.localStorage.setItem("basket", JSON.stringify(updatedBasket));
      }
    } else {
      dispatch(
        updateGlobalBasket([{ id, quantity: updatedItemQuantity, ...details }])
      );
      window.localStorage.setItem(
        "basket",
        JSON.stringify([{ id, quantity: updatedItemQuantity, ...details }])
      );
    }
  };

  const desc =
    "A banana is a tropical fruit that's quite popular all over the world. It grows in bunches on a banana tree.";
  return (
    <>
      <div className="product-arrows">
        <button>
          <CaretLeft className="arrow" />
        </button>
        <div className="product-arrow-text">1/500</div>
        <button>
          <CaretRight className="arrow"></CaretRight>
        </button>
      </div>
      <div className="product-item-wrapper">
        <ProductItem
          title="Banana"
          description={desc}
          price={3.5}
          currency="€"
          unit="kg"
          quantity={3}
          updateBasket={updateBasket}
          basket={basket}
          id={0}
        />
        <ProductItem
          title="Orange"
          description={desc}
          price={4}
          currency="€"
          unit="kg"
          quantity={12}
          updateBasket={updateBasket}
          basket={basket}
          id={1}
        />
        <ProductItem
          title="Pear"
          description={desc}
          price={3}
          currency="€"
          unit="kg"
          quantity={5}
          updateBasket={updateBasket}
          basket={basket}
          id={2}
        />
        <ProductItem
          title="Mango"
          description={desc}
          price={5}
          currency="€"
          unit="kg"
          quantity={20}
          updateBasket={updateBasket}
          basket={basket}
          id={3}
        />
        <ProductItem
          title="Banana"
          description={desc}
          price={2}
          currency="€"
          unit="kg"
          quantity={23}
          updateBasket={updateBasket}
          basket={basket}
          id={4}
        />
      </div>
    </>
  );
};

export default Fruits;
