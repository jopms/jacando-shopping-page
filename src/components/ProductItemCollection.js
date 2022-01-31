import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ITEMS_AMOUNT } from "../graphQl/Queries";
import IndividualProductItem from "../components/IndividualProductItem";
import GetItems from "../components/GetItems";

import { ReactComponent as CaretLeft } from "../styles/img/caret-left.svg";
import { ReactComponent as CaretRight } from "../styles/img/caret-right.svg";

import { updateGlobalBasket } from "../features/basket/basketSlicer";

/**
 * Renders list of product items
 *
 * First fetches the amount of items to calculate pagination (necessary to fetch items)
 * Then fetches the items passing the pagination value, and limit, go get the corresponding data to each page (limited by limit variable)
 *
 *
 */
const ProductItemCollection = ({ category }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.value);
  const items = useSelector((state) => state.items.value);

  const [itemsAmount, setItemsAmount] = useState(0); //Total of items amount
  const [pagination, setPagination] = useState(0); //Current page being displayed

  //Function that runs when query get item is completed - Updates amount of items value
  const onQueryGetItemsCompleted = () => {
    data?.itemsAmount?.count > 0 && setItemsAmount(data?.itemsAmount.count);
  };

  //Sets pagination value
  const handlePagination = (amount) => {
    if (
      amount + pagination >= 0 &&
      amount + pagination < Math.ceil(itemsAmount / 5)
    ) {
      setPagination(pagination + amount);
    }
  };

  //Query to get item's amount
  const { error, loading, data } = useQuery(GET_ITEMS_AMOUNT, {
    variables: { category },
    onCompleted: onQueryGetItemsCompleted,
  });

  //Updates basket depending on localStorage value
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

  //Trigger loading spinner when query is getting item's amount
  useEffect(() => {
    loading && console.log("LOADING GET AMOUNT!");
  }, [loading]);

  //Triggers error message when query get item's amount is not successful
  useEffect(() => {
    error && window.alert("Error! Could not get item's amount!");
  }, [error]);

  return (
    <div className="product-wrapper">
      {itemsAmount ? (
        <div className="product-arrows">
          <button>
            <CaretLeft
              className="arrow"
              onClick={() => {
                handlePagination(-1);
              }}
            />
          </button>
          <div className="product-arrow-text">
            {pagination + 1}/{Math.ceil(itemsAmount / 5)}
          </div>
          <button>
            <CaretRight
              className="arrow"
              onClick={() => {
                handlePagination(1);
              }}
            />
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="product-item-wrapper">
        {items &&
          items.map((item) => {
            return (
              <IndividualProductItem
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                currency={item.currency}
                unit={item.unit}
                quantity={item.amount}
                basket={basket}
                id={item.id}
              />
            );
          })}
      </div>
      {itemsAmount ? (
        <GetItems
          category={category}
          pagination={pagination * 5}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductItemCollection;
