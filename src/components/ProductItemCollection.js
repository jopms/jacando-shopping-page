import React, { useEffect } from "react";
import IndividualProductItem from "../components/IndividualProductItem";
import { useSelector, useDispatch } from "react-redux";
import { updateGlobalBasket } from "../features/basket/basketSlicer";

import { ReactComponent as CaretLeft } from "../styles/img/caret-left.svg";
import { ReactComponent as CaretRight } from "../styles/img/caret-right.svg";

/* List of product items */
const ProductItemCollection = ({ category }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value);

  console.log(category);

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
          <CaretRight className="arrow" />
        </button>
      </div>
      <div className="product-item-wrapper">
        <IndividualProductItem
          title="Banana"
          description={desc}
          price={3.5}
          currency="€"
          unit="kg"
          quantity={3}
          basket={basket}
          id={0}
        />
        <IndividualProductItem
          title="Orange"
          description={desc}
          price={4}
          currency="€"
          unit="kg"
          quantity={12}
          basket={basket}
          id={1}
        />

        <IndividualProductItem
          title="Pear"
          description={desc}
          price={3}
          currency="€"
          unit="kg"
          quantity={5}
          basket={basket}
          id={2}
        />

        <IndividualProductItem
          title="Mango"
          description={desc}
          price={5}
          currency="€"
          unit="kg"
          quantity={20}
          basket={basket}
          id={3}
        />

        <IndividualProductItem
          title="Banana"
          description={desc}
          price={2}
          currency="€"
          unit="kg"
          quantity={23}
          basket={basket}
          id={4}
        />
      </div>
    </>
  );
};

export default ProductItemCollection;
