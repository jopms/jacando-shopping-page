import React from "react";
import ProductItem from "../components/ProductItem";

import { ReactComponent as CaretLeft } from "../styles/img/caret-left.svg";
import { ReactComponent as CaretRight } from "../styles/img/caret-right.svg";

/* Cheese category */
const Cheese = () => {
  const desc =
    "Roquefort is a sheep milk cheese from Southern France, and is one of the world's best known blue cheeses.";
  return (
    <>
      <div className="product-arrows">
        <button>
          <CaretLeft className="arrow" />
        </button>
        <div className="product-arrow-text">1/300</div>
        <button>
          <CaretRight className="arrow"></CaretRight>
        </button>
      </div>
      <div className="product-item-wrapper">
        <ProductItem
          title="Roquefort"
          description={desc}
          price={10}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Roquefort"
          description={desc}
          price={10}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Roquefort"
          description={desc}
          price={10}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Roquefort"
          description={desc}
          price={10}
          currency="€"
          per={"/kg"}
        />
        <ProductItem
          title="Roquefort"
          description={desc}
          price={10}
          currency="€"
          per={"/kg"}
        />
      </div>
    </>
  );
};

export default Cheese;
