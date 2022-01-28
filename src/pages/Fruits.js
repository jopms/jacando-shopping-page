import React from "react";
import ProductItem from "../components/ProductItem";

import { ReactComponent as CaretLeft } from "../styles/img/caret-left.svg";
import { ReactComponent as CaretRight } from "../styles/img/caret-right.svg";

/* Fruits category */
const Fruits = () => {
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
          per={" /kg"}
        />
        <ProductItem
          title="Banana"
          description={desc}
          price={3.5}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Banana"
          description={desc}
          price={3.5}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Banana"
          description={desc}
          price={3.5}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Banana"
          description={desc}
          price={3.5}
          currency="€"
          per={"/kg"}
        />
      </div>
    </>
  );
};

export default Fruits;
