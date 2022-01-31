import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "./Spinner";
import { useMutation } from "@apollo/client";
import { UPDATE_ITEM } from "../graphQl/Mutations";
import { CREATER_ORDER } from "../graphQl/Mutations";

import { setTriggerGetItems } from "../features/items/itemsSlicer";
import { setTriggerUpdateItems } from "../features/items/itemsSlicer";
import { updateGlobalBasket } from "../features/basket/basketSlicer";

/**
 * Updates items query and loads spinenr
 */
const UpdateItems = ({ id, amount, closeCart }) => {
  const dispatch = useDispatch();
  const triggerUpdateItems = useSelector(
    (state) => state.items.triggerUpdateItems
  );

  //Handles query update items error
  const handleError = () => {
    window.alert("Error! Could create order!");
    dispatch(setTriggerGetItems(true));
    closeCart(true);
  };

  //Updates basket from local storage and redux value (success buy so deletes it) and reset triggers get items query to update front page
  const onUpdateItemsSuccess = () => {
    window.localStorage.removeItem("basket");
    dispatch(setTriggerUpdateItems(false));
    dispatch(updateGlobalBasket([]));
    dispatch(setTriggerGetItems(true));
    closeCart(true);
  };

  //Update items query
  const [itemsVariable, { loading: loadingUpdateItems }] = useMutation(
    UPDATE_ITEM,
    {
      onCompleted: onUpdateItemsSuccess,
      onError: handleError,
    }
  );

  //After create order success query triggers updateItems query
  const onCreateOrderSuccess = () => {
    id.forEach((id_, i) => {
      itemsVariable({
        variables: {
          id: id_,
          amount: amount[i],
        },
      });
    });
  };

  //Create items query
  const [orderVariable, { loading: loadingCreateOrder }] = useMutation(
    CREATER_ORDER,
    {
      onCompleted: onCreateOrderSuccess,
      onError: handleError,
    }
  );

  //Triggers update item query
  useEffect(() => {
    triggerUpdateItems &&
      orderVariable({
        variables: {
          items: id,
        },
      });
  }, [id, orderVariable, triggerUpdateItems]);

  return <Spinner loading={loadingUpdateItems || loadingCreateOrder} />;
};

export default UpdateItems;
