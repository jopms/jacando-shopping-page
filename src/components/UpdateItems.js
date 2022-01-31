import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { useMutation } from "@apollo/client";
import { UPDATE_ITEM } from "../graphQl/Mutations";
import { CREATER_ORDER } from "../graphQl/Mutations";

import { setTriggerGetItems } from "../features/items/itemsSlicer";
import { setTriggerUpdateItems } from "../features/items/itemsSlicer";
import { updateGlobalBasket } from "../features/basket/basketSlicer";

const UpdateItems = ({ id, amount, closeCart }) => {
  const dispatch = useDispatch();
  const triggerUpdateItems = useSelector(
    (state) => state.items.triggerUpdateItems
  );

  const handleError = () => {
    window.alert("Error! Could create order!");
    dispatch(setTriggerGetItems(true));
    closeCart(true);
  };

  const onUpdateItemsSuccess = () => {
    orderVariable({
      variables: {
        items: id,
      },
    });
  };

  const [itemsVariable, { loading: loadingUpdateItems }] = useMutation(
    UPDATE_ITEM,
    {
      onCompleted: onUpdateItemsSuccess,
      onError: handleError,
    }
  );

  const onCreateOrderSuccess = () => {
    window.localStorage.removeItem("basket");
    dispatch(setTriggerUpdateItems(false));
    dispatch(updateGlobalBasket([]));
    dispatch(setTriggerGetItems(true));
    closeCart(true);
  };

  const [orderVariable, { loading: loadingCreateOrder }] = useMutation(
    CREATER_ORDER,
    {
      onCompleted: onCreateOrderSuccess,
      onError: handleError,
    }
  );

  useEffect(() => {
    id.forEach((id_, i) => {
      itemsVariable({
        variables: {
          id: id_,
          amount: amount[i],
        },
      });
    });
  }, [triggerUpdateItems, amount, id, itemsVariable]);

  return <Spinner loading={loadingUpdateItems || loadingCreateOrder} />;
};

export default UpdateItems;
