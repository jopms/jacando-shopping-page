import React from "react";
import ProductItem from "../components/ProductItem";

import { ReactComponent as CaretLeft } from "../styles/img/caret-left.svg";
import { ReactComponent as CaretRight } from "../styles/img/caret-right.svg";

/* Vegetables category */
const Vegetables = () => {
  const desc =
    "The domestic carrot has been selectively bred for its greatly enlarged, more palatable, less woody-textured taproot.";
  return (
    <>
      <div className="product-arrows">
        <button>
          <CaretLeft className="arrow" />
        </button>
        <div className="product-arrow-text">1/100</div>
        <button>
          <CaretRight className="arrow"></CaretRight>
        </button>
      </div>
      <div className="product-item-wrapper">
        <ProductItem
          title="Carrot"
          description={desc}
          price={1.7}
          currency="€"
          per={" /kg"}
        />
        <ProductItem
          title="Carrot"
          description={desc}
          price={1.7}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Carrot"
          description={desc}
          price={1.7}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Carrot"
          description={desc}
          price={1.7}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Carrot"
          description={desc}
          price={1.7}
          currency="€"
          per={"/kg"}
        />
      </div>
    </>
  );
};

export default Vegetables;
