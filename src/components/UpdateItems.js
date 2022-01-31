import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { UPDATE_ITEM } from "../graphQl/Mutations";

import { setTriggerGetItems } from "../features/items/itemsSlicer";
import { setTriggerUpdateItems } from "../features/items/itemsSlicer";
import { updateGlobalBasket } from "../features/basket/basketSlicer";

const UpdateItems = ({ id, amount, closeCart }) => {
  const dispatch = useDispatch();
  const triggerUpdateItems = useSelector(
    (state) => state.items.triggerUpdateItems
  );

  const onMutationSuccess = () => {
    window.localStorage.removeItem("basket");
    dispatch(setTriggerUpdateItems(false));
    dispatch(updateGlobalBasket([]));
    dispatch(setTriggerGetItems(true));
    closeCart(true);
  };

  const getError = () => {
    window.alert("Error! Could not buy items!")
    dispatch(setTriggerGetItems(true));
    closeCart(true);
  };

  const [itemsVariable] = useMutation(
    UPDATE_ITEM,
    { onCompleted: onMutationSuccess, onError: getError }
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
  }, [triggerUpdateItems]);

  return <></>;
};

export default UpdateItems;
